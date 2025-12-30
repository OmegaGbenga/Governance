# Governance Platform

A decentralized governance platform built on the Stacks blockchain, enabling transparent and democratic decision-making through smart contracts and a comprehensive web interface.

## Overview

This project implements a full-featured governance system that allows token holders to create proposals, vote on decisions, and execute approved changes in a trustless environment. The platform is designed for organizations and communities seeking to decentralize their governance processes while maintaining accountability and transparency.

## Architecture

### Smart Contracts

The governance system is powered by a Clarity smart contract deployed on the Stacks blockchain. The contract implements the following core functionality:

- **Proposal Management**: Create, track, and execute governance proposals
- **Voting Mechanism**: Weighted voting based on token holdings
- **Quorum Requirements**: Configurable participation thresholds
- **Execution Framework**: Automated execution of passed proposals

#### Key Contract Features

- Minimum token requirement for proposal creation (1000 tokens)
- 144-block voting period (approximately 1 day)
- 10% quorum requirement
- 51% approval threshold
- Voting power snapshots to prevent double voting
- Multiple proposal states (Active, Passed, Rejected, Executed, Expired)

### Frontend Application

The web interface is built with modern JavaScript frameworks and provides a comprehensive user experience for interacting with the governance system.

#### Core Modules

The application is organized into 71 feature modules, each handling specific aspects of the platform:

**Authentication and Security**
- Auth: User authentication and session management
- Security: Security monitoring and threat prevention
- KYC: Identity verification and compliance
- Compliance: Regulatory compliance management
- Privacy: Data privacy controls and settings

**Governance**
- Governance: Proposal creation and management
- Voting: Voting interface and analytics
- Dashboard: Overview of governance activity
- Analytics: Voting statistics and trends
- Reporting: Governance reports and metrics

**Blockchain Integration**
- Wallet: Wallet connection and management
- Transactions: Transaction history and tracking
- Bridge: Cross-chain asset transfers
- Interoperability: Multi-chain integration
- RPC: Blockchain RPC interface

**DeFi Features**
- Staking: Token staking and rewards
- Farming: Yield farming opportunities
- Liquidity: Liquidity pool management
- Swap: Token exchange functionality
- Rewards: Reward distribution and claims
- Launchpad: Token launch platform

**NFT Ecosystem**
- NFT: NFT marketplace and management
- Marketplace: Trading and discovery

**Communication**
- Chat: Real-time communication
- Notifications: System notifications
- Push: Push notification service
- Social: Social features and sharing
- Forum: Community discussion boards

**Infrastructure**
- API: RESTful API endpoints
- GraphQL: GraphQL API layer
- REST: REST API services
- SOAP: SOAP web services
- RPC: Remote procedure calls
- Websocket: Real-time communication

**Data Management**
- Database: Data persistence layer
- Cache: Caching and performance optimization
- Queue: Message queue system
- Logging: Application logging
- Monitoring: System monitoring and alerts
- Backup: Data backup services
- Restore: Data recovery services

**User Management**
- Profile: User profile management
- Settings: User preferences and configuration
- Onboarding: New user onboarding flow
- Tutorial: Interactive tutorials
- Help: Help documentation and support
- FAQ: Frequently asked questions

**Content Management**
- Blog: Blog posts and articles
- Roadmap: Project roadmap and milestones
- Team: Team information and bios
- Partners: Partner organizations
- Jobs: Career opportunities
- Contact: Contact forms and information

**Technical Infrastructure**
- Server: Server-side logic
- Client: Client-side application
- Router: Application routing
- Controller: Request controllers
- Model: Data models
- View: View components
- Middleware: Request middleware
- Worker: Background job processing

**Development Tools**
- Scheduler: Task scheduling
- Mailer: Email services
- SMS: SMS notification service
- Audit: System audit logs
- Tax: Tax calculation and reporting
- Accounting: Financial accounting
- Admin: Administrative interface

**Legal and Compliance**
- Legal: Legal documentation
- Terms: Terms of service
- Privacy: Privacy policy
- Feedback: User feedback collection

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- Clarinet (for contract development and testing)
- A Stacks wallet (Hiro Wallet or similar)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/governance.git
cd governance
```

2. Install dependencies:
```bash
npm install
```

3. Configure your environment:
Create a `.env` file in the root directory with the following variables:
```
NETWORK=mainnet
CONTRACT_ADDRESS=your-contract-address
```

### Development

1. Start the development server:
```bash
npm run dev
```

2. The application will be available at `http://localhost:5173`

### Smart Contract Development

1. Check and test contracts using Clarinet:
```bash
clarinet check
clarinet test
```

2. Deploy to testnet:
```bash
clarinet integrate
```

## Usage

### Creating a Proposal

1. Connect your wallet to the platform
2. Ensure you have at least 1000 governance tokens
3. Navigate to the Governance section
4. Click "Create Proposal"
5. Fill in the proposal details:
   - Title (max 100 characters)
   - Description (max 500 characters)
   - Optional execution data
6. Submit the proposal
7. The voting period begins immediately and lasts for approximately 24 hours

### Voting on Proposals

1. Browse active proposals in the Governance dashboard
2. Review proposal details and discussion
3. Click on a proposal to view full information
4. Cast your vote (For or Against)
5. Your voting power is determined by your token balance at the time of voting
6. You can only vote once per proposal

### Proposal Execution

1. After the voting period ends, any user can finalize the proposal
2. If quorum is met and the proposal passes (>51% approval), it can be executed
3. Execution carries out the on-chain actions specified in the proposal
4. Executed proposals are permanently recorded on the blockchain

## Smart Contract Functions

### Public Functions

**register-voting-power(amount)**
- Registers token balance for voting
- Must be called before creating proposals or voting

**create-proposal(title, description, execution-data)**
- Creates a new governance proposal
- Requires minimum token balance
- Returns proposal ID

**vote(proposal-id, vote-for)**
- Casts a vote on an active proposal
- vote-for: true for approval, false for rejection
- Voting power based on registered token balance

**finalize-proposal(proposal-id)**
- Finalizes a proposal after voting period
- Determines if proposal passed, failed, or expired
- Can be called by anyone

**execute-proposal(proposal-id)**
- Executes a passed proposal
- Only works for proposals with STATUS-PASSED
- Records execution on-chain

### Read-Only Functions

**get-proposal(proposal-id)**
- Returns full proposal details

**get-vote(proposal-id, voter)**
- Returns vote details for a specific voter

**get-proposal-count()**
- Returns total number of proposals

**is-proposal-active(proposal-id)**
- Checks if a proposal is currently active

**get-voting-power(proposal-id, voter)**
- Returns voter's power for a specific proposal

**get-member-voting-power(member)**
- Returns current voting power of a member

**would-proposal-pass(proposal-id)**
- Calculates if a proposal would pass with current votes

## Project Structure

```
governance/
├── contracts/
│   └── governance.clar          # Main governance smart contract
├── src/
│   ├── App.jsx                  # Application root component
│   ├── main.jsx                 # Application entry point
│   ├── index.css                # Global styles
│   ├── features/                # Feature modules (71 total)
│   │   ├── Governance/          # Core governance UI
│   │   ├── Voting/              # Voting interface
│   │   ├── Wallet/              # Wallet integration
│   │   └── ...                  # Other feature modules
│   └── services/                # Shared services
├── Clarinet.toml                # Clarinet configuration
├── package.json                 # Node.js dependencies
├── vite.config.js               # Vite build configuration
└── index.html                   # HTML entry point
```

## Technology Stack

### Blockchain
- **Stacks**: Layer-1 blockchain for Bitcoin
- **Clarity**: Smart contract language
- **Clarinet**: Development and testing framework

### Frontend
- **React**: UI component library
- **Vite**: Build tool and development server
- **JavaScript**: Primary programming language

### Styling
- **CSS Modules**: Component-scoped styling
- **Modern CSS**: Flexbox, Grid, and custom properties

## Security Considerations

- All contract functions include proper authorization checks
- Voting power is snapshotted to prevent manipulation
- Proposals include expiration mechanisms
- Double-voting is prevented through on-chain tracking
- Quorum requirements ensure representative participation

## Contributing

Contributions are welcome. Please follow these guidelines:

1. Fork the repository
2. Create a feature branch
3. Make your changes with clear commit messages
4. Test thoroughly
5. Submit a pull request with a detailed description

## Testing

Run the test suite:

```bash
npm test
```

For contract testing:

```bash
clarinet test
```

## Deployment

### Contract Deployment

1. Configure network in Clarinet.toml
2. Deploy using:
```bash
clarinet deployments generate --network=mainnet
clarinet deployments apply --network=mainnet
```

### Frontend Deployment

1. Build for production:
```bash
npm run build
```

2. Deploy the `dist` folder to your hosting platform

## License

This project is licensed under the ISC License.

## Support

For questions, issues, or feature requests, please open an issue on the GitHub repository.

## Acknowledgments

Built on the Stacks blockchain platform, leveraging the security of Bitcoin with the flexibility of smart contracts.
