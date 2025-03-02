import { useForm } from 'hooks/useForm';
import { Button, Input, TextArea } from 'pixel-retroui';

const Form = ({
  onSubmit,
}: {
  onSubmit: (values: { author: string; text: string }) => void;
}) => {
  const { handleChange, handleSubmit } = useForm(
    { author: '', text: '' },
    onSubmit
  );
  return (
    <form>
      <div className='flex flex-col gap-4'>
        <Input
          placeholder='Your Name (optional)...'
          name='author'
          onChange={handleChange}
        />
        <TextArea
          name='text'
          className='max-w-100 min-w-100 max-h-100  bg-white!'
          placeholder='Your thoughts...'
          onChange={handleChange}
        />
        <Button
          type='submit'
          className='self-end mr-0! uppercase!'
          onClick={handleSubmit}
        >
          Post
        </Button>
      </div>
    </form>
  );
};

export default Form;
