param(
  [string]$OutDir = "out",
  [string]$ZipPath = "dist/swa-artifact.zip"
)

$ErrorActionPreference = 'Stop'

if (-not (Get-Command node -ErrorAction SilentlyContinue)) { Write-Error "Node.js not found in PATH." }

Write-Host "Cleaning previous artifact ..."
if (Test-Path $ZipPath) { Remove-Item -Force $ZipPath }
if (-not (Test-Path (Split-Path $ZipPath))) { New-Item -ItemType Directory -Force -Path (Split-Path $ZipPath) | Out-Null }

Write-Host "Building (next export) ..."
npm run export

Write-Host "Copying staticwebapp.config.json into $OutDir ..."
Copy-Item -Force "staticwebapp.config.json" "$OutDir/staticwebapp.config.json"

Write-Host "Creating zip artifact at $ZipPath ..."
if (Test-Path $ZipPath) { Remove-Item -Force $ZipPath }
Compress-Archive -Path "$OutDir/*" -DestinationPath $ZipPath -Force

Write-Host "Artifact ready: $ZipPath"
Write-Host "Upload this zip in Azure Portal: Static Web App -> Environments -> default -> Upload"
exit 0
