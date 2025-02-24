import { Button, Card as PixelCard } from 'pixel-retroui';
import { Button as ButtonType, Card } from 'types';
import { isCard } from 'utils/utils';

export const RetroItem = ({ item }: { item: Card | ButtonType }) => {
  if (item && isCard(item)) {
    const card = item as Card;
    return (
      <PixelCard
        bg='#fefcd0'
        textColor='black'
        borderColor='black'
        shadowColor='#c381b5'
        className='p-5 text-center'
      >
        <div>
          <p>{card.text}</p>
          <cite>{card.author}</cite>
        </div>
        <div>{card.votes}</div>
      </PixelCard>
    );
  } else {
    const button = item as ButtonType;
    return (
      <Button id={button.id} onClick={() => {}}>
        Add Card
      </Button>
    );
  }
};
