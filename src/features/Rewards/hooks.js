import { useContext } from 'react';
import { RewardsContext } from './context';
export const useRewards = () => useContext(RewardsContext);