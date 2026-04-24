import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from "./ProjectCard";
import ProjectList from "./ProjectList";

const Projects = ({ projects, openModal, layout }) => {
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

  // Different grid layouts based on view
  const gridLayout = "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-2 gap-y-3";
  const listLayout = "flex flex-col gap-px bg-gray-200";

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={ `overflow-hidden ${layout === "grid" ? gridLayout : listLayout + " rounded-lg"}` }
    >
      <AnimatePresence mode="wait">
        {projects.map((project) => (
          layout === "grid" ? (
            <ProjectCard 
              key={project.id} 
              project={project} 
              openModal={openModal} 
            />
          ) : (
            <ProjectList
              key={project.id}
              project={project}
              openModal={openModal}
            />
          )
        ))}
      </AnimatePresence>
    </motion.div>
  );
};

export default Projects;