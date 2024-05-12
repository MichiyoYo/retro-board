import Link from 'next/link';
import React from 'react';

interface NavbarProps {
  user?: object;
}

const NavBar = ({ user }: NavbarProps) => {
  return (
    <nav className='flex space-x-4'>
      <Link href='/dashboard'>Dashboard</Link>
      <Link href='/settings'>Settings</Link>
      {user ? (
        <Link href='/user'>Profile</Link>
      ) : (
        <Link href='/login'>Log In</Link>
      )}
    </nav>
  );
};

export default NavBar;
