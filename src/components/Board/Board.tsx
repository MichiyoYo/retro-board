import { BoardHeader } from './BoardHeader';
import { BoardBody } from './BoardBody';

import { useReducer } from 'react';
import { reducer } from 'reducer';
import { initialBoard } from 'constants';
import { BoardContext } from 'state/BoardContext';

export const Board = () => {
  const [state, dispatch] = useReducer(reducer, { board: initialBoard });
  return (
    <BoardContext.Provider value={{ board: state.board, dispatch }}>
      <div className='flex flex-col w-full max-w-full'>
        <BoardHeader />
        <BoardBody />
      </div>
    </BoardContext.Provider>
  );
};
