import { List } from '@/ui';
import { RetroItem } from 'components/RetroItem';
import { useContext } from 'react';
import { BoardContext } from 'state/BoardContext';
import { Button, Card, Column } from 'types';

const ListItem = ({
  item,
  columnId,
}: {
  item: Card | Button;
  columnId: string;
}) => (
  <li key={crypto.randomUUID()} className='mb-3 flex'>
    <RetroItem item={item} columnId={columnId} />
  </li>
);

export const BoardBody = () => {
  const context = useContext(BoardContext);
  if (!context) {
    throw new Error('BoardContext is undefined');
  }
  const { board } = context;

  return (
    <div className='grid grid-cols-3 overflow-hidden gap-2 mb-3'>
      {board?.columns?.map((column: Column) => (
        <List
          key={column.id}
          items={column?.items?.size > 0 ? column.items : []}
          resourceName='item'
          itemComponent={(props: { item: Card | Button }) => (
            <ListItem {...props} columnId={column.id} />
          )}
        />
      ))}
    </div>
  );
};
