import { ArrowUpRight, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProjectModal = ({ project, setModalOpened }) => {
  return (
    <div className='fixed inset-0 z-100 bg-light p-4 w-full h-full'>
      <div className='flex flex-col md:flex-row gap-4 relative h-full overflow-y-auto scrollbar-hidden'>

        <div className='sticky md:top-2 w-full md:max-w-1/2 max-h-68 md:min-h-full bg-gray-200 border border-gray-300 flex items-start justify-center'>
          <img src={project.imageUrl} alt='' className='w-full mx-auto h-fit aspect-video md:aspect-square object-cover' />
        </div>

        <div className='relative h-full space-y-2'>
          <h2 className='text-3xl md:text-6xl font-bold leading-tight tracking-tighter'>
            {project.name}
          </h2>

          <Link to={project.link} target="_blank" className='py-2 flex items-center gap-1 w-fit text-dark/80'> 
            Live Preview 
            <ArrowUpRight size={16} className='text-dark/60' /> 
          </Link>

          <p className='whitespace-pre-line pb-2 text-xl font-medium'>{project.description}</p>


          <p className='text-dark/80'> {project.year} • {project.category} Project </p>
        </div>
      </div>

      <button type='button' className='absolute top-5 right-5 cursor-pointer p-1 bg-gray-200 border border-gray-300' onClick={() => setModalOpened(false)} >
        <X size={20} strokeWidth={1.5}  />
      </button>
    </div>
  )
}

export default ProjectModal;