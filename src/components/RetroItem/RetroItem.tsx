import { Icon } from '@/ui';
import { AddButton } from 'components/ui/AddButton';
import { Card as PixelCard } from 'pixel-retroui';
import { useContext } from 'react';
import { deleteCard, upvoteCard } from 'state/actions';
import { BoardContext } from 'state/BoardContext';
import { Button, Card } from 'types';
import { isCard } from 'utils/utils';

export const RetroItem = ({
  item,
  columnId,
}: {
  item: Card | Button;
  columnId: string;
}) => {
  const context = useContext(BoardContext);
  if (!context) {
    throw new Error('BoardContext is undefined');
  }
  const { dispatch } = context;

  if (item && isCard(item)) {
    const card = item as Card;
    const onUpvote = () => {
      dispatch(upvoteCard(columnId, card));
    };

    const onDelete = () => {
      dispatch(deleteCard(columnId, card));
    };
    return (
      <PixelCard
        bg='#fefcd0'
        textColor='black'
        borderColor='black'
        shadowColor='#b7ae8f'
        className='p-5 w-full flex flex-col justify-between gap-4'
      >
        <div className='flex flex-col align-baseline gap-2'>
          <p className='text-wrap max-h-fit'>{card.text}</p>
          <cite className='text-xs self-end'>
            - {card.author ? card.author : 'Anonymous'}
          </cite>
        </div>
        <div className='w-full flex justify-between'>
          <div>
            <button onClick={onDelete} className='flex items-center'>
              <Icon name='bin' size={24} />
            </button>
          </div>
          <div className='flex items-center gap-1'>
            <span className='text-sm'>{card.votes}</span>
            <button onClick={onUpvote} className='flex items-center'>
              <Icon name='heart' size={24} />
            </button>
          </div>
        </div>
      </PixelCard>
    );
  } else {
    const button = item as Button;
    return <AddButton button={button} columnId={columnId} />;
  }
};
