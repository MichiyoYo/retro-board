import { Item } from 'types';

export const isCard = (item: Item) => {
  return 'votes' in item;
};
