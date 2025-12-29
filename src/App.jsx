import React, { useState, useEffect } from 'react';
import { AppConfig, UserSession, showConnect } from '@stacks/connect';
import { StacksTestnet } from '@stacks/network';
import {
    callReadOnlyFunction,
    startSchlesi,
    bufferCV,
    uintCV,
    stringAsciiCV,
    stringUtf8CV,
    optionalCVOf,
    boolCV
} from '@stacks/transactions';

const appConfig = new AppConfig(['store_write', 'publish_data']);
const userSession = new UserSession({ appConfig });

function App() {
    const [userData, setUserData] = useState(null);
    const [proposals, setProposals] = useState([]);
    const [newTitle, setNewTitle] = useState('');
    const [newDesc, setNewDesc] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (userSession.isSignInPending()) {
            userSession.handlePendingSignIn().then(userData => {
                setUserData(userData);
            });
        } else if (userSession.isUserSignedIn()) {
            setUserData(userSession.loadUserData());
        }
    }, []);

    const connectWallet = () => {
        showConnect({
            appDetails: {
                name: 'Ecosentinel Governance',
                icon: window.location.origin + '/vite.svg',
            },
            redirectTo: '/',
            onFinish: () => {
                window.location.reload();
            },
            userSession,
        });
    };

    const createProposal = async () => {
        if (!newTitle || !newDesc) return;
        setLoading(true);

        // Placeholder for contract call
        const options = {
            contractAddress: 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM',
            contractName: 'governance',
            functionName: 'create-proposal',
            functionArgs: [
                stringAsciiCV(newTitle),
                stringUtf8CV(newDesc),
                optionalCVOf(null) // execution-data
            ],
            network: new StacksTestnet(),
            appDetails: {
                name: 'Ecosentinel',
                icon: window.location.origin + '/vite.svg',
            },
            onFinish: (data) => {
                console.log('Transaction:', data);
                setLoading(false);
            },
        };

        // We would use openContractCall(options) here from @stacks/connect
        // ensure showConnect is imported or use useConnect hook if available
        // importing openContractCall from @stacks/connect
        const { openContractCall } = await import('@stacks/connect');
        await openContractCall(options);
    };

    return (
        <div className="app-container">
            <nav>
                <h1>Ecosentinel</h1>
                {userData ? (
                    <button onClick={() => userSession.signUserOut('/')}>
                        Disconnect {userData.profile.stxAddress?.testnet?.slice(0, 6)}...
                    </button>
                ) : (
                    <button onClick={connectWallet}>Connect Wallet</button>
                )}
            </nav>

            <main>
                {userData ? (
                    <div className="dashboard">
                        <section className="card create-proposal">
                            <h2>Create Proposal</h2>
                            <input
                                type="text"
                                placeholder="Title"
                                value={newTitle}
                                onChange={e => setNewTitle(e.target.value)}
                            />
                            <textarea
                                placeholder="Description"
                                value={newDesc}
                                onChange={e => setNewDesc(e.target.value)}
                            />
                            <button onClick={createProposal} disabled={loading}>
                                {loading ? 'Creating...' : 'Submit Proposal'}
                            </button>
                        </section>

                        <section className="card proposal-list">
                            <h2>Active Proposals</h2>
                            <p>No proposals loaded (Connect to Clarinet Devnet to fetch)</p>
                        </section>
                    </div>
                ) : (
                    <div className="hero">
                        <h2>Welcome to Ecosentinel Governance</h2>
                        <p>Connect your wallet to participate in the DAO.</p>
                    </div>
                )}
            </main>
        </div>
    );
}

export default App;
