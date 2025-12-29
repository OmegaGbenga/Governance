import { useContext } from 'react';
import { TaxContext } from './context';
export const useTax = () => useContext(TaxContext);