import React, { useState } from "react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    setLoading(true);
    setSubmitted(false);

    const form = e.target;
    const formData = new FormData(form);
    
    // Add the form-name to the formData
    formData.append("form-name", "contact");

    try {
      // For Netlify Forms, we need to send the data as URL encoded
      const encodedData = new URLSearchParams(formData).toString();
      
      // Submit to Netlify's form endpoint
      const response = await fetch("/", {
        method: "POST",
        headers: { 
          "Content-Type": "application/x-www-form-urlencoded" 
        },
        body: encodedData,
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      setSubmitted(true);
      setLoading(false);
      form.reset();
      
      // Auto-hide success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
      
    } catch (err) {
      console.error("Form submission error:", err);
      setError(true);
      setLoading(false);
    }
  };

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

        <form
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
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
              disabled={loading}
              className='bg-gray-300 p-4 border border-gray-300 hover:border-gray-400 focus:border-dark focus:outline-0 disabled:opacity-50'
            />

            <input
              type='email'
              name="email"
              placeholder='Email'
              required
              disabled={loading}
              className='bg-gray-300 p-4 border border-gray-300 hover:border-gray-400 focus:border-dark focus:outline-0 disabled:opacity-50'
            />

            <textarea
              name="message"
              placeholder='Drop Some Lines Here..'
              rows={6}
              required
              disabled={loading}
              className='bg-gray-300 p-4 border border-gray-300 hover:border-gray-400 focus:border-dark focus:outline-0 disabled:opacity-50'
            />

            <button 
              type='submit' 
              disabled={loading}
              className={`bg-dark text-light p-4 text-center cursor-pointer ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
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