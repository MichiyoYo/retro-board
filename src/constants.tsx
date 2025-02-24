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
    items: [{ id: 'went-well', text: 'Add Card' }],
  },
  {
    id: 'needs-improvement',
    title: 'Needs Improvement',
    icon: 'control-panel',
    items: [{ id: 'add-needs-improvement', text: 'Add Card' }],
  },
  {
    id: 'action-items',
    title: 'Action Items',
    icon: 'star',
    items: [{ id: 'add-action-item', text: 'Add Card' }],
  },
];

export const initialBoard: Board = {
  columns: initialColumns,
  date: new Date(),
  id: crypto.randomUUID(),
  title: 'Retro Board',
};
