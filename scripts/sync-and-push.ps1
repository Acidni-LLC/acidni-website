param(
  [string]$Branch = "master",
  [switch]$AllowForce
)

$ErrorActionPreference = 'Stop'

if (-not (Get-Command git -ErrorAction SilentlyContinue)) { Write-Error "Git is not installed or not in PATH." }

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

Write-Host "Ensuring clean working tree (autostash during rebase) ..."
Invoke-Git @("status","--porcelain") -IgnoreErrors

Write-Host "Fetching origin ..."
Invoke-Git @("fetch","origin")

Write-Host "Syncing local '$Branch' with origin/$Branch via rebase ..."
$code = Invoke-Git @("pull","--rebase","--autostash","origin",$Branch) -IgnoreErrors
if ($code -ne 0) {
  Write-Warning "Rebase failed; attempting merge as fallback ..."
  Invoke-Git @("rebase","--abort") -IgnoreErrors
  Invoke-Git @("pull","origin",$Branch,"--no-edit")
}

Write-Host "Pushing '$Branch' to origin ..."
$pushCode = Invoke-Git @("push","-u","origin",$Branch) -IgnoreErrors
if ($pushCode -ne 0) {
  if ($AllowForce) {
    Write-Warning "Non-fast-forward; pushing with --force-with-lease ..."
    Invoke-Git @("push","-u","origin",$Branch,"--force-with-lease")
  } else {
    throw "Push rejected (non-fast-forward). Re-run with -AllowForce or resolve conflicts manually."
  }
}

Write-Host "Push completed successfully."
exit 0
