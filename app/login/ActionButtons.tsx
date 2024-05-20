'use client';

import { useRouter } from 'next/navigation';

const ActionButtons = () => {
  const router = useRouter();
  const onClick = () => {
    router.push('/dashboard');
  };
  return (
    <div className='card-actions justify-end'>
      <button className='nes-btn is-success' onClick={onClick}>
        Login
      </button>
      <button className='nes-btn is-primary'>Go Back</button>
    </div>
  );
};

export default ActionButtons;
