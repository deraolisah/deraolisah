import React, { useState } from 'react';
import Project1a from '../assets/project1a.png';
import Project1b from "../assets/project1b.png";
import Project1c from "../assets/project1c.png";
import Project2 from '../assets/portfolio2.jpg';
import Project3 from '../assets/portfolio3.jpg';
import Project4 from '../assets/project4.png';
import Project5 from '../assets/portfolio5.png';
import Project6 from '../assets/project6.png';
import Project7 from '../assets/project7.jpg';
import Project8a from '../assets/project8a.png';
import Project8b from '../assets/project8b.png';
import ProjectModal from './ProjectModal';
import { BsArrowUpRight } from 'react-icons/bs';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = [
    {
      title: 'Easy Tickets',
      link: 'https://easy-tickets.netlify.app',
      description: 'A platform to discover, share, sell and book tickets for the best events near you.',
      image: [Project1a, Project1b, Project1c],
      date: "2025",
    },
    {
      title: 'TrendMart',
      link: 'https://trendmartng.netlify.app',
      description: 'A bootcamp project built as a Single Seller E-commerce Platform for a fashion studio under the creative direction of Chioma.',
      image: [Project2],
      date: "2024",
    },
    {
      title: 'Shop Lindura',
      link: 'https://shoplindura.com/',
      description: 'A shopping platform',
      image: [Project3],
      date: "2024",
    },
    {
      title: 'Delight Weds Fredrick',
      link: 'https://delight-weds-fredrick.netlify.app',
      description: 'The Wedding Ceremony between two Love Birds. This was basically an e-invite, which allowed Guests to RSVP online at their own leisure, and gather more details about the event.',
      image: [Project4],
      date: "2023",
    },
    {
      title: 'KP Oil & Gas Ltd.',
      link: 'https://kpoilngas.netlify.app',
      description: 'From the Coastline of the San Francisco Bay Area, USA... KP specializes in offshore & onshore drilling, rig equipment repairs, and rig installation.',
      image: [Project5],
      date: "2023",
    },
    {
      title: 'Christamelon Foundation',
      link: 'https://christamelon.netlify.app',
      description: 'N.G.O based in Zimbabwe, that supports and provide for the girl child. They operate nation-wide.',
      image: [Project6],
      date: "2022",
    },
    {
      title: 'Niarobi Group',
      link: 'https://emekaonyekaandco.com/',
      description: "A family-owned business, building foundations for impact and long term success. They expand into the trading, events & logistics industries.",
      image: [Project7],
      date: "2022",
    },
    {
      title: 'Emeka Onyeka & Co.',
      link: 'https://emekaonyekaandco.com/',
      description: 'A law firm based in Nigeria.',
      image: [Project8a, Project8b],
      date: "2005",
    },
  ];

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className='w-full flex flex-col md:flex-row gap-4 items-start justify-start py-20' id='projects'>
      
      <div className='md:w-60 md:sticky md:top-22'>
        {/* <p className='md:text-[28px]/[48px] text-[19px]/8 text-start'> Designed and built by Nathan. </p> */}
        <p className='md:text-[28px]/[48px] text-[19px]/8 font-light text-start flex items-center flex-wrap spacing-2 gap-2'> 
          <span> I do </span>
          {/* <span className='text-nowrap text-base text-gray bg-primary/20 py-1 px-3 rounded-full'> Brand Design  </span> */}
          <span className='text-nowrap text-base font-normal text-gray bg-primary/20 py-1 px-3 rounded-full'> Ui-Ux Design </span> 
          <span className='text-nowrap text-base font-normal text-gray bg-primary/20 py-1 px-3 rounded-full'> Graphic Design  </span>
          {/* <span className='text-nowrap text-base text-gray bg-primary/20 py-1 px-3 rounded-full'> Marketing Experience </span>  */}
          <span className='text-nowrap text-base font-normal text-gray bg-primary/20 py-1 px-3 rounded-full'> Website Development </span> 
          <span className='text-nowrap text-base font-normal text-gray bg-primary/20 py-1 px-3 rounded-full'> Cyber Security </span> 
          <span className='text-nowrap text-base font-normal text-gray bg-primary/20 py-1 px-3 rounded-full'> Networking </span> 
          and everything in between.
        </p>
      </div>

      <div className='w-full grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-4 gap-y-6 '>
      {projects.map((project) => (
          <div
            key={project.title}
            className="flex flex-col items-start justify-start gap-2 cursor-pointer relative"
            onClick={() => handleProjectClick(project)}
          >
            <div className="w-full h-full bg-black/40 backdrop-blur transition-all duration-400 absolute rounded-2xl text-white hidden sm:flex items-end justify-start p-4 gap-2 text-base font-bold opacity-0 hover:opacity-100"> 
              <span className='flex items-center gap-2'>
                {project.title} 
                <BsArrowUpRight className='text-xs'/>
              </span>
            </div>
            <img src={project.image[0]} alt="" className="rounded-2xl shadow border-1 border-primary/10" />
            <span className="sm:hidden flex items-center gap-2 text-sm font-semibold">
              {project.title}
              <BsArrowUpRight className='text-xs'/>
            </span>
          </div>
        ))}
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  )
}

export default Projects;