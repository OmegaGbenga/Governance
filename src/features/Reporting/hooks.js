import { useContext } from 'react';
import { ReportingContext } from './context';
export const useReporting = () => useContext(ReportingContext);