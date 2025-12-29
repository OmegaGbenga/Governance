import { useContext } from 'react';
import { BridgeContext } from './context';
export const useBridge = () => useContext(BridgeContext);