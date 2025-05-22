import React, { useState } from 'react';
import Project1a from "../assets/niarobi/01-main.png";
import Project1b from '../assets/niarobi/02-usp.png';
import Project1c from '../assets/niarobi/03-included.png';
import Project1d from '../assets/niarobi/04-features.png';
import Project1e from '../assets/niarobi/05-usage.png';
import Project1f from '../assets/niarobi/combo.png';
import Project2a from '../assets/bubis/1.png';
import Project2b from '../assets/bubis/2.png';
import Project2c from '../assets/bubis/3.png';
import Project2d from '../assets/bubis/4.png';
import Project3a from '../assets/web-flyer/1.png';
import Project3b from '../assets/web-flyer/2.png';
import Project3c from '../assets/web-flyer/3.png';
import Project3d from '../assets/web-flyer/4.png';
// import Project3a from '../assets/web-flyer/1.png';
import Project4 from '../assets/graphics/1.png';
import Project5 from '../assets/graphics/2.png';
import Project6 from '../assets/graphics/3.jpg';
import Project7 from '../assets/graphics/4.png';
import Project8 from '../assets/graphics/5.png';
import Project9 from '../assets/graphics/6.png';
// import Project10a from '../assets/project8a.png';
// import Project11a from '../assets/project8b.png';
import ProjectModal from './ProjectModal';
import { BsArrowUpRight } from 'react-icons/bs';
import { HiOutlineCursorClick } from "react-icons/hi";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = [
    {
      title: 'Niarobi Work Mat',
      link: '',
      description: 'A platform to discover, share, sell and book tickets for the best events near you.',
      image: [Project1a, Project1b, Project1c, Project1d, Project1e, Project1f],
    },
    {
      title: 'Bubis Valentine Packages',
      link: '',
      description: 'A bootcamp project built as a Single Seller E-commerce Platform for a fashion studio under the creative direction of Chioma.',
      image: [Project2a, Project2b, Project2c, Project2d],
    },
    {
      title: 'Web Dev Flyers',
      link: '',
      description: 'A shopping platform',
      image: [Project3a, Project3b, Project3c, Project3d],
    },
    {
      title: 'Assets View',
      link: '',
      description: 'The Wedding Ceremony between two Love Birds. This was basically an e-invite, which allowed Guests to RSVP online at their own leisure, and gather more details about the event.',
      image: [Project4],
    },
    {
      title: 'Zumba Automobile Ltd.',
      link: '',
      description: 'From the Coastline of the San Francisco Bay Area, USA... KP specializes in offshore & onshore drilling, rig equipment repairs, and rig installation.',
      image: [Project5],
    },
    {
      title: 'Jonixa Flyer',
      link: '',
      description: 'N.G.O based in Zimbabwe, that supports and provide for the girl child. They operate nation-wide.',
      image: [Project6],
      date: "2022",
    },
    {
      title: 'Jonixa TGIF',
      link: '',
      description: "A family-owned business, building foundations for impact and long term success. They expand into the trading, events & logistics industries.",
      image: [Project7],
    },
    {
      title: 'Perspective Eyes',
      link: '',
      description: '',
      image: [Project8],
    },
    {
      title: "Pluto Plumb Tool",
      link: "",
      description: "",
      image: [Project9],
    }
  ];

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className='w-full flex flex-col md:flex-row gap-4 items-start justify-start py-22' id='projects'>
      
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
          <HiOutlineCursorClick /> 
          <span className='text-[12px] italic'> click to view... </span>
        </p>
      </div>

      <div className='w-full grid grid-cols-3 md:grid-cols-4 gap-1 '>
      {projects.map((project) => (
          <div
            key={project.title}
            className="flex flex-col items-start justify-start gap-2 cursor-pointer relative"
            onClick={() => handleProjectClick(project)}
          >
            <div className="w-full h-full bg-black/40 backdrop-blur transition-all duration-400 absolute rounded-md text-white hidden sm:flex items-end justify-start p-4 gap-2 text-base font-bold opacity-0 hover:opacity-100"> 
              <span className='flex items-center gap-2'>
                {project.title} 
                <BsArrowUpRight className='text-xs'/>
              </span>
            </div>
            <img src={project.image[0]} alt="" className="shadow w-full rounded-md border-1 border-primary/10" />
            <span className="hidden items-center gap-2 text-xs">
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