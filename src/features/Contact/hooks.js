import { useContext } from 'react';
import { ContactContext } from './context';
export const useContact = () => useContext(ContactContext);