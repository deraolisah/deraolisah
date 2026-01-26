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
              <h2 className="text-lg md:text-xl mb-4 md:mb-6 font-bold"> About Me </h2>

              <p className="mb-6">
                I’m a multi-disciplinary <strong>Designer, Engineer, and Artist</strong> with over <strong>5 years of experience</strong> crafting meaningful digital experiences and visual artefacts.
              </p>

              <p className="mb-6">
                Originally with a first degree in <strong>Mechanical Engineering</strong>, alongside formal training in Full-Stack Web Development and Cybersecurity... 

                <br/><br/>
                I transitioned to Tech in order to design, create and blend analytical thinking with artistic expression to build interfaces and systems that are both functional and emotionally engaging.
              </p>

              <p>
                I bring a unique problem-solving approach that bridges engineering precision with creative intuition.
              </p>
            </div>


            {/* Expertise */}
            <div className='w-full flex flex-col'>
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
                <li>Cybersecurity</li>
              </ul>

              <p>
                {/* This multidisciplinary background enables me to design and build solutions that are visually compelling, technically sound, and scalable. */}
                {/* This has enabled me to be a very competent contributor across all areas of the ideation & creation process while empowering me to easily collaborate with, manage & direct partners from a multitude of backgrounds with varying experience levels. */}
                These have made me a versatile contributor, able to lead and collaborate across diverse teams.
              </p>
            </div>
          </div>


          <div className='w-full mt-8'>
            <h2 className="text-lg md:text-xl mb-4 md:mb-6 font-bold"> Experience </h2>
Jack of all trades, Master of Design... literally

Erfahrung
Alleskönner, Meister des Designs... im wahrsten Sinne des Wortes

Expérience
Homme à tout faire, Maître du Design... littéralement

Education
2021 – 2023

OCAD University
Master of Design, Digital Futures

Student Union Rep. Designed a multisensory Experience for the AGO (Art Gallery of Ontario)

2012 – 2017

Babcock University
BSc, Computer Science

Member of the Babcock University Computer Club & team that won the 2016 exhibition

Work
2025 – Now

Superfluous
Creative Director

Partnering with next-gen challenger brands to help them go above and beyond the status quo

Fraymer.com
Founder & Head of Product

A tool to create animated content effortlessly. Dobson Entrepreneurial Excellence Prize

2023 – 2024

EQB Inc.
Principal Visual Designer

Contracted to help lead EQ Banks’ product design language & brand expression into a modern era

2018 – 2022

Paystack [Acquired by Stripe]
Design Engineer

4 years designing apps, tools & experiences used by millions of Africans. Acquired for over $200M

Other
2023 – Now

Fineline Co-op
Founding Director

Community & co-operative where creatives can sell their work while developing entrepreneurial skills

Artscape Daniels Launchpad
Artist-in-residence (3 months)

Working alongside collaborators across the fields of Digital Fabrication, Electronics & Photography.

2022 – Now

Sporting Lagos
Founding Member

Football club that has risen from the Nigerian National League to the 1st division

2021 – Now

Awwwards
Jury Member

Judging & critiquing work from the the best web designers, developers & agencies in the world

2020

Red Bull Basement
Judge & Expert Panelist

Selected top idea to represent Nigeria globally & spoke on panel about accessibility in 
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;