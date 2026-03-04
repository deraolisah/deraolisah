import React from 'react';
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { projects } from "../assets/data";
import { Grid2x2, List } from 'lucide-react';

const Hero = () => {
  // Filter Projects
  const [filter, setFilter] = useState("All");
  const filteredprojects = filter === "All" ? projects : projects.filter(project => project.category === filter);

  // Open Modal
  const [modalOpened, setModalOpened] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (id) => {
    const project = projects.find(p => p.id === id);
    setSelectedProject(project);
    setModalOpened(true);
  }

  useEffect(() => {
    if (modalOpened) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [modalOpened]);

  // Animation variants for the container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section className='container pt-18 pb-10 flex flex-col' id='home'>
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="font-medium text-xl md:text-[34px] leading-tight tracking-tight"
      >
        Hello! I'm Nathan.
        <br/>
        Independent Designer & Developer.
      </motion.h1>

      <div className='mt-6 flex items-center justify-between gap-2 flex-wrap'>


      {/* Filter through Projects */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex items-center gap-x-4 flex-wrap font-medium text-sm"
      >
        {["All", "Web", "Graphics", "Experimental"].map((cat, index) => (
          <motion.button 
            key={index} 
            onClick={() => setFilter(cat)} 
            className={`hover:text-primary cursor-pointer ${filter === cat ? "underline font-semibold" : "text-dark/50"}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400 }}
          > 
            {cat} 
          </motion.button>
        ))}
      </motion.div>

        <div className='flex items-center gap-1 bg-gray-100 rounded-md border border-gray-200'> 
          <button className='p-1.5 rounded-md bg-transparent flex items-center gap-1 text-xs cursor-pointer'>
            <List size={16} />
            <span className='hidden pr-1.5'> List </span>
          </button>
          <button className='p-1.5 rounded-md bg-gray-300 flex items-center gap-1 text-xs cursor-pointer'>
            <Grid2x2 size={16} />
           <span className='hidden pr-1.5'> Grid </span>
          </button>
        </div>

      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-2 gap-y-3 mt-3"
      >
        <AnimatePresence mode="wait">
          {filteredprojects.map((project) => (
            <ProjectCard key={project.id} project={project} openModal={openModal} />
          ))}
        </AnimatePresence>

        {selectedProject && (
          <ProjectModal modalOpened={modalOpened} project={selectedProject} setModalOpened={setModalOpened} /> 
        )} 
      </motion.div>
    </section>
  )
}

export default Hero;