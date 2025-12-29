import { Core } from '@walletconnect/core';
import { Web3Wallet } from '@walletconnect/web3wallet';

export class WalletConnectService {
    constructor() {
        this.core = new Core({
            projectId: 'YOUR_PROJECT_ID', // Replace with actual Project ID
        });
        this.web3wallet = null;
    }

    async init() {
        this.web3wallet = await Web3Wallet.init({
            core: this.core,
            metadata: {
                name: 'Ecosentinel',
                description: 'Ecosentinel Governance App',
                url: 'https://ecosentinel.io',
                icons: ['https://ecosentinel.io/logo.png'],
            },
        });
        console.log('WalletConnect initialized');
    }

    async pair(uri) {
        if (!this.web3wallet) await this.init();
        await this.web3wallet.core.pairing.pair({ uri });
    }

    onSessionProposal(callback) {
        if (!this.web3wallet) return;
        this.web3wallet.on('session_proposal', callback);
    }

    async approveSession(proposalId, namespaces) {
        if (!this.web3wallet) return;
        await this.web3wallet.approveSession({
            id: proposalId,
            namespaces
        });
    }

    async rejectSession(proposalId, reason) {
        if (!this.web3wallet) return;
        await this.web3wallet.rejectSession({
            id: proposalId,
            reason
        });
    }
}

export const walletConnectService = new WalletConnectService();
