import { useContext } from 'react';
import { GraphqlContext } from './context';
export const useGraphql = () => useContext(GraphqlContext);