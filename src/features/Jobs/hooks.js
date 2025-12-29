import { useContext } from 'react';
import { JobsContext } from './context';
export const useJobs = () => useContext(JobsContext);