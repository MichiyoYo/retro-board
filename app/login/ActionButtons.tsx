'use client';

import { useRouter } from 'next/navigation';

const ActionButtons = () => {
  const router = useRouter();
  const onClick = () => {
    router.push('/dashboard');
  };
  return (
    <div className='card-actions justify-end'>
      <button className='btn btn-primary' onClick={onClick}>
        Login
      </button>
      <button className='btn btn-ghost'>Go Back</button>
    </div>
  );
};

export default ActionButtons;
