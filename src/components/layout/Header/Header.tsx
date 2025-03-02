import { Icon } from '@/ui';
import { Button } from 'pixel-retroui';

export const Header = () => {
  const handleBuyMeACoffee = () => {
    window.open('https://buymeacoffee.com/creechan', '_blank');
  };
  return (
    <header className='flex justify-between w-full items-center flex-none'>
      <div className='flex-none'>
        <button className='flex items-center gap-1'>
          <Icon name='burger-menu' size={32} />
          menu
        </button>
      </div>
      <h1 className='text-2xl flex-1 text-center'>Retro Board</h1>
      <div className='flex-none '>
        <Button
          className='flex items-center gap-1 invert'
          bg='#a1a1a12b'
          onClick={handleBuyMeACoffee}
        >
          <Icon name='coffee-takeaway' size={16} />
          <span className='text-xs'>buy me a coffee</span>
        </Button>
      </div>
    </header>
  );
};
