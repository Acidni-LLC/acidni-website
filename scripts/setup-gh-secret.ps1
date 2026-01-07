param(
  [string]$Repo = "Acidni-LLC/acidni-website",
  [string]$SecretName = "AZURE_STATIC_WEB_APPS_API_TOKEN",
  [string]$Token = ""
)

Write-Host "Setting GitHub secret '$SecretName' for repo $Repo..."

if (-not (Get-Command gh -ErrorAction SilentlyContinue)) {
  Write-Error "GitHub CLI 'gh' is not installed. Install from https://cli.github.com and run 'gh auth login'."
  exit 1
}

if (-not $Token -or [string]::IsNullOrWhiteSpace($Token)) {
  if ($env:AZURE_STATIC_WEB_APPS_API_TOKEN) {
    $Token = $env:AZURE_STATIC_WEB_APPS_API_TOKEN
  } elseif (Test-Path -Path "tmp_deployment_token.txt") {
    $Token = Get-Content -Path "tmp_deployment_token.txt" -Raw
  } else {
    Write-Error "No token provided. Set -Token, AZURE_STATIC_WEB_APPS_API_TOKEN env var, or place token in tmp_deployment_token.txt."
    exit 1
  }
}

$Token = $Token.Trim()
if ([string]::IsNullOrWhiteSpace($Token)) {
  Write-Error "Token is empty."
  exit 1
}

gh auth status | Out-Null
if ($LASTEXITCODE -ne 0) {
  Write-Error "GitHub CLI not authenticated. Run 'gh auth login' first."
  exit 1
}

$bytes = [System.Text.Encoding]::UTF8.GetBytes($Token)
gh secret set $SecretName -R $Repo -b $bytes
if ($LASTEXITCODE -ne 0) {
  Write-Error "Failed to set secret $SecretName."
  exit 1
}

Write-Host "Secret $SecretName set successfully for $Repo."
exit 0
