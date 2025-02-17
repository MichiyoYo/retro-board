import { Icon } from 'components/ui/Icon';
import { initialBoard, linearGradient } from 'constants';
import { Card } from 'pixel-retroui';
import { Column } from 'types';

export const BoardHeader = ({ board = initialBoard }: { board?: Column[] }) => (
  <div className='grid grid-cols-3 gap-3 '>
    {board.map((column) => (
      <Card
        key={column.id}
        textColor='white'
        borderColor='black'
        shadowColor='black'
        className={`text-center flex justify-center gap-2 ${linearGradient}`}
      >
        <h2 className='py-2'>{column.title}</h2>
        <Icon name={column.icon ?? ''} size={24} />
      </Card>
    ))}
  </div>
);
