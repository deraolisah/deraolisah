import { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";
import { projects } from "../assets/data";

const Home = () => {


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
    <section className='container py-18 md:py-8 flex flex-col'>
      <h1 className="font-medium text-xl md:text-[34px] leading-tight tracking-tight">
        Hello! I'm Nathan
        <br/>
        Independent Designer & Developer.
      </h1>

      {/* Filter through Projects */}
      <div className="flex items-center gap-4 mt-6 font-medium text-sm">
        {["All", "Client's", "Personal", "Experimental"].map((cat) => (
          <button key={cat} onClick={() => setFilter(cat)} className={`hover:text-dark/80 cursor-pointer ${filter === cat ? "underline font-semibold" : "text-dark/50"}`}> 
            {cat} 
          </button>
        ))}
      </div>


      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-2 gap-y-3 mt-3">
        {filteredprojects.map((project) => (
          <ProjectCard project={project} openModal={openModal} />
        ))}

        {modalOpened && selectedProject && <ProjectModal project={selectedProject} setModalOpened={setModalOpened} /> }
      </div>
    </section>
  )
}

export default Home;