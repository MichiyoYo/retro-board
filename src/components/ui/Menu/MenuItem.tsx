import { motion } from 'framer-motion';
import { Icon } from '@/ui';
import { Item } from 'types';

export interface MenuItem extends Item {
  label: string;
  icon: string;
  onClick: () => void;
}

export const MenuItem = ({ id, label, icon, onClick }: MenuItem) => {
  return (
    <motion.li whileHover={{ scale: 1.1 }} key={id} className='p-2'>
      <a onClick={onClick} className='flex items-center cursor-pointer gap-2'>
        <Icon name={icon} size={24} />
        <span className='text-sm'>{label}</span>
      </a>
    </motion.li>
  );
};
