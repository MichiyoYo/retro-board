import { initialBoard } from 'constants';
import { Card } from 'pixel-retroui';

export const BoardHeader = () => (
  <div className='grid grid-cols-3 gap-5'>
    {initialBoard.map((column) => (
      <Card
        textColor='#fff'
        borderColor='#000000'
        shadowColor='#000000'
        className='text-center bg-linear-to-r/decreasing from-indigo-500 to-teal-500'
      >
        <h2 className='py-2'>{column.title}</h2>
      </Card>
    ))}
  </div>
);
