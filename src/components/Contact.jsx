import React, { useState } from "react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    setError(false);
    setLoading(true);
    
    // Let Netlify handle the submission automatically
    // The form will submit to Netlify's endpoint
    // We'll use setTimeout to show success state (Netlify redirects to thank you page)
    
    // For a SPA, you might want to prevent default and handle differently
    // But for Netlify Forms, you can let it submit normally
  };

  // For Netlify Forms in a React SPA, you have 2 options:

  return (
    <section className='container py-10 md:py-18 flex flex-col' id="contact">
      <div className='grid grid-cols-1 md:grid-cols-2 gap-2 mt-8'>
        <div className='flex flex-col items-start'>
          <h1 className="font-semibold text-3xl md:text-[54px] lg:text-[60px] leading-tight tracking-tight mb-4 md:mb-6">
            Let's work on
            <br/>
            your project together.
          </h1>
          <p>
            Like most Gen Z Techies in the wild, I can be easily spooked with phone calls, as they are strongly associated with one of our primal predators, the Telemarketerus Obnoscius.
          </p>
          
          <div className='mt-8 whitespace-normal'>
            Good old email is a safer bet, so just use the form. 
            <br/><br/>
            Or use &nbsp;<a href="https://wa.me/2347088530385/" target='_blank' rel="noopener noreferrer" className='font-bold underline hover:text-primary'>WhatsApp</a>, to reach me!
          </div>
        </div>

        {/* OPTION 1: Standard Netlify Form (redirects to thank you page) */}
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          action="/thank-you"  // Netlify will redirect here after submission
          className="w-full h-full"
        >
          <input type="hidden" name="form-name" value="contact" />
          <p className="hidden">
            <label>
              Don't fill this out if you're human: <input name="bot-field" />
            </label>
          </p>

          <div className='flex flex-col gap-2'>
            <input
              type='text'
              name="name"
              placeholder='Name'
              required
              className='bg-gray-300 p-4 border border-gray-300 hover:border-gray-400 focus:border-dark focus:outline-0'
            />

            <input
              type='email'
              name="email"
              placeholder='Email'
              required
              className='bg-gray-300 p-4 border border-gray-300 hover:border-gray-400 focus:border-dark focus:outline-0'
            />

            <textarea
              name="message"
              placeholder='Drop Some Lines Here..'
              rows={6}
              required
              className='bg-gray-300 p-4 border border-gray-300 hover:border-gray-400 focus:border-dark focus:outline-0'
            />

            <button 
              type='submit' 
              className='bg-dark text-light p-4 text-center cursor-pointer'
            >
              Send Message
            </button>
          </div>
        </form>

        {/* OPTION 2: For SPA without redirect (with JavaScript handling) */}
        {/* 
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={async (e) => {
            e.preventDefault();
            setLoading(true);
            setError(false);
            
            const form = e.target;
            const formData = new FormData(form);
            
            try {
              // Encode the form data
              const encodedData = new URLSearchParams(formData).toString();
              
              // Submit to Netlify's form endpoint
              await fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: encodedData,
              });
              
              setSubmitted(true);
              setLoading(false);
              form.reset();
            } catch (err) {
              setError(true);
              setLoading(false);
            }
          }}
          className="w-full h-full"
        >
          {/* Same form fields as above * /}
        </form>
        */}
      </div>

      {submitted && (
        <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
          ✅ Message sent successfully! I'll get back to you shortly.
        </div>
      )}

      {error && (
        <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
          ❌ Something went wrong. Please try again.
        </div>
      )}
    </section>
  );
}

export default Contact;