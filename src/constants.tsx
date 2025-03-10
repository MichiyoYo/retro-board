import { Board, Column } from './types';

export const initialColumns: Column[] = [
  {
    id: 'went-well',
    title: 'Went Well',
    icon: 'thumb-up',
    items: new Map().set('add-went-well', {
      id: 'add-went-well',
      text: '+',
    }),
  },
  {
    id: 'needs-improvement',
    title: 'Needs Improvement',
    icon: 'control-panel',
    items: new Map().set('add-needs-improvement', {
      id: 'add-needs-improvement',
      text: '+',
    }),
  },
  {
    id: 'action-items',
    title: 'Action Items',
    icon: 'star',
    items: new Map().set('add-action-items', {
      id: 'add-action-items',
      text: '+',
    }),
  },
];

export const initialBoard: Board = {
  columns: initialColumns,
  date: new Date(),
  id: crypto.randomUUID(),
  title: 'Retro Board',
};

export const menuItems = [
  {
    id: 'new-retro',
    label: 'New Retro',
    icon: 'edit',
    onClick: () => console.log('New Retro clicked'),
  },
  {
    id: 'save-retro',
    label: 'Save Retro',
    icon: 'save',
    onClick: () => console.log('Save Retro clicked'),
  },
  {
    id: 'export-retro',
    label: 'Export',
    icon: 'export',
    onClick: () => console.log('Export clicked'),
  },
  {
    id: 'settings',
    label: 'Settings',
    icon: 'gear',
    onClick: () => console.log('Settings clicked'),
    subItems: [
      {
        id: 'settings-light-theme',
        label: 'Light Theme',
        icon: 'light-bulb-on',
        onClick: () => console.log('Settings 1 clicked'),
      },
      {
        id: 'settings-dark-theme',
        label: 'Dark Theme',
        icon: 'light-bulb-off',
        onClick: () => console.log('Settings 2 clicked'),
      },
    ],
  },
];
