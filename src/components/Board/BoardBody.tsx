import { List } from '@/ui';
import { RetroItem } from 'components/RetroItem';
import { useContext } from 'react';
import { BoardContext } from 'state/BoardContext';
import { Button, Card, Column } from 'types';

const ListItem = ({ item, colId }: { item: Card | Button; colId: string }) => (
  <li key={crypto.randomUUID()} className='mb-3 flex'>
    <RetroItem item={item} colId={colId} />
  </li>
);

export const BoardBody = () => {
  const context = useContext(BoardContext);
  if (!context) {
    throw new Error('BoardContext is undefined');
  }
  const { board } = context;
  return (
    <div className='grid grid-cols-3 gap-3'>
      {board?.columns?.map((column: Column) => (
        <List
          key={column.id}
          // items={column?.items?.length > 0 ? column.items : []}
          items={column?.items?.length > 0 ? column.items : []}
          resourceName='item'
          itemComponent={(props: { item: Card | Button }) => (
            <ListItem {...props} colId={column.id} />
          )}
        />
      ))}
    </div>
  );
};
