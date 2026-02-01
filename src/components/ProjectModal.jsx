import { ArrowUpRight, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import loadingImg from "../assets/loading.gif";

const ProjectModal = ({ modalOpened, project, setModalOpened }) => {
  return (
    <div className={`fixed inset-0 z-100 bg-light p-4 w-full h-full transition-all duration-700 ${modalOpened ? "opacity-100 pointer-events-auto translate-y-0" : "opacity-0 pointer-events-none translate-y-8"}`}>
      <div className='flex flex-col gap-4 relative h-full overflow-y-auto scrollbar-hidden'>
        <div className='grid grid-cols-2 md:grid-cols-4 items-start gap-4 md:gap-2.5'>
          <div className='w-full col-span-2 md:col-span-1'>
            <h2 className='text-2xl md:text-4xl font-black leading-tight tracking-tighter line-clamp-2 uppercase'>
              {project.name}
            </h2>

            <Link to={project.link} target="_blank" className='py-2 flex items-center gap-1 w-fit text-primary'> 
              Live Preview 
              <ArrowUpRight size={16} className='text-primary' /> 
            </Link>
          </div>

          <div className='col-span-2'>
            <p className='whitespace-pre-line text-base font-medium'>{project.description}</p>
          </div>

          <div className='w-full col-span-2 md:col-span-1 text-dark/80 space-y-2 text-sm border-t border-dark/20 pt-4 md:pt-0 md:border-0'>
            {project?.role && (
              <p className='flex items-center gap-1'>
                <b> ROLE: </b>
                <span> {project.role} </span>
              </p>
            )}
            <p className='w-full flex items-center gap-1'> 
              <b> TYPE: </b>
              <span> {project.category} Project </span>
            </p>
            <p className='flex items-center gap-1'>
              <b> DATE: </b>
              <span> {project.year} </span>
            </p>
            <p className='w-full flex items-center flex-wrap gap-1.5'>
              <b className="flex"> TOOLS: </b>
              {project.stack?.map((item, index) => (
                <span key={index}> {item} • </span>
              ))}
            </p>
          </div>
        </div>


        {/* <div className='w-full md:max-w-1/2 max-h-68 md:min-h-full bg-gray-200 border border-gray-300 flex items-start justify-center'>
          {project.mediaType === "img" ? (
            <img src={project.imageUrl} alt='' className='w-full mx-auto h-fit aspect-video md:aspect-square object-cover' />
          ) : (
            <video className='w-full mx-auto h-fit aspect-video md:aspect-square object-cover' autoPlay loop muted>
              <source src={project.imageUrl} type="video/mp4" />
            </video>
          )}
        </div> */}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-10">
          {project.media.map((item, index) => (
            <div 
              key={index} 
              className="w-full bg-gray-200 border border-gray-300 flex items-start justify-center"
            >
              {item.type === "img" ? (
                <img src={item?.url || loadingImg} className="w-full h-fit aspect-video object-cover" />
                // alt={`media-${index}`}
              ) : (
                <video className="w-full h-fit aspect-video object-cover" autoPlay loop muted>
                  <source src={item.url} type="video/mp4" />
                </video>
              )}
            </div>
          ))}
        </div>

      </div>

      <button type='button' className='absolute top-5 right-5 cursor-pointer p-1 bg-gray-200 border border-gray-300' onClick={() => setModalOpened(false)} >
        <X size={20} strokeWidth={1.5}  />
      </button>
    </div>
  )
}

export default ProjectModal;