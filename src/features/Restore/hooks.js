import { useContext } from 'react';
import { RestoreContext } from './context';
export const useRestore = () => useContext(RestoreContext);