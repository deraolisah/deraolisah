import React, { useState, useRef, useEffect } from 'react';
import { Button, Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
import { BsX, BsArrowUpRight, BsGithub } from "react-icons/bs";

const ProjectModal = ({ project, isOpen, onClose }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const imageContainerRef = useRef(null);

  const handlePaginationClick = (index) => {
    setActiveIndex(index);
    if (imageContainerRef.current) {
      const imageWidth = imageContainerRef.current.children[index].offsetWidth;
      imageContainerRef.current.scrollLeft = index * imageWidth;
    }
  };

  useEffect(() => {
    if (imageContainerRef.current) {
      const imageWidth = imageContainerRef.current.children[activeIndex].offsetWidth;
      imageContainerRef.current.scrollLeft = activeIndex * imageWidth;
    }
  }, [activeIndex]);

  const handleImageScroll = () => {
    if (imageContainerRef.current) {
      const imageWidth = imageContainerRef.current.children[0].offsetWidth;
      const scrollPosition = imageContainerRef.current.scrollLeft;
      const newIndex = Math.round(scrollPosition / imageWidth);
      setActiveIndex(newIndex);
    }
  };
  
  return (
    <>
      <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={onClose} __demoMode>
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500/75 backdrop-blur-2xl transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in !cursor-pointer"
        />
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 pb-0">
            <DialogPanel transition className="w-full max-w-md relative rounded-xl bg-light-gray p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0">
              <button 
                className="absolute top-4 z-50 right-4 text-3xl hover:text-gray-900"
                onClick={onClose}>
                {/* &times; */}
                <BsX />
              </button>
              {project && (
                <div className='flex flex-col gap-3'>
                  <DialogTitle as="h3" className="text-base -my-1 p-0 font-medium"> {project.title} | {project.date} </DialogTitle>
                  <p className="text-sm"> {project.description} </p>
                  <div 
                    ref={imageContainerRef}
                    className='overflow-x-auto whitespace-nowrap scrollbar-hide snap-x snap-mandatory flex items-center gap-3 relative'
                    onScroll={handleImageScroll}
                  >
                    {/* If images are more than 1, then set the width to be w-90, else it should be the full width. */}
                    {project.image.map((image, index) => (
                      <img 
                        key={index} 
                        src={image} 
                        alt={project.title} 
                        className={`inline-block rounded-2xl border-1 border-primary/20 ${project.image.length > 1 ? 'w-95' : 'w-full'} ${activeIndex === index ? 'opacity-100' : 'opacity-50'}`}
                      />
                    ))}
                  </div>

                  <div className="flex justify-center gap-1.5 p-1 absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 rounded-full backdrop-blur-2xl bg-gray-500/75 w-fit mx-auto">
                    {project.image.map((image, index) => (
                      <button 
                        key={index} 
                        className={`w-2 h-2 rounded-full cursor-pointer ${activeIndex === index ? 'bg-primary' : 'bg-gray-300'}`}
                        onClick={() => handlePaginationClick(index)}
                      />
                    ))}
                  </div>

                  {project.link && (
                    <div className='flex items-center justify-between gap-x-4'>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-primary text-sm w-fit py-1.5 px-2 rounded-md bg-primary/20 hover:text-primary flex items-center gap-2">
                      Live Site <BsArrowUpRight className='text-xs' />
                    </a>
                    <BsGithub className='!text-2xl text-gray' />
                    </div>
                  )}
                </div>
              )}
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  )
}


export default ProjectModal;