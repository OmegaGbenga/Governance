import { useContext } from 'react';
import { HelpContext } from './context';
export const useHelp = () => useContext(HelpContext);