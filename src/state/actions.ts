import { Card } from 'types';

export const addCard = (columnId: string, card: Card) => {
  return {
    type: 'ADD_CARD',
    payload: {
      columnId,
      card,
    },
  };
};

export const upvoteCard = (cardId: string) => {
  return {
    type: 'UPVOTE_CARD',
    payload: {
      cardId,
    },
  };
};
