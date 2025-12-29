import { useContext } from 'react';
import { KYCContext } from './context';
export const useKYC = () => useContext(KYCContext);