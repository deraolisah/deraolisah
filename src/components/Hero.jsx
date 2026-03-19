import React from 'react';
import { useEffect, useState } from "react";
import { motion } from 'framer-motion';
import Projects from "./Projects"; 
import ProjectModal from "./ProjectModal";
import { projects } from "../assets/data";
import { Grid2x2, List } from 'lucide-react';

const Hero = () => {
  // Filter Projects
  const [filter, setFilter] = useState("All");
  const filteredprojects = filter === "All" ? projects : projects.filter(project => project.category === filter);
  const [activeLayout, setActiveLayout] = useState("grid");

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

  // Animation variants
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

      <div className='mt-6 flex items-center justify-between gap-2 flex-wrap py-2 bg-[whitesmoke] sticky top-0 z-20'>
        {/* Filter through Projects */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex-1 flex items-center gap-x-4 flex-wrap font-medium text-sm"
        >
          {["All", "Web", "Graphics", "Experimental"].map((cat, index) => (
            <motion.button 
              key={index} 
              onClick={() => { setFilter(cat); scrollTo(0,0); }} 
              className={`hover:text-primary cursor-pointer ${filter === cat ? "underline font-semibold text-primary" : "text-dark/50"}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400 }}
            > 
              {cat} 
            </motion.button>
          ))}
        </motion.div>

        <p className='flex items-center gap-1 font-medium text-xs text-light bg-primary p-1 px-2 rounded-full'>
          {filteredprojects.length} 
          <span className='hidden md:flex'> projects </span>
        </p>

        {/* Layout Toggle Buttons - Fixed */}
        <div className='flex items-center gap-0 bg-gray-100 rounded-sm border border-primary/80 overflow-hidden'> 
          <button 
            className={`p-1.5 flex items-center gap-1 text-xs cursor-pointer transition-colors duration-200 ${
              activeLayout === "list" ? "bg-primary" : "bg-transparent hover:bg-gray-200"
            }`} 
            onClick={() => setActiveLayout("list")} 
            title='List view'
          >
            <List size={14} className={activeLayout === "list" ? "text-light" : "text-gray-500"} />
            <span className='hidden pr-1.5'>List</span>
          </button>
          
          <button 
            className={`p-1.5 flex items-center gap-1 text-xs cursor-pointer transition-colors duration-200 ${
              activeLayout === "grid" ? "bg-primary" : "bg-transparent hover:bg-gray-200"
            }`} 
            onClick={() => setActiveLayout("grid")} 
            title='Grid view'
          >
            <Grid2x2 size={14} className={activeLayout === "grid" ? "text-light" : "text-gray-500"} />
            <span className='hidden pr-1.5'>Grid</span>
          </button>
        </div>
      </div>

      {/* Project List Component */}
      <Projects
        projects={filteredprojects} 
        openModal={openModal} 
        layout={activeLayout}
      />

      {/* Modal */}
      {selectedProject && (
        <ProjectModal modalOpened={modalOpened} project={selectedProject} setModalOpened={setModalOpened} /> 
      )} 
    </section>
  )
}

export default Hero;