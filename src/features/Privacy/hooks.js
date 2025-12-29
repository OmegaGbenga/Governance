import { useContext } from 'react';
import { PrivacyContext } from './context';
export const usePrivacy = () => useContext(PrivacyContext);