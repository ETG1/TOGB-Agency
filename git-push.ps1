# Git automation script
Write-Host "🚀 Starting git automation..." -ForegroundColor Cyan

# Add all changes
Write-Host "📦 Adding all changes..." -ForegroundColor Yellow
git add .

# Commit with timestamp
$timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
$commitMessage = "Update: $timestamp"
Write-Host "💬 Committing changes with message: $commitMessage" -ForegroundColor Yellow
git commit -m $commitMessage

# Push to remote
Write-Host "⬆️ Pushing to remote..." -ForegroundColor Yellow
git push

Write-Host "✅ All done! Changes have been pushed successfully." -ForegroundColor Green 