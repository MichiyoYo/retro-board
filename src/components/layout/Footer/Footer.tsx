import { Icon } from '@/ui';

export const Footer = () => (
  <footer className='flex items-center flex-none justify-between'>
    <p className='text-xs flex gap-1'>
      Designed and coded with <Icon name='heart' size={16} /> by{' '}
      <a href='https://cristinalester.rocks' target='_blank'>
        <span className='underline'>Cristina Lester</span>
      </a>
    </p>
    <div className='flex gap-2 align-center'>
      <a href='https://github.com/MichiyoYo' target='_blank'>
        <Icon name='github' size={24} />
      </a>
      <a
        href='https://www.linkedin.com/in/cristinalesterrocks/'
        target='_blank'
      >
        <Icon name='linkedin' size={24} />
      </a>
      <a href='https://github.com/MichiyoYo' target='_blank'>
        <Icon name='instagram-detailed' size={24} />
      </a>
    </div>
  </footer>
);
