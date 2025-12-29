const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

function run(cmd) {
    try {
        execSync(cmd, { stdio: 'pipe' });
    } catch (e) {
        // console.log(e.message); 
    }
}

const featuresDir = path.join(__dirname, '../src/features');
if (!fs.existsSync(featuresDir)) {
    console.log("No features found!");
    process.exit(1);
}

const features = fs.readdirSync(featuresDir).filter(f => fs.statSync(path.join(featuresDir, f)).isDirectory());

console.log(`Found ${features.length} features to process.`);

let totalCommits = 0;

for (const feature of features) {
    const featureName = feature.toLowerCase();
    const branchName = `feat/${featureName}`;
    const featurePath = path.join(featuresDir, feature);

    // console.log(`Processing ${featureName}...`);

    try {
        execSync(`git checkout ${branchName}`, { stdio: 'ignore' });
    } catch {
        run(`git checkout -b ${branchName}`);
    }

    const files = fs.readdirSync(featurePath);

    for (const file of files) {
        const filePath = path.join(featurePath, file);
        run(`git add "${filePath}"`);
        run(`git commit -m "feat(${featureName}): add ${file} implementation" --no-verify`);
        totalCommits++;
    }

    run('git checkout main');
    run(`git merge ${branchName} --no-edit`);

    if (totalCommits % 50 === 0) {
        console.log(`Total commits so far: ${totalCommits}`);
    }
}

console.log(`Finished! Total commits: ${totalCommits}`);
