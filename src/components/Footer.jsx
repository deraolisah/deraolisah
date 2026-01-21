import React, { useState, useEffect } from 'react';
import { Volume2, MoveUpRight } from 'lucide-react';

const Footer = () => {

  // const [currentTime, setCurrentTime] = useState('');

  // useEffect(() => {
  //   const updateTime = () => {
  //     const date = new Date();
  //     const currentTimeString = date.toLocaleTimeString('en-US', {
  //       timeZone: 'Europe/Dublin',
  //       hour: '2-digit',
  //       minute: '2-digit',
  //       second: '2-digit',
  //     });
  //     setCurrentTime(currentTimeString);
  //   };
  //   updateTime();
  //   const intervalId = setInterval(updateTime, 1000); // update every 1 second
  //   return () => clearInterval(intervalId);
  // }, []);

  return (
    <footer className='container py-10 flex items-center justify-between gap-4'>
      {/* <p className='text-sm bg-gray-200 border border-dark/20 p-1.5'>{currentTime} (GMT+1) </p> */}

      <a target='_blank' href='https://open.spotify.com/track/57NBD4H4CIFw5sdOuci0UB?si=65b663237a494fa3' className='w-50 mx-auto bg-gray-200 border border-dark/20 flex items-center justify-center gap-2 px-2 py-1.5 overflow-hidden whitespace-nowrap text-sm hover:bg-gray-200 cursor-pointer relative' title='Spotify'>
      
        <div className="absolute z-2 left-0 top-0 h-full w-full bg-linear-to-r from-gray-200/50 via-transparent to-gray-200/50"></div>

        <span className='bg-gray-200 absolute left-0 z-4 w-8 h-full flex items-center justify-center'>
          <Volume2 size={18} strokeWidth={1.5} />
        </span>

        <div className='flex whitespace-nowrap pl-8 pr-8'>
          <div className='flex animate-marquee'>
            <span className="mx-4">
              Mayorkun – Lose Control (feat. Blxckie)
            </span>
            <span className="mx-4">
              Mayorkun – Lose Control (feat. Blxckie)
            </span>
          </div>
        </div>

        <span className='bg-gray-200 absolute right-0 z-4 w-8 h-full flex items-center justify-center'>
          <MoveUpRight size={18} strokeWidth={1.5} />
        </span>
      </a>



      
    </footer>
  )
}

export default Footer;