'use client';

import Error from 'next/error';

interface ErrorProps {
  error: Error;
  reset: () => void;
}

const ErrorPage = ({ error, reset }: ErrorProps) => {
  console.error(error);
  return (
    <>
      <button className='btn btn-primary w-fit' onClick={() => reset()}>
        Retry
      </button>
      <div>an unexpected error happened</div>
    </>
  );
};

export default ErrorPage;
