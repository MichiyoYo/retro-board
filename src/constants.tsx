import { Card, Column } from './types';

export const initialBoard: Column[] = [
  {
    id: 'went-well',
    title: 'Went Well',
    icon: 'thumb-up',
    cards: [],
  },
  {
    id: 'needs-improvement',
    title: 'Needs Improvement',
    icon: 'control-panel',
    cards: [],
  },
  {
    id: 'action-items',
    title: 'Action Items',
    icon: 'star',
    cards: [],
  },
];

export const emptyCard: Card = {
  id: crypto.randomUUID(),
  text: '',
  votes: 0,
};
