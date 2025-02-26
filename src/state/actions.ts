import { Card } from 'types';

export const addCard = (columnId: string, card: Card) => {
  console.log('Adding card to column:', columnId);

  return {
    type: 'ADD_CARD',
    payload: {
      columnId,
      item: card,
    },
  };
};

export const upvoteCard = (columnId: string, card: Card) => {
  return {
    type: 'UPVOTE_CARD',
    payload: {
      columnId,
      item: card,
    },
  };
};
