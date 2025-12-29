import { useContext } from 'react';
import { PartnersContext } from './context';
export const usePartners = () => useContext(PartnersContext);