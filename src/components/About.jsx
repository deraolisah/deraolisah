import React from 'react';
import profileImg from "../assets/profile.png";
import profileImg1 from "../assets/profile-1.jpg";
import profileImg2 from "../assets/profile-2.jpg";

const About = () => {
  return (
    <section className='flex flex-col items-center justify-center text-center py-22' id='about'>
      {/* <h2 className='w-full p-4 border-b border-primary sticky top-0 text-light bg-gray'> If you’re still scrolling, here’s my background </h2> */}
      <p className='md:text-[28px]/[48px] text-[19px]/8'>        
        I’m a multidisciplinary designer/developer who adeptly balances work with a <span className='text-primary'>business-centric approach</span> and a deep understanding of <span className='text-primary'>client & user needs. </span>        
        {/* My goal is to contribute to meaningful projects that leverage technology to address real-world problems and make a positive impact on people's lives. */}
        {/* I help brands raise money, getting acquired or sometimes avoid bankruptcy. */}
        {/* My Hobbies include Movies/Anime, Basketball/Football, and Video Games. */}
      </p>
      
      
      {/* <blockquote class="text-center text-2xl font-semibold text-gray-900 italic dark:text-white">
        When you look 
        <span class="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-primary mx-1">
          <span class="relative text-white dark:text-gray-950">annoyed</span>
        </span>
        all the time, people think that you're busy.
      </blockquote> */}

      <div className='w-full my-4 max-w-md mx-auto flex justify-center items-center gap-2'>
        <img src={profileImg1} alt='' className='max-h-68 md:flex hidden rounded-t-full' style={{ filter: "grayscale(1)"}} />
        <img src={profileImg} alt='' className='md:max-h-68 flex rounded-t-full' style={{ filter: "grayscale(1)"}} />
        <img src={profileImg2} alt='' className='max-h-68 lg:flex hidden rounded-t-full' style={{ filter: "grayscale(1)"}} />
      </div>

      <p className='text-sm'>
        I've been freelancing for over 5 years, and I've helped several brands & businesses to scale-up.
      </p>
      
    </section>
  )
}

export default About;