import { useContext } from 'react';
import { BackupContext } from './context';
export const useBackup = () => useContext(BackupContext);