import { Icon } from 'components/ui/Icon';
import { Card as PixelCard } from 'pixel-retroui';
import { useContext } from 'react';
import { BoardContext } from 'state/BoardContext';
import { Column } from 'types';

export const BoardHeader = () => {
  const context = useContext(BoardContext);
  if (!context) {
    throw new Error('BoardContext is undefined');
  }
  const { board } = context;
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-2 mb-3'>
      {board?.columns?.map((column: Column) => (
        <PixelCard
          key={column.id}
          bg='black'
          textColor='white'
          borderColor='#000'
          shadowColor='#cacaca'
          className={`text-center flex justify-center items-center gap-1`}
        >
          <h2 className='py-2'>{column.title}</h2>
          <Icon name={column.icon ?? ''} size={24} />
        </PixelCard>
      ))}
    </div>
  );
};
