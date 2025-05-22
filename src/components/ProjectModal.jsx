import React, { useState, useRef, useEffect } from 'react';
import { Button, Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
import { BsX, BsArrowUpRight, BsGithub } from "react-icons/bs";

const ProjectModal = ({ project, isOpen, onClose }) => {
  // const [activeIndex, setActiveIndex] = useState(0);
  // const imageContainerRef = useRef(null);

  // const handlePaginationClick = (index) => {
  //   setActiveIndex(index);
  //   if (imageContainerRef.current) {
      // const imageWidth = imageContainerRef.current.children[index].offsetWidth;
  //     imageContainerRef.current.scrollLeft = index * imageWidth;
  //   }
  // };

  // useEffect(() => {
  //   if (imageContainerRef.current) {
  //     const imageWidth = imageContainerRef.current.children[activeIndex].offsetWidth;
  //     imageContainerRef.current.scrollLeft = activeIndex * imageWidth;
  //   }
  // }, [activeIndex]);

  // const handleImageScroll = () => {
  //   if (imageContainerRef.current) {
  //     const imageWidth = imageContainerRef.current.children[0].offsetWidth;
  //     const scrollPosition = imageContainerRef.current.scrollLeft;
  //     const newIndex = Math.round(scrollPosition / imageWidth);
  //     setActiveIndex(newIndex);
  //   }
  // };
  
  return (
    <>
      <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={onClose} __demoMode>
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500/50 backdrop-blur-lg transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in !cursor-pointer"
        />
        <div className="fixed inset-0 z-10 w-screen md:py-8 p-0 overflow-y-auto">
          <div className="flex h-full w-full max-w-[875px] mx-auto md:items-center items-start justify-center">
          <button 
              className="absolute cursor-pointer top-4 z-50 left-5 text-2xl md:text-3xl hover:text-gray-900 bg-light-gray rounded-full transition-all duration-400 shadow-xl"
              onClick={onClose}>
              {/* &times; */}
              <BsX />
            </button>
            <DialogPanel transition className="w-full h-full md:h-fit overflow-hidden md:rounded-2xl relative backdrop-blur-none duration-400 ease-out data-[closed]:transform-[scale(80%)] data-[closed]:opacity-0">
              {project && (
                <div className='h-full flex flex-col md:flex-row'>
                  <div 
                    // ref={imageContainerRef}
                    className='overflow-x-auto w-full md:max-w-1/2 flex flex-col items-center justify-center'
                    // onScroll={handleImageScroll}
                  >
                    <div className='flex items-center justify-start'>
                    {/* If images are more than 1, then set the width to be w-90, else it should be the full width. */}
                    {project.image.map((image, index) => (
                      <img 
                        key={index} 
                        src={image} 
                        alt={project.title} 
                        // className={`inline-block ${project.image.length > 1 ? 'w-95' : 'w-full'} ${activeIndex === index ? 'opacity-100' : ''}`}
                        className={`max-w-80 max-h-80 ${project.image.length > 1 ? '' : 'max-w-full max-h-full'}`}
                      />
                    ))}
                    </div>

                    {project.image.length > 1 && (
                    <div className='sticky bg-light-gray left-0 bottom-0 z-20 py-1 w-full overflow-x-auto'>
                      <div className='w-fit mx-auto h-full bg-gray/20 backdrop-blur-2xl rounded-full p-1 flex items-center justify-center gap-2.5'>
                        <span className='w-2.5 h-2.5 bg-primary cursor-pointer rounded-full'></span>
                        <span className='w-2.5 h-2.5 bg-gray/40 cursor-pointer rounded-full'></span>
                        <span className='w-2.5 h-2.5 bg-gray/40 cursor-pointer rounded-full'></span>
                      </div>
                    </div>
                    )}

                    {/* <div className="flex justify-center gap-1.5 p-1 absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 rounded-full backdrop-blur-2xl bg-gray-500/75 w-fit mx-auto">
                      {project.image.map((image, index) => (
                        <button 
                          key={index} 
                          className={`w-2 h-2 rounded-full cursor-pointer ${activeIndex === index ? 'bg-primary' : 'bg-gray-300'}`}
                          onClick={() => handlePaginationClick(index)}
                        />
                      ))}
                    </div> */}

                  </div>

                  <div className='bg-light-gray flex-1 flex flex-col justify-between gap-4 p-4'>
                    <DialogTitle as="h3" className="text-base font-medium"> {project.title} 
                      {/* {project.date}  */}
                      </DialogTitle>
                    <hr className='flex' />

                    <div className='h-full flex items-end'>
                      <button className='flex w-fit mx-auto items-center justify-center cursor-pointer text-white font-semibold px-6 py-2 bg-primary rounded-full' onClick={onClose}> close </button>
                    </div>
                    {/* <p className="text-sm"> {project.description} </p> */}
                  

                    

                    {project.link && (
                      <div className='flex items-center justify-start gap-x-4'>
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-primary text-sm w-fit py-1.5 px-2 rounded-md bg-primary/20 hover:text-primary flex items-center gap-2">
                        Live Site <BsArrowUpRight className='text-xs' />
                      </a>
                      <BsGithub className='!text-2xl text-gray' />
                      </div>
                    )}
                  </div>
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