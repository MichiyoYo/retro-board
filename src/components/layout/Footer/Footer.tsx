import { Icon } from '@/ui';

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
        <li>
          <a href='https://github.com/MichiyoYo' target='_blank'>
            <Icon name='github' size={24} />
          </a>
        </li>
        <li>
          <a
            href='https://www.linkedin.com/in/cristinalesterrocks/'
            target='_blank'
          >
            <Icon name='linkedin' size={24} />
          </a>
        </li>
        <li>
          <a href='https://www.instagram.com/kitten_surimi/' target='_blank'>
            <Icon name='instagram-detailed' size={24} />
          </a>
        </li>
        <li className='mt-1'>
          <a href='https://www.notion.com/@purplestuffcrafts' target='_blank'>
            <Icon name='notion' size={18} />
          </a>
        </li>
      </ul>
    </div>
  </footer>
);
