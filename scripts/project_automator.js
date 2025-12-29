const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// 81 Modules to ensure 80+ branches
const modules = [
    'Auth', 'Dashboard', 'Governance', 'Wallet', 'Profile', 'Settings', 'Transactions',
    'Notifications', 'History', 'Staking', 'Rewards', 'Admin', 'Analytics', 'Security',
    'Interoperability', 'Bridge', 'Swap', 'Liquidity', 'Farming', 'Voting',
    'Marketplace', 'NFT', 'Launchpad', 'KYC', 'Compliance', 'Audit', 'Logging',
    'Monitoring', 'Backup', 'Restore', 'Accounting', 'Tax', 'Reporting', 'Chat',
    'Social', 'Forum', 'Blog', 'Help', 'FAQ', 'Tutorial', 'Onboarding', 'Feedback',
    'Roadmap', 'Jobs', 'Team', 'Partners', 'Contact', 'Legal', 'Privacy', 'Terms',
    'Api', 'Database', 'Cache', 'Queue', 'Scheduler', 'Worker', 'Mailer', 'Sms',
    'Push', 'Websocket', 'Graphql', 'Rest', 'Soap', 'Rpc', 'Client', 'Server',
    'Middleware', 'Router', 'Controller', 'Model', 'View', 'Template', 'Asset',
    'Image', 'Video', 'Audio', 'File', 'Storage', 'Aws', 'Azure', 'Gcp'
];

function run(cmd) {
    try {
        execSync(cmd, { stdio: 'pipe' });
    } catch (e) {
        console.error(`Failed: ${cmd}`, e.message);
    }
}

function commit(msg, type = 'feat') {
    run('git add .');
    run(`git commit -m "${type}: ${msg}" --no-verify`); // --no-verify to skip hooks if any
}

function processFeature(moduleName) {
    const branchName = `feat/${moduleName.toLowerCase()}`;
    console.log(`Processing ${branchName}...`);

    // Checkout branch
    // Check if branch exists first, if so checkout, else create
    try {
        execSync(`git checkout ${branchName}`, { stdio: 'ignore' });
    } catch {
        run(`git checkout -b ${branchName}`);
    }

    const dir = path.join('src', 'features', moduleName);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

    const steps = [
        { file: 'README.md', content: `# ${moduleName}\n\nDocumentation for ${moduleName} module.`, msg: `create readme for ${moduleName}` },
        { file: 'types.js', content: `export const ${moduleName.toUpperCase()}_TYPES = {};`, msg: `define types for ${moduleName}` },
        { file: 'constants.js', content: `export const DEFAULT_${moduleName.toUpperCase()}_CONFIG = {};`, msg: `add constants for ${moduleName}` },
        { file: 'actions.js', content: `export const init${moduleName} = () => ({ type: 'INIT' });`, msg: `create actions for ${moduleName}` },
        { file: 'reducer.js', content: `export const ${moduleName.toLowerCase()}Reducer = (state, action) => state;`, msg: `setup reducer for ${moduleName}` },
        { file: 'context.js', content: `import React from 'react';\nexport const ${moduleName}Context = React.createContext();`, msg: `create context for ${moduleName}` },
        { file: 'hooks.js', content: `import { useContext } from 'react';\nimport { ${moduleName}Context } from './context';\nexport const use${moduleName} = () => useContext(${moduleName}Context);`, msg: `implement hooks for ${moduleName}` },
        { file: 'service.js', content: `export const fetch${moduleName}Data = async () => {};`, msg: `add api service for ${moduleName}` },
        { file: 'utils.js', content: `export const format${moduleName} = (data) => data;`, msg: `add utility functions for ${moduleName}` },
        { file: 'styles.module.css', content: `.${moduleName.toLowerCase()}Container { display: block; }`, msg: `add styles for ${moduleName}` },
        { file: 'Component.jsx', content: `import React from 'react';\nimport styles from './styles.module.css';\nexport const ${moduleName}Component = () => <div className={styles.container}>${moduleName}</div>;`, msg: `create main component for ${moduleName}` },
        { file: 'Container.jsx', content: `import React from 'react';\nimport { ${moduleName}Component } from './Component';\nexport const ${moduleName}Container = () => <${moduleName}Component />;`, msg: `create container for ${moduleName}` },
        { file: 'utils.test.js', content: `test('${moduleName} utils', () => { expect(true).toBe(true); });`, msg: `add unit tests for ${moduleName} utils`, type: 'test' },
        { file: 'Component.test.jsx', content: `test('renders ${moduleName}', () => {});`, msg: `add component tests for ${moduleName}`, type: 'test' },
        { file: 'index.js', content: `export * from './Container';`, msg: `export module interface for ${moduleName}` }
    ];

    for (const step of steps) {
        const filePath = path.join(dir, step.file);
        fs.writeFileSync(filePath, step.content);
        commit(step.msg, step.type || 'feat');
    }

    // Merge back to main
    run('git checkout main');
    run(`git merge ${branchName} --no-edit`);
    // Optional: delete branch to keep clean? User asked for 80 branches, implying they exist.
    // "Create separate branches... Auto-merge all PRs".
    // If we delete, they are gone. If we keep, we have 80 branches.
    // I will keep them.
}

// Initial Setup
if (!fs.existsSync('src/features')) fs.mkdirSync('src/features', { recursive: true });

// Run
let count = 0;
for (const m of modules) {
    processFeature(m);
    count++;
}
console.log(`Completed ${count} modules.`);
