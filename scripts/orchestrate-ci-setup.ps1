param(
  [string]$SubscriptionId = "",
  [string]$ResourceGroup = "rg-prod-acidni-mktg-web",
  [string]$StaticWebAppName = "swa-acidni-website",
  [string]$Repo = "Acidni-LLC/acidni-website",
  [string]$RepoUrl = "https://github.com/Acidni-LLC/acidni-website.git",
  [string]$Branch = "master",
  [switch]$ForceRefreshToken,
  [switch]$AllowForce
)

$ErrorActionPreference = 'Stop'

function Invoke-Git {
  param([Parameter(Mandatory=$true)][string[]]$Args, [switch]$IgnoreErrors)
  $psi = New-Object System.Diagnostics.ProcessStartInfo
  $psi.FileName = "git"
  $psi.Arguments = ($Args -join ' ')
  $psi.RedirectStandardOutput = $true
  $psi.RedirectStandardError = $true
  $psi.UseShellExecute = $false
  $psi.CreateNoWindow = $true
  $p = [System.Diagnostics.Process]::Start($psi)
  $stdout = $p.StandardOutput.ReadToEnd()
  $stderr = $p.StandardError.ReadToEnd()
  $p.WaitForExit()
  if (-not $IgnoreErrors -and $p.ExitCode -ne 0) {
    if ($stdout) { Write-Host $stdout.Trim() }
    if ($stderr) { Write-Host $stderr.Trim() }
    throw "git $($Args -join ' ') failed with exit code $($p.ExitCode)"
  }
  if ($stdout) { Write-Host $stdout.Trim() }
  if ($stderr) { Write-Host $stderr.Trim() }
  return $p.ExitCode
}

function Ensure-Command {
  param([string]$Name, [string]$InstallHint)
  if (-not (Get-Command $Name -ErrorAction SilentlyContinue)) {
    Write-Error "Required command '$Name' not found. $InstallHint"
  }
}

Write-Host "== CI/CD Orchestration: SWA Token -> GitHub Secret -> Push to '$Branch' ==" -ForegroundColor Cyan

# Validate prerequisites
Ensure-Command -Name git -InstallHint "Install Git: https://git-scm.com/downloads"
Ensure-Command -Name az -InstallHint "Install Azure CLI: https://aka.ms/installazurecliwindows and run 'az login'"
Ensure-Command -Name gh -InstallHint "Install GitHub CLI: https://cli.github.com and run 'gh auth login'"

# Login checks (non-fatal guidance if not yet authenticated)
try { az account show | Out-Null } catch { Write-Error "Azure CLI not authenticated. Run 'az login' and optionally 'az account set --subscription <id>'." }
try { gh auth status | Out-Null } catch { Write-Error "GitHub CLI not authenticated. Run 'gh auth login'." }

# Optionally set subscription
if ($SubscriptionId -and -not [string]::IsNullOrWhiteSpace($SubscriptionId)) {
  Write-Host "Setting Azure subscription: $SubscriptionId"
  az account set --subscription $SubscriptionId | Out-Null
}

# Retrieve SWA deployment token if missing or forced
$tokenPath = Join-Path (Get-Location) "tmp_deployment_token.txt"
$token = ""
if ($ForceRefreshToken -or -not (Test-Path $tokenPath)) {
  Write-Host "Fetching SWA deployment token for $StaticWebAppName in $ResourceGroup ..."
  $token = az staticwebapp secrets list `
    --name $StaticWebAppName `
    --resource-group $ResourceGroup `
    --query "properties.apiKey" -o tsv
  if (-not $token) { Write-Error "Failed to retrieve SWA token. Check resource group/name and Azure permissions." }
  Set-Content -Path $tokenPath -Value $token -NoNewline
  Write-Host "Token saved to $tokenPath (gitignored)."
} else {
  $token = Get-Content -Path $tokenPath -Raw
}

$token = $token.Trim()
if ([string]::IsNullOrWhiteSpace($token)) { Write-Error "SWA token is empty. Cannot continue." }

# Set GitHub secret
Write-Host "Setting GitHub secret AZURE_STATIC_WEB_APPS_API_TOKEN for $Repo ..."
gh secret set AZURE_STATIC_WEB_APPS_API_TOKEN -R $Repo -b ([System.Text.Encoding]::UTF8.GetBytes($token))

# Configure git remote and push
Write-Host "Ensuring remote 'origin' is $RepoUrl ..."
$hasOrigin = (Invoke-Git @("remote") -IgnoreErrors) -match "origin"
if (-not $hasOrigin) {
  Invoke-Git @("remote","add","origin",$RepoUrl)
} else {
  Invoke-Git @("remote","set-url","origin",$RepoUrl)
}

Write-Host "Fetching latest from origin ..."
Invoke-Git @("fetch","origin")

Write-Host "Attempting pull --rebase to sync with remote '$Branch' ..."
if ((Invoke-Git @("pull","--rebase","--autostash","origin",$Branch) -IgnoreErrors) -ne 0) {
  Write-Warning "Rebase encountered issues. Trying a regular pull merge as fallback ..."
  Invoke-Git @("rebase","--abort") -IgnoreErrors
  Invoke-Git @("pull","origin",$Branch,"--no-edit")
}

Write-Host "Pushing '$Branch' to origin to trigger GitHub Actions ..."
if ((Invoke-Git @("push","-u","origin",$Branch) -IgnoreErrors) -ne 0) {
  if ($AllowForce) {
    Write-Warning "Non-fast-forward push. Using --force-with-lease as requested ..."
    if ((Invoke-Git @("push","-u","origin",$Branch,"--force-with-lease") -IgnoreErrors) -ne 0) { throw "Force-with-lease push failed. Manual conflict resolution required." }
  } else {
    throw "Push rejected (non-fast-forward). Re-run with -AllowForce to override, or resolve conflicts then push."
  }
}

Write-Host "All set. Monitor the workflow in GitHub Actions for $Repo." -ForegroundColor Green
Write-Host "Tip: gh run watch -R $Repo --exit-status"
