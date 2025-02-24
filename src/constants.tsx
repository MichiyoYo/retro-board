import { Card, Column } from './types';

export const emptyCard: Card = {
  id: crypto.randomUUID(),
  text: '',
  votes: 0,
};

export const linearGradient =
  'bg-linear-to-r/decreasing from-indigo-500 to-teal-500';

export const initialBoard: Column[] = [
  {
    id: 'went-well',
    title: 'Went Well',
    icon: 'thumb-up',
    items: [{ id: 'add-went-well', text: 'Add' }],
  },
  {
    id: 'needs-improvement',
    title: 'Needs Improvement',
    icon: 'control-panel',
    items: [{ id: 'add-needs-improvement', text: 'Add' }],
  },
  {
    id: 'action-items',
    title: 'Action Items',
    icon: 'star',
    items: [{ id: 'add-action-item', text: 'Add' }],
  },
];
