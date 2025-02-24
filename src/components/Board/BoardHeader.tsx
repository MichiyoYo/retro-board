import { Icon } from 'components/ui/Icon';
import { linearGradient } from 'constants';
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
    <div className='grid grid-cols-3 gap-3  mb-3'>
      {board?.columns?.map((column: Column) => (
        <PixelCard
          key={column.id}
          bg='white'
          textColor='white'
          borderColor='black'
          shadowColor='black'
          className={`text-center flex justify-center gap-2 ${linearGradient}`}
        >
          <h2 className='py-2'>{column.title}</h2>
          <Icon name={column.icon ?? ''} size={24} />
        </PixelCard>
      ))}
    </div>
  );
};
