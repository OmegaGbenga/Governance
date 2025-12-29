import { useContext } from 'react';
import { ForumContext } from './context';
export const useForum = () => useContext(ForumContext);