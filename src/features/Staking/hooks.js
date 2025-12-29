import { useContext } from 'react';
import { StakingContext } from './context';
export const useStaking = () => useContext(StakingContext);