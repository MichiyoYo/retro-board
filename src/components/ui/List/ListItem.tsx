import React from 'react';

export const ListItem = ({ children }: { children: React.ReactNode }) => {
  return (
    <li key={crypto.randomUUID()} className='mb-5'>
      {children}
    </li>
  );
};
