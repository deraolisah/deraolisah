import { useState } from "react";
import { ArrowUpRight, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import loadingImg from "../assets/loading.gif";

const MediaItem = ({ item, onClick }) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  if (!item?.type || !item?.url) {
    return (
      <img src={loadingImg} alt="Loading" className="w-full h-fit aspect-video object-cover" />
    );
  }

  if (item.type === "img") {
    return (
      <div className="relative w-full cursor-pointer" onClick={() => onClick(item)}>
        {!loaded && !error && (
          <img src={loadingImg} alt="Loading" className="absolute inset-0 w-full h-full object-cover" />
        )}

        <img 
          src={error ? loadingImg : item.url}
          alt=""
          draggable="false"
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
      className="w-full h-fit aspect-video object-cover cursor-pointer"
      autoPlay
      loop
      muted
      onClick={() => onClick(item)}
      onError={(e) => {
        e.currentTarget.poster = loadingImg;
      }}
    >
      <source src={item.url} type="video/mp4" />
    </video>
  );
};

// Lightbox component
const Lightbox = ({ items, currentIndex, onClose, onNext, onPrev }) => {
  const currentItem = items[currentIndex];
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-200 bg-black/95 backdrop-blur-lg flex items-center justify-center"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors duration-300"
      >
        <X size={24} className="text-white" />
      </button>

      {/* Navigation buttons */}
      {items.length > 1 && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            className="absolute left-4 z-10 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors duration-300"
          >
            <ChevronLeft size={32} className="text-white" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            className="absolute right-4 z-10 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors duration-300"
          >
            <ChevronRight size={32} className="text-white" />
          </button>
        </>
      )}

      {/* Counter */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 px-3 py-1 rounded-full text-white text-sm">
        {currentIndex + 1} / {items.length}
      </div>

      {/* Content */}
      <div 
        className="max-w-[90vw] max-h-[90vh] flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        {currentItem.type === "img" ? (
          <motion.img
            key={currentIndex}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 20 }}
            src={currentItem.url}
            alt=""
            draggable="false"
            className="max-w-[90vw] max-h-[90vh] object-contain"
          />
        ) : (
          <motion.video
            key={currentIndex}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 20 }}
            className="max-w-[90vw] max-h-[90vh] object-contain"
            controls
            autoPlay
            draggable="false"
            onLoadedData={() => setVideoLoaded(true)}
          >
            <source src={currentItem.url} type="video/mp4" />
          </motion.video>
        )}
      </div>
    </motion.div>
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
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const handleMediaClick = (clickedItem) => {
    const index = project.media.findIndex(item => item.url === clickedItem.url);
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const handleNext = () => {
    setLightboxIndex((prev) => (prev + 1) % project.media.length);
  };

  const handlePrev = () => {
    setLightboxIndex((prev) => (prev - 1 + project.media.length) % project.media.length);
  };

  return (
    <>
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
                    <h2 className='w-full text-2xl md:text-4xl font-black leading-tight tracking-tighter line-clamp-2 uppercase mb-2'>
                      {project.name}
                    </h2>

                    <Link to={project.link} target="_blank" className='py-2 px-3 flex items-center gap-1 w-fit text-white hover:gap-2 transition-all duration-300 bg-primary'> 
                      Live Preview 
                      <ArrowUpRight size={16} className='text-white' /> 
                    </Link>
                  </motion.div>

                  <motion.div variants={itemVariants} className='col-span-2'>
                    <p className='whitespace-pre-line text-base font-normal'>{project.description}</p>
                  </motion.div>

                  <motion.div variants={itemVariants} className='w-full col-span-2 md:col-span-1 text-dark/80 space-y-2 text-sm border-t border-dark/20 pt-4 md:pt-0 md:border-0'>
                    {project?.role && (
                      <motion.p variants={itemVariants} className='flex items-center gap-1'>
                        <b className="font-semibold"> ROLE: </b>
                        <span> {project.role} </span>
                      </motion.p>
                    )}
                    <motion.p variants={itemVariants} className='w-full flex items-center gap-1'> 
                      <b className="font-semibold"> TYPE: </b>
                      <span> {project.category} Project </span>
                    </motion.p>
                    <motion.p variants={itemVariants} className='flex items-center gap-1'>
                      <b className="font-semibold"> DATE: </b>
                      <span> {project.year} </span>
                    </motion.p>
                    <motion.p variants={itemVariants} className='w-full flex items-center flex-wrap gap-1.5'>
                      <b className="font-semibold"> STACK: </b>
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
                      <MediaItem item={item} onClick={handleMediaClick} />
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              <motion.button 
                type='button' 
                className='absolute top-2.5 right-2.5 cursor-pointer p-1 bg-gray-200 border border-gray-300 hover:bg-gray-300 transition-colors duration-300 rounded-full'
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

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <Lightbox
            items={project.media}
            currentIndex={lightboxIndex}
            onClose={() => setLightboxOpen(false)}
            onNext={handleNext}
            onPrev={handlePrev}
          />
        )}
      </AnimatePresence>
    </>
  )
}

export default ProjectModal;