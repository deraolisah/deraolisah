import { motion } from 'framer-motion';
import loadingImg from "../assets/loading.gif";

const ProjectCard = ({ project, openModal }) => {
  // Handle cases where project.media might be empty or undefined
  const firstMedia = project.media?.[0];

  // Animation variants for the card
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 200
      }
    },
    hover: {
      y: -3,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25
      }
    }
  };

  // If no media exists at all, show loading image
  if (!firstMedia || !firstMedia.url) {
    return (
      <motion.div 
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        className="flex flex-col items-start gap-1 overflow-hidden truncate whitespace-nowrap cursor-pointer" 
        onClick={() => openModal(project.id)}
      >
        <div className="relative w-full aspect-video bg-gray-200 border border-gray-300 flex items-center justify-center overflow-hidden">
          <motion.img 
            src={loadingImg} 
            alt="Loading" 
            className="w-full h-full object-cover aspect-video"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </div>
        <p className="text-xs sm:text-sm font-medium w-full overflow-x-auto scrollbar-hidden">
          {project.name} • {project.year}
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div 
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      className="flex flex-col items-start gap-1 overflow-hidden truncate whitespace-nowrap cursor-pointer" 
      onClick={() => openModal(project.id)}
    >
      {firstMedia.type === "img" ? (
        <motion.img 
          src={firstMedia.url || loadingImg} 
          alt={project.name}
          className="w-full h-fit bg-gray-200 border border-gray-300 aspect-video object-cover flex items-center justify-center" 
          loading="lazy"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          onError={(e) => {
            e.currentTarget.src = loadingImg;
            e.currentTarget.onerror = null;
            e.currentTarget.alt = "Image failed to load";
          }}
        />
      ) : (
        <div className="relative w-full aspect-video md:aspect-3/2 bg-gray-200 border border-gray-300 overflow-hidden">
          <motion.video 
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            autoPlay 
            loop 
            muted
          >
            <source src={firstMedia.url} type="video/mp4" />
          </motion.video>
        </div>
      )}

      <motion.p 
        className="text-sm font-medium w-full overflow-x-auto scrollbar-hidden"
        whileHover={{ x: 5 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {project.name} • {project.year}
      </motion.p>
    </motion.div>
  );
};

export default ProjectCard;