import { motion } from 'framer-motion';
import loadingImg from "../assets/loading.gif";
import { Image, Film } from 'lucide-react';

const ProjectListItem = ({ project, openModal }) => {
  const firstMedia = project.media?.[0];

  // Animation variants for the list item
  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 200
      }
    },
    hover: {
      x: 5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25
      }
    }
  };

  // Determine media type icon
  const MediaIcon = firstMedia?.type === "img" ? Image : Film;

  return (
    <motion.div
      variants={itemVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      className="flex items-center gap-4 p-3 bg-white border border-gray-200 rounded-lg cursor-pointer hover:border-gray-400 transition-colors duration-200"
      onClick={() => openModal(project.id)}
    >
      {/* Thumbnail */}
      <div className="relative w-20 h-20 flex-shrink-0 bg-gray-100 border border-gray-200 rounded-md overflow-hidden">
        {firstMedia?.url ? (
          firstMedia.type === "img" ? (
            <img 
              src={firstMedia.url} 
              alt={project.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src = loadingImg;
              }}
            />
          ) : (
            <video 
              className="w-full h-full object-cover"
              autoPlay 
              loop 
              muted
              playsInline
            >
              <source src={firstMedia.url} type="video/mp4" />
            </video>
          )
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <MediaIcon size={24} className="text-gray-400" />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <h3 className="font-medium text-base truncate">{project.name}</h3>
          <span className="text-xs text-gray-500 flex-shrink-0">• {project.year}</span>
        </div>
        
        <p className="text-sm text-gray-600 line-clamp-1">
          {project.description || `${project.category} Project`}
        </p>

        {/* Stack tags */}
        {project.stack && project.stack.length > 0 && (
          <div className="flex items-center gap-1.5 mt-2">
            {project.stack.slice(0, 3).map((tech, index) => (
              <span 
                key={index} 
                className="text-xs px-2 py-0.5 bg-gray-100 rounded-full text-gray-600"
              >
                {tech}
              </span>
            ))}
            {project.stack.length > 3 && (
              <span className="text-xs text-gray-400">
                +{project.stack.length - 3}
              </span>
            )}
          </div>
        )}
      </div>

      {/* Arrow indicator */}
      <motion.div 
        className="flex-shrink-0 text-gray-400"
        whileHover={{ x: 3 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
        </svg>
      </motion.div>
    </motion.div>
  );
};

export default ProjectListItem;