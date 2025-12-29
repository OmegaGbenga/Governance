import { useContext } from 'react';
import { DatabaseContext } from './context';
export const useDatabase = () => useContext(DatabaseContext);