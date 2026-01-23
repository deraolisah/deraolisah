import React from 'react'

const About = () => {
  return (
    <section className='container py-18 md:py-8 flex flex-col'>
      <h3 className='font-medium text-xl md:text-[34px] leading-tight tracking-tight'> 
       Multidisciplinary Creator 
       <br/>
       focused on client & user impact.
      </h3>

      <br/><br/>

      My expertise spans a wide array of domains, including but not limited to:
      <br/><br/>
      
      <ul>
        <li>- Branding & Visual Identity </li>
        <li>- UI-UX Design </li>
        <li>- Content Creation </li>
        <li>- Frontend & Backend Development </li>
        <li>- Computer Networking </li>
        <li>- Cyber Security </li>
      </ul> 
      <br/>
      and everything in between.

      <br/><br/>
      <img src='' alt='' className='object-cover w-32 h-32 bg-gray-200 border border-gray-300 inline-block' />

      <p className='inline'>
        With a 1st degree in Mechanical Engineering, and technical training in Full-Stack Development and Cyber Security, I bring a unique blend of analytical thinking and creative problem-solving to every project I undertake.
      </p>

      <br/><br/>
      I am passionate about leveraging technology and design to create impactful solutions that resonate with audiences and drive meaningful results for clients.
      <p></p>
    </section>
  )
}

export default About;