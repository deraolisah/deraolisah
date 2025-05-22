import React from 'react';
import Lottie from 'lottie-react';
import animationData from "../assets/animation.json"; 

const Connect = () => {
  return (
    <section className='w-full md:py-22 py-20 pb-25' id='connect'>
      <div className='flex flex-col gap-2 items-center justify-center'>
        <p className='md:text-[28px]/[48px] text-[19px]/8  font-light'> 
          Interested in working together?
        </p>
        
        <div className='flex items-center justify-center gap-4 md:gap-6 flex-wrap underline'>
          <a href='mailto:deraolisah@gmail.com' target='_blank' className='hover:text-primary'> Email </a>
          <a href='https://instagram.com/deraolisah/' target='_blank' className='hover:text-primary'> Instagram </a>
          <a href='https://x.com/deraolisah/' target='_blank' className='hover:text-primary'> X/Twitter </a>
          <a href='https://linkedin.com/in/chidera-olisah/' target='_blank' className='hover:text-primary'> LinkedIn </a>
          <a href='https://github.com/deraolisah/' target='_blank' className='hover:text-primary'> Github </a>
        </div>

        <div className="flex items-center gap-0 border-1 border-dark-gray pr-6 mt-3 rounded-xl text-xs">
          <Lottie 
              animationData={animationData} 
              loop={true} 
              style={{ width: '74px',  color: '#333' }} 
              className="lottie !text-dark-gray"
            />
          <div className="flex flex-col gap-1">
            <p> Available For Work </p>
            <p> Working Globally </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Connect;