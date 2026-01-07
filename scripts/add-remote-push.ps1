param(
  [string]$RepoUrl = "https://github.com/Acidni-LLC/acidni-website.git",
  [string]$Branch = "master"
)

Write-Host "Configuring git remote and pushing branch '$Branch' to $RepoUrl..."

if (-not (Get-Command git -ErrorAction SilentlyContinue)) {
  Write-Error "Git is not installed or not in PATH."
  exit 1
}

try {
  git rev-parse --is-inside-work-tree | Out-Null
} catch {
  Write-Error "Not inside a git repository."
  exit 1
}

$hasOrigin = git remote | Select-String -SimpleMatch "origin"
if (-not $hasOrigin) {
  git remote add origin $RepoUrl
  if ($LASTEXITCODE -ne 0) { Write-Error "Failed to add remote origin."; exit 1 }
  Write-Host "Added remote 'origin' -> $RepoUrl"
} else {
  git remote set-url origin $RepoUrl
  Write-Host "Updated remote 'origin' -> $RepoUrl"
}

git push -u origin $Branch
if ($LASTEXITCODE -ne 0) {
  Write-Error "Failed to push branch '$Branch' to origin."
  exit 1
}

Write-Host "Pushed '$Branch' to $RepoUrl successfully."
exit 0
