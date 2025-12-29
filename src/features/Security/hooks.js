import { useContext } from 'react';
import { SecurityContext } from './context';
export const useSecurity = () => useContext(SecurityContext);