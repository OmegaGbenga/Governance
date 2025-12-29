import { useContext } from 'react';
import { MailerContext } from './context';
export const useMailer = () => useContext(MailerContext);