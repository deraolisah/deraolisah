import { useState } from "react";
import { ArrowUpRight, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import loadingImg from "../assets/loading.gif";

const MediaItem = ({ item }) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  if (!item?.type || !item?.url) {
    return (
      <img src={loadingImg} alt="Loading" className="w-full h-fit aspect-video object-cover" />
    );
  }

  if (item.type === "img") {
    return (
      <div className="relative w-full">
        {!loaded && !error && (
          <img src={loadingImg} alt="Loading" className="absolute inset-0 w-full h-full object-cover" />
        )}

        <img 
          src={error ? loadingImg : item.url}
          alt=""
          className="w-full h-fit aspect-video object-cover"
          onLoad={() => setLoaded(true)}
          onError={() => {
            setError(true);
            setLoaded(true);
          }}
        />
      </div>
    );
  }

  return (
    <video
      className="w-full h-fit aspect-video object-cover"
      autoPlay
      loop
      muted
      onError={(e) => {
        e.currentTarget.poster = loadingImg;
      }}
    >
      <source src={item.url} type="video/mp4" />
    </video>
  );
};

// Animation variants for the modal backdrop
const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

// Animation variants for the modal content
const modalVariants = {
  hidden: { 
    opacity: 0,
    y: 50,
    scale: 0.95
  },
  visible: { 
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      damping: 25,
      stiffness: 300,
      duration: 0.5
    }
  },
  exit: { 
    opacity: 0,
    y: 50,
    scale: 0.95,
    transition: {
      duration: 0.3
    }
  }
};

// Animation variants for the content elements (staggered)
const contentVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 200
    }
  }
};

const ProjectModal = ({ modalOpened, project, setModalOpened }) => {
  return (
    <AnimatePresence mode="wait">
      {modalOpened && (
        <motion.div
          key="modal-backdrop"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="fixed inset-0 z-100 bg-light/90 backdrop-blur-sm p-4 w-full h-full overflow-y-auto"
        >
          <motion.div
            key="modal-content"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative min-h-full"
          >
            <div className='flex flex-col gap-4 relative h-full'>
              <motion.div 
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                className='grid grid-cols-2 md:grid-cols-4 items-start gap-4 md:gap-2.5'
              >
                <motion.div variants={itemVariants} className='w-full col-span-2 md:col-span-1'>
                  <h2 className='text-2xl md:text-4xl font-black leading-tight tracking-tighter line-clamp-2 uppercase'>
                    {project.name}
                  </h2>

                  <Link to={project.link} target="_blank" className='py-2 flex items-center gap-1 w-fit text-primary hover:gap-2 transition-all duration-300'> 
                    Live Preview 
                    <ArrowUpRight size={16} className='text-primary' /> 
                  </Link>
                </motion.div>

                <motion.div variants={itemVariants} className='col-span-2'>
                  <p className='whitespace-pre-line text-base font-medium'>{project.description}</p>
                </motion.div>

                <motion.div variants={itemVariants} className='w-full col-span-2 md:col-span-1 text-dark/80 space-y-2 text-sm border-t border-dark/20 pt-4 md:pt-0 md:border-0'>
                  {project?.role && (
                    <motion.p variants={itemVariants} className='flex items-center gap-1'>
                      <b> ROLE: </b>
                      <span> {project.role} </span>
                    </motion.p>
                  )}
                  <motion.p variants={itemVariants} className='w-full flex items-center gap-1'> 
                    <b> TYPE: </b>
                    <span> {project.category} Project </span>
                  </motion.p>
                  <motion.p variants={itemVariants} className='flex items-center gap-1'>
                    <b> DATE: </b>
                    <span> {project.year} </span>
                  </motion.p>
                  <motion.p variants={itemVariants} className='w-full flex items-center flex-wrap gap-1.5'>
                    <b className="flex"> TOOLS: </b>
                    {project.stack?.map((item, index) => (
                      <span key={index}> {item} • </span>
                    ))}
                  </motion.p>
                </motion.div>
              </motion.div>

              <motion.div 
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-10"
              >
                {project.media.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    custom={index}
                    className="w-full bg-gray-200 border border-gray-300 flex items-start justify-center overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <MediaItem item={item} />
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <motion.button 
              type='button' 
              className='absolute top-5 right-5 cursor-pointer p-1 bg-gray-200 border border-gray-300 hover:bg-gray-300 transition-colors duration-300 rounded-full'
              onClick={() => setModalOpened(false)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ delay: 0.3, type: "spring" }}
            >
              <X size={20} strokeWidth={1.5} />
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ProjectModal;