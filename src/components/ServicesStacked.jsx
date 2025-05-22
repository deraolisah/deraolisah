// import React from 'react';
// import ServicesStacked from './ServicesStacked';


// const Services = () => {
//   return (
//     <>
//     <section className='w-full flex flex-col gap-4 items-start justify-center py-20' id='services'>
//       {/* <p className='md:text-[28px]/[48px] text-[19px]/8 text-dark-gray font-light'> Services and Prices <br/> </p> */}
//       <p className='md:text-[28px]/[48px] text-[19px]/8 font-light'> What do you need? <br/> </p>
     
//       <div className='w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6'>
//         <div className='w-full flex flex-col items-start justify-start gap-18 md:p-8 p-6 rounded-2xl border-1 border-primary/10 bg-light-gray hover:bg-primary/10 shadow-sm'>
//           <div className='flex flex-col gap-1'>
//             <span className='md:text-xl text-md flex items-center justify-between'> 
//               <h5 className='font-medium'> Landing Page </h5>
//               <small className='text-xs text-primary'> from $400 </small>
//             </span>
//             <small className='text-dark-gray'> One-page website that matches your business goal and is ready to convert visitors into leads. </small>
//           </div>
//           <div className="flex items-center flex-wrap gap-2 marker:text-primary text-gray text-xs">
//             <span className='bg-primary/8 px-4 py-1.5 rounded-full'> 1 week </span>
//             <span className='bg-primary/8 px-4 py-1.5 rounded-full'> Single Page (3-5 Sections) </span>
//             <span className='bg-primary/8 px-4 py-1.5 rounded-full'> Animations </span>
//             <span className='bg-primary/8 px-4 py-1.5 rounded-full'> Contact Form </span>
//             <span className='bg-primary/8 px-4 py-1.5 rounded-full'> External Links </span>
//             <span className='bg-primary/8 px-4 py-1.5 rounded-full'> Courses </span>
//             <span className='bg-primary/8 px-4 py-1.5 rounded-full'> Digital Products </span>
//             <span className='bg-primary/8 px-4 py-1.5 rounded-full'> Coming Soon </span>
//             <span className='bg-primary/8 px-4 py-1.5 rounded-full'> Referral </span>
//           </div>
//         </div>

//         {/* STANDARD WEBSITE */}
//         <div className='w-full flex flex-col items-start justify-start gap-18 md:p-8 p-6 rounded-2xl border-1 border-primary/10 bg-light-gray hover:bg-primary/8 shadow-sm'>
//           <div className='flex flex-col gap-1'>
//             <span className='md:text-xl text-md flex items-center justify-between'> 
//               <h5 className='font-medium'> Standard Website </h5>
//               <small className='text-xs text-primary'> from $800 </small>
//             </span>
//             <small className='text-dark-gray'> Multi-page website (up to 10) that reflects your brand, makes you look big, and boosts credibility. </small>
//           </div>
//           <div className="flex items-center flex-wrap gap-2 marker:text-primary text-gray text-xs">
//             <span className='bg-primary/8 px-4 py-1.5 rounded-full'> 2-4 weeks </span>
//             <span className='bg-primary/8 px-4 py-1.5 rounded-full'> 6-10 Pages</span>
//             <span className='bg-primary/8 px-4 py-1.5 rounded-full'> Blog </span>
//             <span className='bg-primary/8 px-4 py-1.5 rounded-full'> Business/Company </span>
//             <span className='bg-primary/8 px-4 py-1.5 rounded-full'> Personal/Portfolio </span>
//             <span className='bg-primary/8 px-4 py-1.5 rounded-full'> Nonprofit </span>
//             <span className='bg-primary/8 px-4 py-1.5 rounded-full'> Educational </span>
//             <span className='bg-primary/8 px-4 py-1.5 rounded-full'> Church </span>
//             <span className='bg-primary/8 px-4 py-1.5 rounded-full'> Schosol </span>
//             <span className='bg-primary/8 px-4 py-1.5 rounded-full'> Hospital </span>
//           </div>
//         </div>

//         {/* E-COMMERCE */}
//         <div className='w-full flex flex-col items-start justify-start gap-18 md:p-8 p-6 rounded-2xl border-1 border-primary/10 bg-light-gray hover:bg-primary/8 shadow-sm'>
//           <div className='flex flex-col gap-1'>
//             <span className='md:text-xl text-md flex items-center justify-between'> 
//               <h5 className='font-medium'> E-Commerce Website </h5>
//               <small className='text-xs text-primary'> from $1000 - $1300 </small>
//             </span>
//             <small className='text-dark-gray'> Online store that sells your products 24/7, accepts payments, and manages orders. </small>
//           </div>
//           <div className="flex items-center flex-wrap gap-2 marker:text-primary text-gray text-xs">
//             <span className='bg-primary/8 px-4 py-1.5 rounded-full'> 4-6 weeks </span>
//             <span className='bg-primary/8 px-4 py-1.5 rounded-full'> 10+ Pages</span>
//             <span className='bg-primary/8 px-4 py-1.5 rounded-full'> Admin Dashboard </span>
//             <span className='bg-primary/8 px-4 py-1.5 rounded-full'> Payment Gateways (Paystack, Paypal, Stripe) </span>
//             <span className='bg-primary/8 px-4 py-1.5 rounded-full'> Products, Orders, and Shipping Management </span>
//           </div>
//         </div>

//         {/* UI-UX DEISGN */}
//         <div className='w-full flex flex-col items-start justify-start gap-18 md:p-8 p-6 rounded-2xl border-1 border-primary/10 bg-light-gray hover:bg-primary/8 shadow-sm'>
//           <div className='flex flex-col gap-1'>
//             <span className='md:text-xl text-md flex items-center justify-between'> 
//               <h5 className='font-medium'> UI-UX Design </h5>
//               <small className='text-xs text-primary'> from $350 </small>
//             </span>
//             <small className='text-dark-gray'> Get a professional UI/UX design for your website, that makes your website user-friendly and visually appealing. </small>
//           </div>
//           <div className="flex items-center flex-wrap gap-2 marker:text-primary text-gray text-xs">
//             <span className='bg-primary/8 px-4 py-1.5 rounded-full'> 2 weeks+ </span>
//             <span className='bg-primary/8 px-4 py-1.5 rounded-full'> Wireframes </span>
//             <span className='bg-primary/8 px-4 py-1.5 rounded-full'> Prototyping </span>
//             <span className='bg-primary/8 px-4 py-1.5 rounded-full'> User Testing </span>
//           </div>
//         </div>

//         {/* GRAPHIC DESIGN */}
//         <div className='w-full flex flex-col items-start justify-start gap-18 md:p-8 p-6 rounded-2xl border-1 border-primary/10 bg-light-gray hover:bg-primary/8 shadow-sm'>
//           <div className='flex flex-col gap-1'>
//             <span className='md:text-xl text-md flex items-center justify-between'> 
//               <h5 className='font-medium'> Graphic Design </h5>
//               <small className='text-xs text-primary'> from $12.5/hour </small>
//             </span>
//             <small className='text-dark-gray'> Online store that sells your products 24/7, accepts payments, and manages orders </small>
//           </div>
//           <div className="flex items-center flex-wrap gap-2 marker:text-primary text-gray text-xs">
//             <span className='bg-primary/10 px-4 py-1.5 rounded-full'> 2-7 days </span>
//             <span className='bg-primary/10 px-4 py-1.5 rounded-full'> Branding (Logos, Stickers, Business Cards) </span>
//             <span className='bg-primary/10 px-4 py-1.5 rounded-full'> Social Media Posts (Flyers, Posters, Banner) </span>
//             <span className='bg-primary/10 px-4 py-1.5 rounded-full'> Covers (Books, Albums, Thumbnails) </span>
//           </div>
//         </div>

//         {/* TEMPLATES and SOURCE CODES */}
//         <div className='w-full flex flex-col items-start justify-start gap-18 md:p-8 p-6 rounded-2xl border-1 border-primary/10 bg-primary/10'>
//           <div className='flex flex-col gap-1'>
//             <span className='md:text-xl text-md flex items-center justify-between'>
//               <h5 className='font-medium'> Templates & Source Codes </h5>
//               {/* <small className='text-xs text-primary'> from $10 </small> */}
//             </span>
//             {/* GUMROAD */}
//             <small className='text-dark-gray'> Get instant access to my pre-made templates and source codes. </small>
//           </div>
//           <div className="flex items-center flex-wrap gap-2 marker:text-primary text-gray text-xs">
//             <span className='bg-primary/8 px-4 py-1.5 rounded-full'> free </span>
//             <span className='bg-primary/8 px-4 py-1.5 rounded-full'> Website Templates </span>
//             {/* <span className='bg-primary/8 px-4 py-1.5 rounded-full'> Mobile Templates </span> */}
//             <span className='bg-primary/8 px-4 py-1.5 rounded-full'> Source Codes </span>
//             <span className='bg-primary/8 px-4 py-1.5 rounded-full'> Design Files </span>
//             <span className='bg-primary/8 px-4 py-1.5 rounded-full'> Resources </span>
//             {/* <span className='bg-primary/8 px-4 py-1.5 rounded-full'> Web Apps </span> */}
//             {/* <span className='bg-primary/8 px-4 py-1.5 rounded-full'> Mobile Apps </span> */}
//             {/* <span className='bg-primary/8 px-4 py-1.5 rounded-full'> Desktop Apps </span> */}
//             <a href='https://deraolisah.gumroad.com/' target='_blank' className='bg-primary hover:bg-primary/90 w-full p-2.5 rounded-full text-center text-white mt-4 shadow-xl'> Get Templates </a>
//           </div>
//         </div>
//       </div>      
//     </section>


//     <ServicesStacked />

//     </>
//   )
// }

// export default Services;