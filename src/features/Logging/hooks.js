import { useContext } from 'react';
import { LoggingContext } from './context';
export const useLogging = () => useContext(LoggingContext);