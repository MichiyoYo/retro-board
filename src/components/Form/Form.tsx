import { useForm } from 'hooks/useForm';
import { Button, Input, TextArea } from 'pixel-retroui';
import { validateCard } from './validator';

const Form = ({
  onSubmit,
}: {
  onSubmit: (values: { author: string; text: string }) => void;
}) => {
  const { values, errors, handleChange, handleSubmit } = useForm(
    { author: '', text: '' },
    onSubmit,
    validateCard
  );
  return (
    <form className='flex flex-col w-full '>
      <div className='flex flex-col w-full gap-4'>
        <div className='w-full flex flex-col gap-1'>
          <Input
            placeholder='Your Name (optional)...'
            name='author'
            onChange={handleChange}
          />
          {errors.author && (
            <p className='text-red-500 text-xs'>{errors.author}</p>
          )}
        </div>
        <div className='w-full flex flex-col gap-3'>
          <TextArea
            name='text'
            className='max-w-100 min-w-100 max-h-100  bg-white!'
            placeholder='Your thoughts...'
            onChange={handleChange}
          />
          {errors.text && <p className='text-red-500 text-xs'>{errors.text}</p>}
        </div>
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
