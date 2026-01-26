import React from 'react'

const Contact = () => {
  return (
    <section className='container py-10 md:py-18 flex flex-col' id="contact">
      <h1 className="font-semibold text-3xl md:text-[68px] leading-tight tracking-tight">
        Let’s work on
        <br/>
        your project together.
      </h1>


      <div className='grid grid-cols-1 md:grid-cols-2 gap-2 mt-8'>
        <div className='flex flex-col items-start'>
          <p>
            Like most Gen Z Techies in the wild, I can be easily spooked with phone calls, as they are strongly associated with one of our primal predators, the Telemarketerus Obnoscius.
          </p>
          
          <div className='mt-8 whitespace-normal'>
            Good old email is a safer bet, so just use the form. 

            <br/><br/>
            Or use
            &nbsp;<a href="https://wa.me/2347088530385/" target='_blank' className='font-bold underline hover:text-primary'>WhatsApp</a>,
            &nbsp;to reach me!
          </div>
        </div>

        <form className='w-full h-full' action="">
          <div className='flex flex-col gap-2'>
            <input 
              type='text' 
              placeholder='Name' 
              className='bg-gray-300 p-4 border border-gray-300 hover:border-gray-800 focus:outline-none' 
            />
            <input 
              type='email' 
              placeholder='Email' 
              className='bg-gray-300 p-4 border border-gray-300 hover:border-gray-800 focus:outline-none' 
            />
            <textarea 
              placeholder='Drop Some Lines Here' 
              rows={6} 
              className='bg-gray-300 p-4 border border-gray-300 hover:border-gray-800 focus:outline-none'>

            </textarea>
            <button 
              type='submit'
              className='bg-dark text-light p-4 text-center cursor-pointer'
            > 
              Send Message 
              </button>
          </div>

        </form>
      </div>
    </section>
  )
}

export default Contact;