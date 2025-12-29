import { useContext } from 'react';
import { SchedulerContext } from './context';
export const useScheduler = () => useContext(SchedulerContext);