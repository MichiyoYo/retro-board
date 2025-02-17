import { Card } from 'pixel-retroui';
import { Card as CardType } from 'types';

export const RetroCard = ({ card }: { card: CardType }) => (
  <Card
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
  </Card>
);
