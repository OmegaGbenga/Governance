import { useContext } from 'react';
import { ChatContext } from './context';
export const useChat = () => useContext(ChatContext);