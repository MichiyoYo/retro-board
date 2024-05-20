import React from 'react';
import LoginForm from './LoginForm';

const Login = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className='text-8xl font-retro'>Retro Board</h1>
      <LoginForm />
    </div>
  );
};

export default Login;
