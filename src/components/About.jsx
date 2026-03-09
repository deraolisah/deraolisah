import React from 'react';
import profile from "../assets/profile.png";

const About = () => {
  return (
    <section className="container py-10 md:py-18" id="about">
      <div className="grid grid-cols-3 md:grid-cols-4 gap-4 md:gap-2">
        
        <div className="col-span-1 relative">
          <img src={profile} className="hidden md:block object-cover w-full bg-gray-200 md:border border-white sticky top-4 saturate-0 hover:saturate-100" style={{
            // border: "0.5px solid rgba(255,255,255,0.8)",
            boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
          }} />
        </div>

        {/* Content */}
        <div className="col-span-3">
          <div className='flex flex-col sm:flex-row gap-12 md:gap-6'>     
            <div className='w-full'>
              <h2 className="text-lg md:text-xl mb-4 md:mb-6 font-bold"> About Me </h2>

              <p className="mb-6">
                I’m a multi-disciplinary <strong>Designer, Engineer, Artist, and Entreprenuer</strong> with over <strong>5 years of experience</strong> crafting meaningful digital experiences and visual artefacts.
              </p>

              <p className="mb-6">
                Originally with a first degree in <strong>Mechanical Engineering</strong>, 
                before I transitioned to Tech by obtaining formal training in Full-Stack Web Development and Cybersecurity...


                <br/><br/>
                
                
                Which enables me to design, create and blend analytical thinking with artistic expression, to build interfaces and systems that are both functional and emotionally engaging.
                
               
              </p>

              <p>
                I bring a unique problem-solving approach that bridges engineering precision with creative intuition.
              </p>
            </div>


            {/* Expertise */}
            <div className='w-full flex flex-col items-start'>
              <h2 className="text-lg md:text-xl mb-4 md:mb-6 font-bold"> Expertise</h2>

              <p className="mb-4">
                My work spans a wide range of creative and technical disciplines, allowing me to approach problems holistically, from concept to execution. Which includes the following:
              </p>

              <ul className="mb-4 list-disc pl-4 text-base space-y-2">
                <li>Branding & Visual Identity Design</li>
                <li>UI-UX Design</li>
                <li>Content Creation & Digital Media</li>
                <li>Frontend & Backend Development</li>
                <li>Computer Networking</li>
                <li>CyberSecurity</li>
              </ul>

              <p>
                {/* This multidisciplinary background enables me to design and build solutions that are visually compelling, technically sound, and scalable. */}
                {/* This has enabled me to be a very competent contributor across all areas of the ideation & creation process while empowering me to easily collaborate with, manage & direct partners from a multitude of backgrounds with varying experience levels. */}
                These have made me a versatile contributor, able to lead and collaborate across diverse teams.
              </p>
            </div>
          </div>


          <div className='w-full hidden md:flex flex-col items-start mt-8'>
            <h2 className="text-lg md:text-xl mb-4 md:mb-6 font-bold"> Experience </h2>
            {/* Jack of all trades, Master of Design... literally */}

            <div className='flex items-start gap-2 my-2'>
              <div className='w-40'>
                Mar 2024 - 2025
              </div>

              <div className='flex-1 space-y-4'>
                <div className='flex flex-col gap-1'>
                  <p>
                    <strong> NIIT ForteSoft </strong> • 
                    <span className='text-dark/80'> Cyber‑Security Graduate Trainee </span>
                  </p>                  
                  <p> Hands‑on experience with cybersecurity tools and threat‑response techniques. </p>
                </div>
              </div>
            </div>

            <div className='flex items-start gap-2 my-2'>
              <div className='w-40'>
                 Nov 2023 – 2024
              </div>

              <div className='flex-1 space-y-4'>
                <div className='flex flex-col gap-1'>
                  <p>
                    <strong> NIIT ForteSoft </strong> • 
                    <span className='text-dark/80'> Network Analyst (Cisco Certified) </span>
                  </p>
                  <p> Setup, upgrade, and maintenance of network infrastructures. </p>
                </div>
              </div>
            </div>

            <div className='flex items-start gap-2 my-2'>
              <div className='w-40'>
                Sep 2020 – Present
              </div>

              <div className='flex-1 space-y-4'>
                <div className='flex flex-col gap-1'>
                  <p>
                    <strong> Freelance - Remote </strong> • 
                    <span className='text-dark/80'> Web Applications Developer </span>
                  </p>
                  <p> Building static and dynamic web applications using ExpressJs, NodeJs, ReactJs, TailwindCSS, and MongoDB. </p>
                </div>
              </div>
            </div>


            


{/* Education
2021 – 2023

OCAD University
Master of Design, Digital Futures

Student Union Rep. Designed a multisensory Experience for the AGO (Art Gallery of Ontario)

2012 – 2017

Babcock University
BSc, Computer Science

Member of the Babcock University Computer Club & team that won the 2016 exhibition */}

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;