import { useForm } from 'hooks/useForm';
import { Button, Input, TextArea } from 'pixel-retroui';

const Form = ({
  onSubmit,
}: {
  onSubmit: (values: { author: string; text: string }) => void;
}) => {
  const { values, errors, handleChange, handleSubmit } = useForm(
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
        {errors.author && (
          <p className='text-red-500 text-xs'>{errors.author}</p>
        )}
        <TextArea
          name='text'
          className='max-w-100 min-w-100 max-h-100  bg-white!'
          placeholder='Your thoughts...'
          onChange={handleChange}
        />
        {errors.text && <p className='text-red-500'>{errors.text}</p>}
        <Button
          type='submit'
          className='self-end mr-0! uppercase! disabled:opacity-50'
          onClick={handleSubmit}
          disabled={!values?.text}
        >
          Post
        </Button>
      </div>
    </form>
  );
};

export default Form;
