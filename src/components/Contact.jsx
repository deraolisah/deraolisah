import React, { useState } from "react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);



  // Submit Handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    setLoading(true);

    const form = e.target;
    const formData = new FormData(form);

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      });

      setSubmitted(true);
      setLoading(false);
      form.reset();
    } catch (err) {
      setError(true);
      setLoading(false);
    }
  };


  // Auto-hide success message after 5s
  useEffect(() => {
    if (submitted) {
      setTimeout(() => setSubmitted(false), 5000);
    }
  }, [submitted]);



  



  return (
    <section className='container py-10 md:py-18 flex flex-col' id="contact">
      


      <div className='grid grid-cols-1 md:grid-cols-2 gap-2 mt-8'>
        <div className='flex flex-col items-start'>
          <h1 className="font-semibold text-3xl md:text-[54px] lg:text-[60px] leading-tight tracking-tight mb-4 md:mb-6">
            Let’s work on
            <br/>
            your project together.
          </h1>
          <p>
            Like most Gen Z Techies in the wild, I can be easily spooked with phone calls, as they are strongly associated with one of our primal predators, the Telemarketerus Obnoscius.
          </p>
          
          <div className='mt-8 whitespace-normal'>
            Good old email is a safer bet, so just use the form. 

            <br/><br/>
            Or use &nbsp;<a href="https://wa.me/2347088530385/" target='_blank' className='font-bold underline hover:text-primary'>WhatsApp</a>, to reach me!
          </div>
        </div>

        <form
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          className="w-full h-full"
        >
          <input type="hidden" name="form-name" value="contact" />
          <input type="hidden" name="bot-field" />

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

            <button disabled={loading} type='submit' className='bg-dark text-light p-4 text-center cursor-pointer'>
              {loading ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>


        {submitted && (
          <p className="mt-4 text-green-600 font-medium">
            ✅ Message sent successfully! I’ll get back to you shortly.
          </p>
        )}

        {error && (
          <p className="mt-4 text-red-600 font-medium">
            ❌ Something went wrong. Please try again.
          </p>
        )}


      </div>
    </section>
  )
}

export default Contact;