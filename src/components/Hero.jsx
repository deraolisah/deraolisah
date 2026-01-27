import React from 'react';
import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { projects } from "../assets/data";

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


  return (
    <section className='container pt-18 pb-10 flex flex-col' id='home'>
      <h1 className="font-medium text-xl md:text-[34px] leading-tight tracking-tight">
        Hello! I'm Nathan.
        <br/>
        Independent Designer & Developer.
      </h1>

      {/* Filter through Projects */}
      <div className="flex items-center gap-4 mt-6 font-medium text-sm">
        {["All", "Web", "Graphics", "Experimental"].map((cat, index) => (
          <button key={index} onClick={() => setFilter(cat)} className={`hover:text-primary cursor-pointer ${filter === cat ? "underline font-semibold" : "text-dark/50"}`}> 
            {cat} 
          </button>
        ))}
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-2 gap-y-3 mt-3">
        {filteredprojects.map((project) => (
          <ProjectCard project={project} openModal={openModal} />
        ))}

        {selectedProject && (
          <ProjectModal modalOpened={modalOpened} project={selectedProject} setModalOpened={setModalOpened} /> 
        )} 
      </div>
    </section>
  )
}

export default Hero;