import { createContext } from 'react';
import { BoardContextType } from './types';

export const BoardContext = createContext<BoardContextType | undefined>(
  undefined
);
