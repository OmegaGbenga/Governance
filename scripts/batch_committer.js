const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

function run(cmd) {
    try {
        execSync(cmd, { stdio: 'pipe' });
    } catch (e) {
    }
}

const featuresDir = path.join(__dirname, '../src/features');
const features = fs.readdirSync(featuresDir).filter(f => fs.statSync(path.join(featuresDir, f)).isDirectory());

console.log(`Found ${features.length} features.`);

// 1. Process all commits in branches
const branches = [];
for (const feature of features) {
    const featureName = feature.toLowerCase();
    const branchName = `feat/${featureName}`;
    const featurePath = path.join(featuresDir, feature);

    // Check if we already merged or processed
    // Simplified: just try to process

    // We assume we are starting from a state where we can checkout main or just branch off
    // Ideally branch off main.
    run('git checkout main');
    try {
        execSync(`git checkout ${branchName}`, { stdio: 'ignore' });
    } catch {
        run(`git checkout -b ${branchName}`);
    }

    branches.push(branchName);

    const files = fs.readdirSync(featurePath);
    for (const file of files) {
        const filePath = path.join(featurePath, file);
        run(`git add "${filePath}"`);
        run(`git commit -m "feat(${featureName}): add ${file}" --no-verify`);
    }
}

// 2. Merge all at the end
console.log('Merging all branches...');
run('git checkout main');
for (const branch of branches) {
    run(`git merge ${branch} --no-edit`);
}

console.log('Done.');
