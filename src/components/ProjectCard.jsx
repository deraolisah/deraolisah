import loadingImg from "../assets/loading.gif";

const ProjectCard = ({ project, openModal }) => {
  // Handle cases where project.media might be empty or undefined
  const firstMedia = project.media?.[0];

  // If no media exists at all, show loading image
  if (!firstMedia || !firstMedia.url) {
    return (
      <div 
        className="flex flex-col items-start gap-1 overflow-hidden truncate whitespace-nowrap cursor-pointer" 
        onClick={() => openModal(project.id)}
      >
        <div className="relative w-full aspect-video md:aspect-3/2 bg-gray-200 border border-gray-300 flex items-center justify-center">
          <img 
            src={loadingImg} 
            alt="Loading" 
            className="w-full h-full object-cover aspect-video"
          />
        </div>
        <p className="text-xs sm:text-sm font-medium w-full overflow-x-auto scrollbar-hidden">
          {project.name} • {project.year}
        </p>
      </div>
    );
  }

  return (
    <div 
      className="flex flex-col items-start gap-1 overflow-hidden truncate whitespace-nowrap cursor-pointer" 
      onClick={() => openModal(project.id)}
    >
      {firstMedia.type === "img" ? (
        <img 
          src={firstMedia.url || loadingImg} 
          alt={project.name}
          className="w-full h-fit bg-gray-200 border border-gray-300 aspect-video md:aspect-3/2 object-cover flex items-center justify-center" 
          loading="lazy"
          onError={(e) => {
            e.currentTarget.src = loadingImg;
            e.currentTarget.onerror = null; // Prevent infinite loop
            e.currentTarget.alt = "Image failed to load";
          }}
        />
      ) : (
        <div className="relative w-full aspect-video md:aspect-3/2 bg-gray-200 border border-gray-300">
          <video 
            className="w-full h-full object-cover"
            autoPlay 
            loop 
            muted
            // onError={(e) => {
            //   // Replace video with fallback image
            //   e.currentTarget.style.display = 'none';
            //   const img = document.createElement('img');
            //   img.src = loadingImg;
            //   img.alt = "Video failed to load";
            //   img.className = "w-full h-full object-cover";
            //   e.currentTarget.parentNode.appendChild(img);
            // }}
          >
            <source src={firstMedia.url} type="video/mp4" />
            {/* Fallback for unsupported video */}
            {/* <img src={loadingImg} alt="Video not supported" className="w-full h-full object-cover" /> */}
          </video>
          {/* Optional: Video loading indicator */}
          {/* <div className="video-loading-indicator" style={{ display: 'none' }}>
            <img src={loadingImg} alt="Loading video" className="w-full h-full object-cover" />
          </div> */}
        </div>
      )}

      <p className="text-xs sm:text-sm font-medium w-full overflow-x-auto scrollbar-hidden">
        {project.name} • {project.year}
      </p>
    </div>
  );
};

export default ProjectCard;