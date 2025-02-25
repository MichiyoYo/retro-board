import { Card } from 'types';

export const addCard = (columnId: string, card: Card) => {
  console.log('Adding card to column:', columnId);

  return {
    type: 'ADD_CARD',
    payload: {
      id: columnId,
      item: card,
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
