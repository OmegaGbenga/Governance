import { ChainhooksClient } from '@hirosystems/chainhooks-client';

const CHAINHOOKS_API_URL = 'https://api.platform.hiro.so/v1/chainhooks';
const API_KEY = 'YOUR_HIRO_API_KEY'; // In a real app, use env var

export class ChainhooksService {
    constructor() {
        this.client = new ChainhooksClient({
            url: CHAINHOOKS_API_URL,
            apiKey: API_KEY,
        });
    }

    async registerHook(name, contractAddress, contractName, functionName) {
        try {
            const hook = {
                name: name,
                chain: 'stacks',
                network: 'testnet',
                predicate: {
                    scope: 'contract_call',
                    contract_identifier: `${contractAddress}.${contractName}`,
                    method: functionName,
                },
                action: {
                    http: {
                        url: 'https://my-api.com/webhook',
                        method: 'POST',
                        authorization_header: 'Bearer token'
                    }
                }
            };

            const result = await this.client.createChainhook(hook);
            return result;
        } catch (error) {
            console.error('Failed to register chainhook:', error);
            throw error;
        }
    }

    async getHooks() {
        try {
            const hooks = await this.client.getChainhooks();
            return hooks;
        } catch (error) {
            console.error('Failed to fetch chainhooks:', error);
            return [];
        }
    }

    async deleteHook(hookId) {
        return this.client.deleteChainhook(hookId);
    }
}

export const chainhooksService = new ChainhooksService();
