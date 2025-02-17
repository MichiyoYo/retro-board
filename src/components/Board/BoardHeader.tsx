import { Icon } from '@/ui';
import { initialBoard } from 'constants';
import { Card } from 'pixel-retroui';

export const BoardHeader = () => (
  <div className='grid grid-cols-3 gap-5'>
    {initialBoard.map((column) => (
      <Card
        textColor='white'
        borderColor='black'
        shadowColor='black'
        className='text-center flex justify-center gap-2
         bg-linear-to-r/decreasing from-indigo-500 to-teal-500'
      >
        <h2 className='py-2'>{column.title}</h2>
        <Icon name={column.icon ?? ''} size={24} />
      </Card>
    ))}
  </div>
);
