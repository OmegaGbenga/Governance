import { useContext } from 'react';
import { ComplianceContext } from './context';
export const useCompliance = () => useContext(ComplianceContext);