import { List } from '@/ui';
import { RetroCard } from 'components/RetroCard';
import { initialBoard } from 'constants';
import { Column } from 'types';

export const BoardBody = ({ board = initialBoard }: { board?: Column[] }) => (
  <div className='grid grid-cols-3 gap-3'>
    {board.map((column) => (
      <List
        items={column?.cards?.length > 0 ? column.cards : []}
        resourceName='card'
        itemComponent={RetroCard}
      />
    ))}
  </div>
);
