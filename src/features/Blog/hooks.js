import { useContext } from 'react';
import { BlogContext } from './context';
export const useBlog = () => useContext(BlogContext);