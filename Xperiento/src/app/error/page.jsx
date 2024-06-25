'use client'; 
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function ErrorPage({ error, reset }) {
const router = useRouter()
  return (
    <div id='ErrorPage'>
      <h2>Error Occured!</h2>
      <p className='message'>{error?.message||"Something went wrong!"}
         </p>
      <button className='start' onClick={() => router.back()}>
        Try again
      </button>
    </div>
  );
}