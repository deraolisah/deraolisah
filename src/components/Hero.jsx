import React from 'react';
import HeroCarousel from './HeroCarousel.jsx';
import "./HeroCarousel.css";
import "./base-embla.css";


const Hero = () => {


const OPTIONS = { 
  loop: true,  // Enables infinite scrolling
  containScroll: false, 
  align: "start",  // Aligns slides to the start
  speed: 10,  // Adjusts transition Speed
  draggable: true,  // Enables Dragging
  autoPlay: true,  // Allows AutoPlay
  // slidesToScroll: 2,
}
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

  return (
    <section className='w-full pt-[60px] md:pt-[80px] pb-10 md:pb-20 flex flex-col md:gap-14 gap-10 justify-center items-center' id='home'>
      {/* <h5 className='text-lg font-light'> Hello, I'm Emma Young. </h5> */}
      
      <div className=' max-w-lg mx-auto flex flex-col md:gap-4.5 gap-3 text-center'>
        <span className='w-fit mx-auto relative md:text-[28px] text-[19px]'> 
          Hello, I'm <span className='text-primary'> Chidera Olisah. </span>
          <b className='absolute font-light text-xs -top-6 right-6 -rotate-10 rounded-sm text-white bg-primary px-1.5 py-1 -z-1 animate-pulse'> 
            (Nathan)
          </b>
        </span>

        <span className='md:text-xl/[34px] text-[17px]/[28px]'>
          An Independent Graphic Designer, Web Developer, & Cyber-Security Specialist.
        </span>

        <div className="flex md:flex-row flex-col md:gap-0 gap-1 items-center justify-center mt-4">
          <a className='flex bg-primary text-white rounded-full shadow-xl border-2 border-primary px-6 py-2 text-sm' href='https://call.whatsapp.com/video/Nh1fYFtI6aRnuo7RtO3meg' target='_blank'>
            Book an intro call
          </a>
          <a className='flex py-2 px-4 text-primary text-sm cursor-pointer underline' href='https://wa.me/2347088530385/' target='_blank'> Text me </a>
        </div>
      </div>

      <HeroCarousel slides={SLIDES} options={OPTIONS} />      
    
    </section>
  )
}

export default Hero;