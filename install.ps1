# Installs the design skill for Claude Code (and Codex if present) on Windows.
# The skill folder is linked with a junction (no admin rights needed), so this folder stays the single source.
# Usage: .\install.ps1            install
#        .\install.ps1 -Remove    uninstall (only removes what points here or was copied from here)
param([switch]$Remove)
$ErrorActionPreference = 'Stop'

$Source = $PSScriptRoot
$Name = 'design'
$ClaudeDir = Join-Path $HOME '.claude'
$CodexDir = Join-Path $HOME '.codex'

function Test-Ours([string]$Path) {
  $item = Get-Item -LiteralPath $Path -Force -ErrorAction SilentlyContinue
  if (-not $item) { return $false }
  if ($item.LinkType) { return ([string]$item.Target).StartsWith($Source) }
  return $false
}

function Remove-Link([string]$Path) {
  $item = Get-Item -LiteralPath $Path -Force
  if ($item.PSIsContainer) {
    # Deletes the junction itself, never the folder it points to.
    [System.IO.Directory]::Delete($Path)
  } else {
    Remove-Item -LiteralPath $Path -Force
  }
}

function Link-Folder([string]$Target) {
  New-Item -ItemType Directory -Force -Path (Split-Path $Target) | Out-Null
  if (Test-Ours $Target) { Remove-Link $Target }
  elseif (Test-Path -LiteralPath $Target) {
    Write-Warning "Already exists and is not a link, leaving it alone: $Target"
    return
  }
  New-Item -ItemType Junction -Path $Target -Target $Source | Out-Null
  Write-Host "Linked: $Target -> $Source"
}

# Linking single files needs Developer Mode or admin rights; without them, the file is copied.
function Link-File([string]$Target, [string]$File) {
  New-Item -ItemType Directory -Force -Path (Split-Path $Target) | Out-Null
  if (Test-Ours $Target) { Remove-Link $Target }
  elseif (Test-Path -LiteralPath $Target) {
    # An identical file is a copy from a previous install; anything else belongs to someone else.
    if ((Get-FileHash $Target).Hash -ne (Get-FileHash $File).Hash) {
      Write-Warning "Already exists, leaving it alone: $Target"
      return
    }
    Remove-Item -LiteralPath $Target -Force
  }
  try {
    New-Item -ItemType SymbolicLink -Path $Target -Target $File | Out-Null
    Write-Host "Linked: $Target -> $File"
  } catch {
    Copy-Item -LiteralPath $File -Destination $Target
    Write-Host "Copied: $Target (run install.ps1 again after git pull to update it)"
    $script:Copied = $true
  }
}

$agents = Get-ChildItem -Path (Join-Path $Source 'agents') -Filter '*.md'

if ($Remove) {
  $targets = @((Join-Path $ClaudeDir "skills\$Name"), (Join-Path $CodexDir "skills\$Name"))
  foreach ($target in $targets) {
    if (Test-Ours $target) { Remove-Link $target; Write-Host "Removed: $target" }
  }
  foreach ($agent in $agents) {
    $target = Join-Path $ClaudeDir "agents\$($agent.Name)"
    if (Test-Ours $target) { Remove-Link $target; Write-Host "Removed: $target" }
    elseif ((Test-Path -LiteralPath $target) -and
      (Get-FileHash $target).Hash -eq (Get-FileHash $agent.FullName).Hash) {
      Remove-Item -LiteralPath $target -Force
      Write-Host "Removed: $target"
    }
  }
  exit 0
}

$script:Copied = $false

# Claude Code: global skill and global subagents
Link-Folder (Join-Path $ClaudeDir "skills\$Name")
foreach ($agent in $agents) {
  Link-File (Join-Path $ClaudeDir "agents\$($agent.Name)") $agent.FullName
}

# Codex (if installed): the user's skills folder
if (Test-Path -LiteralPath $CodexDir) {
  Link-Folder (Join-Path $CodexDir "skills\$Name")
}

Write-Host ''
if ($script:Copied) {
  Write-Host 'Agents were copied because file links need Developer Mode or admin rights.'
  Write-Host 'After git pull, run install.ps1 again to update them (the skill itself updates on its own).'
}
Write-Host "Done. Check with: node `"$Source\scripts\contrast.mjs`" '#000' '#fff'"
Write-Host "Other agents: point to $Source\AGENTS.md from each project's AGENTS.md."
