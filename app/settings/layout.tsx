import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const SettingsLayout = ({ children }: Props) => {
  return (
    <div className='flex '>
      <aside className='bg-slate-200 p-5 mr-5'>Settings sidebar</aside>
      <div>{children}</div>
    </div>
  );
};

export default SettingsLayout;
