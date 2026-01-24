

const ProjectCard = ({ project, openModal }) => {
  const firstMedia = project.media[0];

  return (
    <div className="flex flex-col items-start gap-1 overflow-hidden truncate whitespace-nowrap cursor-pointer" onClick={() => openModal(project.id)}>
      {firstMedia.type === "img" ? (
        <img src={firstMedia.url} className="w-full h-fit bg-gray-200 border border-gray-300 aspect-video md:aspect-3/2 object-cover" />
      ) : (
        <video className="w-full h-full bg-gray-200 border border-gray-300 aspect-video md:aspect-3/2 object-cover" autoPlay loop muted>
          <source src={firstMedia.url} type="video/mp4" />
        </video>
      )}

      <p className="text-xs sm:text-sm font-medium w-full overflow-x-auto scrollbar-hidden"> {project.name} • {project.year} </p>
    </div>
  );
};

export default ProjectCard;