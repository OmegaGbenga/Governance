import { useContext } from 'react';
import { NFTContext } from './context';
export const useNFT = () => useContext(NFTContext);