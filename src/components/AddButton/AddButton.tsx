import Form from 'components/Form/Form';
import { emptyCard } from 'constants';
import { Button, Popup } from 'pixel-retroui';
import { useContext, useState } from 'react';
import { addCard } from 'state/actions';
import { BoardContext } from 'state/BoardContext';
import { Button as ButtonType } from 'types';

export const AddButton = ({
  button,
  columnId,
}: {
  button: ButtonType;
  columnId: string;
}) => {
  const context = useContext(BoardContext);
  if (!context) {
    throw new Error('BoardContext is undefined');
  }
  const { dispatch } = context;

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const addCardToColumn = ({
    event,
    columnId,
  }: {
    event: React.MouseEvent<HTMLButtonElement>;
    columnId: string;
  }) => {
    event.preventDefault();
    console.log('Adding card to column', columnId);
    dispatch(
      addCard(columnId, {
        ...emptyCard,
        text: 'hey',
        votes: 2,
        author: 'Cre',
      })
    );
    setIsPopupOpen(false);
  };

  return (
    <>
      <Button
        className='w-full'
        id={button.id}
        onClick={() => setIsPopupOpen(true)}
      >
        Add Card
      </Button>
      <Popup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)}>
        <h2 className='text-lg mb-4'>Share your retro-thoughts</h2>
        <Form onSubmit={(event) => addCardToColumn({ event, columnId })} />
      </Popup>
    </>
  );
};
