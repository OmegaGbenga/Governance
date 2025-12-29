import { useContext } from 'react';
import { TermsContext } from './context';
export const useTerms = () => useContext(TermsContext);