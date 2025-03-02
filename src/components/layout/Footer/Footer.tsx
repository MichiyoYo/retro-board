import { Icon } from '@/ui';
import { motion } from 'motion/react';

export const Footer = () => (
  <footer className='flex items-center flex-none justify-between'>
    <p className='text-xs flex gap-1'>
      Designed and coded with <Icon name='heart' size={16} /> by{' '}
      <a href='https://cristinalester.rocks' target='_blank'>
        <span className='underline'>Cristina Lester</span>
      </a>
    </p>
    <div className=''>
      <ul className='flex gap-1 align-center'>
        <motion.li whileHover={{ scale: 1.3 }}>
          <a href='https://github.com/MichiyoYo' target='_blank'>
            <Icon name='github' size={24} />
          </a>
        </motion.li>
        <motion.li whileHover={{ scale: 1.3 }}>
          <a
            href='https://www.linkedin.com/in/cristinalesterrocks/'
            target='_blank'
          >
            <Icon name='linkedin' size={24} />
          </a>
        </motion.li>
        <motion.li whileHover={{ scale: 1.3 }}>
          <a href='https://www.instagram.com/kitten_surimi/' target='_blank'>
            <Icon name='instagram-detailed' size={24} />
          </a>
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.3 }}
          className={`flex justify-center transitionClass`}
        >
          <a href='https://twitter.com/MichiyoYo' target='_blank'>
            <Icon name='notion' size={20} />
          </a>
        </motion.li>
      </ul>
    </div>
  </footer>
);
