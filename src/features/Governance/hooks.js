import { useContext } from 'react';
import { GovernanceContext } from './context';
export const useGovernance = () => useContext(GovernanceContext);