import { emptyCard, initialBoard } from 'constants';
import { useState } from 'react';
import { Column } from 'types';
import { BoardHeader } from './BoardHeader';

export const Board = () => {
  const [columns, setColums] = useState<Column[]>(initialBoard);

  const addCard = (columnId: string, text: string) => {
    const newCard = { ...emptyCard, text: text };
    console.log(newCard);
  };

  return <BoardHeader />;
};
