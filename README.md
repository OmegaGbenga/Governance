# Governance Project

Ecological governance platform built on Stacks blockchain.

## Features
- **Governance**: Proposal creation and voting.
- **Wallet Connect**: Seamless wallet integration.
- **Chainhooks**: Real-time blockchain event monitoring.
- **80+ Modules**: Comprehensive feature set including Auth, Dashboard, Staking, etc.

## Setup
1. Install dependencies:
   ```bash
   npm install
   ```

2. Run local dev server:
   ```bash
   npm run dev
   ```

3. Deploy contracts (Clarinet):
   ```bash
   clarinet integrate
   ```

## Automation
This project includes advanced automation scripts in `scripts/`:
- `project_automator.js`: Scaffolds the project.
- `fast_committer.js`: Generates high-volume commits locally.
- `final_push.js`: Pushes branches, creates PRs, and merges them using GitHub CLI.

## Commit Strategy
We use a micro-commit strategy where every file creation and update is a separate commit to ensure granular history and high activity.

## License
MIT
