import { useContext } from 'react';
import { SwapContext } from './context';
export const useSwap = () => useContext(SwapContext);