import { useContext } from 'react';
import { VotingContext } from './context';
export const useVoting = () => useContext(VotingContext);