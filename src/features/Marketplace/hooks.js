import { useContext } from 'react';
import { MarketplaceContext } from './context';
export const useMarketplace = () => useContext(MarketplaceContext);