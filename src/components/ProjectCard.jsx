

const ProjectCard = ({ project, openModal }) => {
  return (
    <div key={project.id} className="flex flex-col items-start gap-1 overflow-hidden truncate whitespace-nowrap cursor-pointer" onClick={() => {openModal(project.id)}}>
      <img src={project.imageUrl} alt="" className="w-full h-40 md:h-50 bg-gray-200 border border-gray-300 aspect-4/3" />
      <p className="text-sm font-medium w-full overflow-x-auto scrollbar-hidden"> {project.name} • {project.year} </p>
    </div>
  )
}

export default ProjectCard;