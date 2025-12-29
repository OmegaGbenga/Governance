import { useContext } from 'react';
import { QueueContext } from './context';
export const useQueue = () => useContext(QueueContext);