import { useContext } from 'react';
import { AccountingContext } from './context';
export const useAccounting = () => useContext(AccountingContext);