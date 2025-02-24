import { Icon } from '@/ui';
import { AddButton } from 'components/AddButton';
import { Card as PixelCard } from 'pixel-retroui';
import { useContext } from 'react';
import { upvoteCard } from 'state/actions';
import { BoardContext } from 'state/BoardContext';
import { Button as ButtonType, Card } from 'types';
import { isCard } from 'utils/utils';

export const RetroItem = ({
  item,
  colId,
}: {
  item: Card | ButtonType;
  colId: string;
}) => {
  const context = useContext(BoardContext);
  if (!context) {
    throw new Error('BoardContext is undefined');
  }
  const { dispatch } = context;
  if (item && isCard(item)) {
    const card = item as Card;
    const upvote = () => {
      dispatch(upvoteCard(card.id));
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
          <cite className='text-xs'> - {card.author}</cite>
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
    const button = item as ButtonType;
    return <AddButton button={button} colId={colId} />;
  }
};
