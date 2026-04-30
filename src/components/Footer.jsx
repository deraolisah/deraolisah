import React, { useState, useEffect } from 'react';
import { Linkedin, Github, Twitter, Instagram } from 'lucide-react';
import { Volume2, MoveUpRight } from 'lucide-react';
import gumroad from "../assets/gumroad.png";
import gumroadHover from "../assets/gumroad-hover.png";

const Footer = () => {

  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const date = new Date();
      const currentTimeString = date.toLocaleTimeString('en-US', {
        timeZone: 'Europe/Dublin',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });
      setCurrentTime(currentTimeString);
    };
    updateTime();
    const intervalId = setInterval(updateTime, 1000); // update every 1 second
    return () => clearInterval(intervalId);
  }, []);

  return (
    <footer className='container pt-10 mt-10 flex flex-col items-center justify-between gap-8 border-t border-gray-300'>
      {/* <p className='text-sm bg-gray-200 border border-dark/20 p-1.5 text-center'>{currentTime} (GMT+1) </p> */}

      <div className='text-center space-y-4'> 
        <p> Connect With Me </p>

        <div className='flex items-center gap-6'>
          <a title="LinkedIn" href="https://linkedin.com/in/chidera-olisah/" target='_blank' className='font-bold underline hover:text-primary'><Linkedin /></a>
          <a title="GitHub" href="https://github.com/deraolisah/" target='_blank' className='font-bold underline hover:text-primary'><Github /></a>
          <a title="Twitter" href="https://twitter.com/deraolisah/" target='_blank' className='font-bold underline hover:text-primary'><Twitter /></a>
          <a title="Instagram" href="https://instagram.com/deraolisah/" target='_blank' className='font-bold underline hover:text-primary'><Instagram /></a>
          <a title="Gumroad" href="https://deraolisah.gumroad.com/" target='_blank' className='font-bold underline hover:text-primary group'>
            <img src={gumroad} alt='' className='h-5.5 w-5.5 object-cover group-hover:hidden' />
            <img src={gumroadHover} alt='' className='h-5.5 w-5.5 object-cover hidden group-hover:block' />
          </a>
        </div>
      </div>

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

      <div className='w-full flex items-center justify-between border-t border-gray-300 py-6 mt-4'>
        <span> Thanks for stopping by! :) </span>

        <span> Nathan © 2026 </span>
      </div>
    </footer>
  )
}

export default Footer;