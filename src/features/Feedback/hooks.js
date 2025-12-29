import { useContext } from 'react';
import { FeedbackContext } from './context';
export const useFeedback = () => useContext(FeedbackContext);