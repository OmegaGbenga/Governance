import { useContext } from 'react';
import { TransactionsContext } from './context';
export const useTransactions = () => useContext(TransactionsContext);