import { useContext } from 'react';
import { TeamContext } from './context';
export const useTeam = () => useContext(TeamContext);