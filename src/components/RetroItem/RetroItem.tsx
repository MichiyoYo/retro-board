import { Icon } from '@/ui';
import { AddButton } from 'components/AddButton';
import { Card as PixelCard } from 'pixel-retroui';
import { useContext } from 'react';
import { upvoteCard } from 'state/actions';
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
  console.log(item.id);
  const { dispatch } = context;
  if (item && isCard(item)) {
    const card = item as Card;
    const upvote = () => {
      dispatch(upvoteCard(columnId, card));
    };
    return (
      <PixelCard
        bg='#fefcd0'
        textColor='black'
        borderColor='black'
        shadowColor='#c381b5'
        className='p-5 w-full flex flex-col justify-between'
      >
        <div className='flex flex-col align-baseline'>
          <p>{card.text}</p>
          <cite className='text-xs self-end'> - {card.author}</cite>
        </div>
        <div className='w-full flex justify-between'>
          <button onClick={upvote}>
            <Icon name='heart' size={24} />
          </button>
          <span className='text-sm'>{card.votes}</span>
        </div>
      </PixelCard>
    );
  } else {
    const button = item as Button;
    return <AddButton button={button} columnId={columnId} />;
  }
};
