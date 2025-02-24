import { initialBoard } from 'constants';
import { useReducer } from 'react';
import { reducer } from 'reducer';
import { BoardAction } from 'state/types';

export const useBoard = () => {
  const [state, dispatch] = useReducer(reducer, { board: initialBoard });

  return { state, dispatch };
};
