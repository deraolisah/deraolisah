import React from 'react';
import profile from "../assets/profile.png";

const About = () => {
  return (
    <section className="container py-10 md:py-18" id="about">
      <div className="grid grid-cols-3 md:grid-cols-4 gap-4 md:gap-2">
        
        <div className="col-span-1 relative">
          <img src={profile} className="object-cover w-full bg-gray-200 border border-gray-300 sticky top-4" />
        </div>

        {/* Content */}
        <div className="col-span-3">
          <div className='flex flex-col sm:flex-row gap-12 md:gap-6'>     
            <div className='w-full'>
              <h2 className="text-base mb-6 font-black"> About Me </h2>

              <p className="mb-6">
                I’m a multidisciplinary <strong>Designer, Engineer, and Artist</strong> with over <strong>5 years of experience</strong> crafting meaningful digital experiences and visual artefacts.
              </p>

              <p className="mb-6">
                Originally trained as a Mechanical Engineer, I transitioned into design and creative technology, blending analytical thinking with artistic expression to build interfaces and systems that are both functional and emotionally engaging.
              </p>

              <p>
                With a first degree in <strong>Mechanical Engineering</strong>, alongside formal training in Full-Stack Development and Cybersecurity... 

                <br/><br/>
                I bring a unique problem-solving approach that bridges engineering precision with creative intuition.
              </p>
            </div>


            {/* Expertise */}
            <div className='w-full flex flex-col'>
              <h2 className="text-base mb-6 font-black"> Expertise</h2>

              <p className="mb-4">
                My work spans a wide range of creative and technical disciplines, allowing me to approach problems holistically from concept to execution.
              </p>

              <ul className="mb-4 list-disc pl-4 text-base space-y-2">
                <li>Branding & Visual Identity</li>
                <li>UI / UX Design</li>
                <li>Content Creation & Digital Media</li>
                <li>Frontend & Backend Development</li>
                <li>Computer Networking</li>
                <li>Cybersecurity</li>
              </ul>

              <p>
                {/* This multidisciplinary background enables me to design and build solutions that are visually compelling, technically sound, and scalable. */}
                {/* This has enabled me to be a very competent contributor across all areas of the ideation & creation process while empowering me to easily collaborate with, manage & direct partners from a multitude of backgrounds with varying experience levels. */}
                This has made me a versatile contributor, able to lead and collaborate across diverse teams.
              </p>
            </div>
          </div>


          <div className='w-full h-80 bg-gray-200 border border-gray-300 mt-8'>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;