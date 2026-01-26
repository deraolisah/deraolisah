import React from 'react'

const Contact = () => {
  return (
    <section className='container py-10 md:py-18 flex flex-col' id="contact">
      <h1 className="font-semibold text-3xl md:text-[68px] leading-tight tracking-tight">
        Let’s work on your
        <br/>
        project together.
      </h1>


      <div className='grid grid-cols-1 md:grid-cols-2 gap-2 mt-8'>
        <div className='flex flex-col items-start'>
          <p>
            Like most Gen Z Techies in the wild, I can be easily spooked with phone calls, as they are strongly associated with one of our primal predators, the Telemarketerus obnoscius.
          </p>
          
          <div className='mt-8 whitespace-normal'>
            Good old email is a safer bet, so just use the form. 

            <br/><br/>
            Or use
            &nbsp;<a href="https://instagram.com/deraolisah/" target='_blank' className='font-bold underline'>Insta</a>,
            &nbsp;<a href="https://wa.me/2347088530385/" target='_blank' className='font-bold underline'>WhatsApp</a>, or
            &nbsp;<a href="https:/x.com/deraolisah/" target='_blank' className='font-bold underline'>X</a>
            &nbsp;to reach me!
          </div>
        </div>

        <form className=' bg-gray-200 w-full h-full'>
          <div className=''>
            <input type='text'  />

          </div>

        </form>
      </div>
    </section>
  )
}

export default Contact;