import { useContext } from 'react';
import { WebsocketContext } from './context';
export const useWebsocket = () => useContext(WebsocketContext);