

const ProjectCard = ({ project, openModal }) => {
  return (
    <div className="flex flex-col items-start gap-1 overflow-hidden truncate whitespace-nowrap cursor-pointer" onClick={() => {openModal(project.id)}}>
      <img src={project.imageUrl} alt="" className="w-full h-fit bg-gray-200 border border-gray-300 aspect-video " />
      {/* <video className="w-full h-40 md:h-50 bg-gray-200 border border-gray-300 aspect-video" autoPlay loop>
        <source src={project.imageUrl} type="video/mp4" />
      </video> */}
      <p className="text-xs sm:text-sm font-medium w-full overflow-x-auto scrollbar-hidden"> {project.name} • {project.year} </p>
    </div>
  )
}

export default ProjectCard;