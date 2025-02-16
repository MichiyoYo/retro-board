import { Card, Column } from './types';

export const initialBoard: Column[] = [
  {
    id: 'went-well',
    title: 'Went Well',
    cards: [],
  },
  {
    id: 'needs-improvement',
    title: 'Needs Improvement',
    cards: [],
  },
  {
    id: 'action-items',
    title: 'Action Items',
    cards: [],
  },
];

export const emptyCard: Card = {
  id: crypto.randomUUID(),
  text: '',
  votes: 0,
};
