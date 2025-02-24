import { Button, Input, TextArea } from 'pixel-retroui';

const Form = ({
  onSubmit,
}: {
  onSubmit: (event: React.MouseEvent<HTMLButtonElement>) => void;
}) => {
  return (
    <form>
      <div className='flex flex-col gap-3'>
        <Input
          placeholder='Your Name (optional)...'
          onChange={(e) => console.log(e.target.value)}
        />
        <TextArea
          className='max-w-100 min-w-100 max-h-100'
          placeholder='Your thoughts...'
          onChange={(e) => console.log(e.target.value)}
        />
        <Button type='submit' className='self-end mr-0' onClick={onSubmit}>
          POST
        </Button>
      </div>
    </form>
  );
};

export default Form;
