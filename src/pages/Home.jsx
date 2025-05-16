import React from 'react';
import Hero from '../components/Hero';
import About from "../components/About";
import Projects from '../components/Projects';
import Services from '../components/Services.jsx';
import Connect from '../components/Connect';

const Home = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <Hero />
      {/* <hr className='h-1 w-full border-primary/20'/> */}
      <About />
      <hr className='h-1 w-full border-primary/20'/>
      <Services />
      <hr className='h-1 w-full border-primary/20'/>
      <Projects />
      <hr className='h-1 w-full border-primary/20'/>
      {/* <hr className='h-1 w-full border-primary/20'/> */}
      <Connect />
    </div>
  )
}

export default Home;