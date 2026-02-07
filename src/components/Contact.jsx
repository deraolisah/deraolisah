import React, { useState } from "react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  // Correct way to access env variable in Vite
  const formENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    setLoading(true);
    setSubmitted(false);

    const form = e.target;
    const formData = new FormData(form);

    // Check honeypot field
    const honeypot = formData.get('honeypot');
    if (honeypot) {
      // Bot detected - pretend it succeeded
      setSubmitted(true);
      setLoading(false);
      form.reset();
      setTimeout(() => setSubmitted(false), 5000);
      return;
    }
    
    // Convert FormData to plain object
    const data = Object.fromEntries(formData.entries());
    
    try {
      // Validate endpoint exists
      if (!formENDPOINT) {
        throw new Error("Form endpoint not configured");
      }

      const response = await fetch(formENDPOINT, {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          ...data,
          _subject: `New Message from ${data.name}`,
          _replyto: data.email,
          // Add timestamp for tracking
          _date: new Date().toISOString(),
        })
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitted(true);
        setLoading(false);
        form.reset();
        
        // Auto-hide success message after 5 seconds
        setTimeout(() => {
          setSubmitted(false);
        }, 5000);
      } else {
        // Log error details for debugging
        console.error("Formspree error:", result);
        throw new Error(result.error || "Form submission failed");
      }
      
    } catch (err) {
      console.error("Form submission error:", err);
      setError(true);
      setLoading(false);
      
      // Auto-hide error message after 5 seconds
      setTimeout(() => {
        setError(false);
      }, 8000);
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
          onSubmit={handleSubmit}
          className="w-full h-full"
          noValidate // Disable browser validation for better UX
        >
          {/* Honeypot field for spam protection */}
          <div className="hidden">
            <label htmlFor="honeypot">
              Leave this empty if you're human:
              <input 
                type="text" 
                id="honeypot" 
                name="honeypot" 
                tabIndex="-1" 
                autoComplete="off" 
                defaultValue="" 
              />
            </label>
          </div>

          <div className='flex flex-col gap-2'>
            <input
              type='text'
              name="name"
              placeholder='Name'
              required
              disabled={loading}
              className='bg-gray-300 p-4 border border-gray-300 hover:border-gray-400 focus:border-dark focus:outline-0 disabled:opacity-50 transition-colors duration-200'
              minLength={2}
              maxLength={100}
            />

            <input
              type='email'
              name="email"
              placeholder='Email'
              required
              disabled={loading}
              className='bg-gray-300 p-4 border border-gray-300 hover:border-gray-400 focus:border-dark focus:outline-0 disabled:opacity-50 transition-colors duration-200'
              pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
              title="Please enter a valid email address"
            />

            <textarea
              name="message"
              placeholder='Drop Some Lines Here..'
              rows={6}
              required
              disabled={loading}
              className='bg-gray-300 p-4 border border-gray-300 hover:border-gray-400 focus:border-dark focus:outline-0 disabled:opacity-50 transition-colors duration-200 resize-none'
              minLength={10}
              maxLength={2000}
            />

            <button 
              type='submit' 
              disabled={loading}
              className={`bg-dark text-light p-4 text-center cursor-pointer transition-opacity duration-200 ${loading ? 'opacity-70 cursor-not-allowed' : 'hover:opacity-90'}`}
              aria-label={loading ? "Sending message" : "Send message"}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </div>
      <div>

      </div>

      <div>
        {submitted && (
          <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded animate-fade-in">
            ✅ Message sent successfully! I'll get back to you shortly.
          </div>
        )}

        {error && (
          <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded animate-fade-in">
            ❌ Something went wrong. Please try again or email me directly 
            <a href="mailto:deraolisah@gmail.com" target="_blank"> deraolisah@gmail.com. </a>
          </div>
        )}
      </div>
    </section>
  );
}

export default Contact;