'use client'; 
import { useEffect } from 'react';

export default function Error({ error, reset }) {
  useEffect(() => {
     console.error(error?.message);
  }, [error]);

  return (
    <div id='ErrorPage'>
      <h2>Error Occured!</h2>
      <p className='message'>{error?.message||"Something went wrong!"}
         </p>
      <button className='start' onClick={() => reset()}>
        Try again
      </button>
    </div>
  );
}