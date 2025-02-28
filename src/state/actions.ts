import { Card } from 'types';

export const addCard = (columnId: string, card: Card) => {
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

export const downvoteCard = (columnId: string, card: Card) => {
  return {
    type: 'DOWNVOTE_CARD',
    payload: {
      columnId,
      item: card,
    },
  };
};

export const deleteCard = (columnId: string, card: Card) => {
  return {
    type: 'DELETE_CARD',
    payload: {
      columnId,
      item: card,
    },
  };
};
