import { useContext } from 'react';
import { DashboardContext } from './context';
export const useDashboard = () => useContext(DashboardContext);