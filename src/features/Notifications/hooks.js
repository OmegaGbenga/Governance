import { useContext } from 'react';
import { NotificationsContext } from './context';
export const useNotifications = () => useContext(NotificationsContext);