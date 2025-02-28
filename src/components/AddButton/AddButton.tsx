import Form from 'components/Form/Form';
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
    dispatch(
      addCard(columnId, {
        id: crypto.randomUUID(),
        text: 'This did go great and we should do it again',
        votes: 1,
        author: '',
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
        {button.text}
      </Button>
      <Popup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)}>
        <h2 className='text-lg mb-4'>Share your retro-thoughts</h2>
        <Form onSubmit={(event) => addCardToColumn({ event, columnId })} />
      </Popup>
    </>
  );
};
