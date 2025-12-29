import { useContext } from 'react';
import { AuditContext } from './context';
export const useAudit = () => useContext(AuditContext);