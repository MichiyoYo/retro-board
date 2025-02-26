import { Board, Card, Column } from './types';

export const emptyCard: Card = {
  id: crypto.randomUUID(),
  text: '',
  votes: 0,
};

export const linearGradient =
  'bg-linear-to-r/decreasing from-indigo-500 to-teal-500';

export const initialColumns: Column[] = [
  {
    id: 'went-well',
    title: 'Went Well',
    icon: 'thumb-up',
    items: new Map().set('add-went-well', {
      id: 'add-went-well',
      text: 'Add Card',
    }),
  },
  {
    id: 'needs-improvement',
    title: 'Needs Improvement',
    icon: 'control-panel',
    items: new Map().set('add-needs-improvement', {
      id: 'add-needs-improvement',
      text: 'Add Card',
    }),
  },
  {
    id: 'action-items',
    title: 'Action Items',
    icon: 'star',
    items: new Map().set('add-action-items', {
      id: 'add-action-items',
      text: 'Add Card',
    }),
  },
];

export const initialBoard: Board = {
  columns: initialColumns,
  date: new Date(),
  id: crypto.randomUUID(),
  title: 'Retro Board',
};
