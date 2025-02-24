import { List } from '@/ui';
import { RetroItem } from 'components/RetroItem';
import { initialBoard } from 'constants';
import { Button, Card, Column } from 'types';

const ListItem = ({ item }: { item: Card | Button }) => (
  <li key={crypto.randomUUID()} className='mb-5'>
    <RetroItem item={item} />
  </li>
);

export const BoardBody = ({ board = initialBoard }: { board?: Column[] }) => (
  <div className='grid grid-cols-3 gap-3'>
    {board.map((column) => (
      <List
        key={column.id}
        items={column?.items?.length > 0 ? column.items : []}
        resourceName='item'
        itemComponent={ListItem}
      />
    ))}
  </div>
);
