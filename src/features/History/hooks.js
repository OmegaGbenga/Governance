import { useContext } from 'react';
import { HistoryContext } from './context';
export const useHistory = () => useContext(HistoryContext);