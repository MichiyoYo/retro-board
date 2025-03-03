import { Icon, Menu } from '@/ui';
import { Button } from 'pixel-retroui';
import { motion } from 'motion/react';
import { useState } from 'react';
import { Drawer } from '@/layout';
import { menuItems } from 'constants';

export const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleBuyMeACoffee = () => {
    window.open('https://buymeacoffee.com/creechan', '_blank');
  };
  return (
    <>
      <header className='flex justify-between w-full items-center flex-none'>
        <div className='flex-none'>
          <motion.button
            whileHover={{ scale: 1.1 }}
            className='flex items-center gap-1'
            onClick={() => setIsDrawerOpen(true)}
          >
            <Icon name='burger-menu' size={32} />
            menu
          </motion.button>
        </div>
        <h1 className='text-[4rem]! flex-1 text-center font-pixy'>
          Retro Board
        </h1>
        <motion.div whileHover={{ scale: 1.1 }} className='flex-none '>
          <Button
            className={`flex items-center gap-1`}
            bg='#a1a1a12b'
            onClick={handleBuyMeACoffee}
          >
            <Icon name='coffee-takeaway' size={16} />
            <span className='text-xs'>buy me a coffee</span>
          </Button>
        </motion.div>
      </header>
      <Drawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
        <Menu menuItems={menuItems} />
      </Drawer>
    </>
  );
};
