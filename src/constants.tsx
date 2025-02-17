import { Card, Column } from './types';

export const initialBoard: Column[] = [
  {
    id: 'went-well',
    title: 'Went Well',
    icon: 'thumb-up',
    cards: [
      {
        id: '1',
        text: 'first card',
        author: 'cristina',
        votes: 1,
      },
    ],
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
    cards: [
      {
        id: '1',
        text: 'first action',
        author: 'cristina',
        votes: 1,
      },
    ],
  },
];

export const emptyCard: Card = {
  id: crypto.randomUUID(),
  text: '',
  votes: 0,
};

export const linearGradient =
  'bg-linear-to-r/decreasing from-indigo-500 to-teal-500';
