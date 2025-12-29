$features = Get-ChildItem "src/features" -Directory
$startDate = Get-Date

foreach ($feature in $features) {
    $featureName = $feature.Name.ToLower()
    $branchName = "feat/$featureName"
    
    Write-Host "Processing $featureName..."
    
    # Check if branch exists, if so switch, else create
    git checkout $branchName 2>$null
    if ($LASTEXITCODE -ne 0) {
        git checkout -b $branchName
    }
    
    $files = Get-ChildItem $feature.FullName -File
    foreach ($file in $files) {
        git add $file.FullName
        $msg = "feat($featureName): create " + $file.Name
        git commit -m "$msg" --no-verify
    }
    
    # Merge
    git checkout main
    git merge $branchName --no-edit
}
