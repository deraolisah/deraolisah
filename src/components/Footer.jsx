import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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
    <footer className='py-20 font-display bg-light-gray text-gray text-center'>
      <div className='container flex md:flex-row flex-col gap-4 items-center md:justify-between justify-center'>
        <div className='lefty md:text-start text-center flex md:flex-col items-center md:items-start gap-2'>
          <p> Dublin, Ireland. </p>
          <p>{currentTime} (GMT+1). </p>
        </div>
        <div className='righty flex flex-row md:flex-col gap-2 items-center md:items-end md:justify-between justify-center'>
          <p> &copy; 2020-2025. </p>
          <p> All Rights Reserved. </p>
        </div>
      </div>
      <p className='pt-6 text-xs'> Designed and built by Nathan. </p>
    </footer>
  )
}

export default Footer;