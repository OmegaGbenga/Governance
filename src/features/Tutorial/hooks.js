import { useContext } from 'react';
import { TutorialContext } from './context';
export const useTutorial = () => useContext(TutorialContext);