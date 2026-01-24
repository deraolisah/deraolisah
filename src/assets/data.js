import MecoClub from "../assets/mecoclub.gif";
import UrbanScope from "../assets/qwerty.mp4";
import DelightWedsFredrick from "../assets/DelightWedsFredrick.png";  
import Mosalak from "../assets/Mosalak.png";
import YoleCouriers from "../assets/YoleCouriers.png";
import Corty from "../assets/Corty.png";
import Amara from "../assets/Amara.png";
import Chris from "../assets/Chris.png";
import Marvel from "../assets/Marvel.png";
import Swizz from "../assets/Swizz.png";


export const projects = [
  { 
    id: 1, 
    name: "Meco Club", 
    year: "2025", 
    category: "Web", 
    link: "https://mecoclub.netlify.app/",
    media: [
      { type: "img", url: MecoClub },
      { type: "img", url: "https://images.squarespace-cdn.com/content/v1/5de150a7f708ae5ab34c13ee/476066f1-a572-4556-ab22-439e9bf7a644/Precomposizione+1.gif?format=500w" },
      { type: "img", url: "https://images.squarespace-cdn.com/content/v1/5de150a7f708ae5ab34c13ee/1637238516875-RM5BHZ62RUAKHD9O60MG/Riccardo-Agostinelli---Neologia-v2.gif?format=500w" },
      { type: "", url: "" },
    ],
    description: "A modern, responsive website for Meco Club, a UK-based Record Label managing mutiple Artists. \n\nThe site features an event calendar, menu showcase, and reservation system to enhance user engagement and streamline bookings. \n\nBuilt with React and Tailwind CSS for a sleek, user-friendly experience.",
    stack: [ "React.js", "TailwindCSS", "GSAP" ],
  },
  { 
    id: 2, 
    name: "Urban Scope", 
    year: "2025", 
    category: "Web", 
    link: "https://urbanscope.netlify.app/",
    media: [
      { type: "video", url: UrbanScope },
      { type: "", url: "" },
      { type: "", url: "" },
      { type: "", url: "" },
    ],
    description: "Urban Scope is a real estate web application that allows users to explore properties in various cities. \n\nBuilt with React for the frontend and Node.js for the backend, it features advanced search filters, interactive maps, and detailed property listings to enhance user experience."
  },
  { 
    id: 3, 
    name: "Delight Weds Fredrick", 
    year: "2024", 
    category: "Web", 
    link: "https://delight-weds-fredrick.netlify.app/",
    media: [
      { type: "img", url: DelightWedsFredrick },
      { type: "video", url: "" },
      { type: "video", url: "" },
      { type: "video", url: "" },
    ],
    description: "A beautifully designed wedding website for Delight and Fredrick, featuring event details, RSVP functionality, and a gallery to share their special moments with friends and family. \n\nBuilt with HTML, CSS, and JavaScript to ensure a seamless and engaging user experience." 
  },
  // { 
  //   id: 4, 
  //   name: "Mosalak Hub", 
  //   year: "2026", 
  //   category: "Web", 
  //   link: "https://mosalak.netlify.app/", 
  //   imageUrl: Mosalak,
  //   mediaType: "img",
  //   description: "Mosalak Hub is a comprehensive platform for managing and sharing digital resources. \n\nDeveloped using React.js and TailwindCSS, it offers features such as user authentication, file uploads, and collaborative workspaces to facilitate efficient resource management."
  // },
  // { 
  //   id: 5, 
  //   name: "Yole Couriers", 
  //   year: "2025", 
  //   category: "Web", 
  //   link: "https://yolecouriers.com/", 
  //   imageUrl: YoleCouriers,
  //   mediaType: "img",
  //   description: "Yole Couriers is a logistics and delivery service platform that connects customers with reliable courier services. \n\nBuilt with Vue.js and Node.js, it includes real-time tracking, order management, and customer support features to ensure a smooth delivery experience." 
  // },
  // { 
  //   id: 6, 
  //   name: "Corty Maxwell", 
  //   year: "2023", 
  //   category: "Experimental", 
  //   link: "https://corty.netlify.app/", 
  //   imageUrl: Corty,
  //   mediaType: "img",
  //   description: "Corty Maxwell is a personal portfolio website showcasing the work and achievements of Corty Maxwell. \n\nCreated with Gatsby.js and GraphQL, it features a dynamic project gallery, blog section, and contact form to engage visitors and potential clients."
  // },
  // { 
  //   id: 7, 
  //   name: "Amara Reynolds", 
  //   year: "2024", 
  //   category: "Experimental", 
  //   link: "https://amararey.netlify.app/", 
  //   imageUrl: Amara,
  //   mediaType: "img",
  //   description: "Amara Reynolds is an e-commerce platform specializing in handmade crafts and artisanal products. \n\nDeveloped using Shopify and Liquid templating, it offers a user-friendly shopping experience with secure payment options, product reviews, and personalized recommendations." 
  // },
  // { 
  //   id: 8, 
  //   name: "Chris Dubem Photography", 
  //   year: "2026", 
  //   category: "Web", 
  //   link: "https://chrisdubemphotography.com/", 
  //   imageUrl: Chris,
  //   mediaType: "img",
  //   description: "Chris Dubem Photography is a stunning portfolio website that showcases the captivating work of photographer Chris Dubem. \n\nBuilt with WordPress and Elementor, the site features high-resolution image galleries, client testimonials, and a booking system to connect with potential clients."
  // },
  // { 
  //   id: 9, 
  //   name: "Shop Lindura", 
  //   year: "2024", 
  //   category: "Web", 
  //   link: "https://shoplindura.netlify.app/", 
  //   imageUrl: "" 
  // },
  // { 
  //   id: 10, 
  //   name: "Marvel Consulting", 
  //   year: "2023", 
  //   category: "Web", 
  //   link: "https://marvelca.netlify.app/",
  //   imageUrl: "https://images.squarespace-cdn.com/content/v1/5de150a7f708ae5ab34c13ee/476066f1-a572-4556-ab22-439e9bf7a644/Precomposizione+1.gif?format=500w",
  //   mediaType: "img",
  //   description: "Marvel Consulting is a professional services website offering business consulting and strategic planning solutions. \n\nDeveloped with Next.js and Tailwind CSS, it features service overviews, case studies, and a contact form to facilitate client engagement."
  // },
  // { 
  //   id: 11, 
  //   name: "Swizz", 
  //   year: "2023", 
  //   category: "Experimental", 
  //   link: "https://swizz.netlify.app/",
  //   imageUrl: Swizz,
  //   mediaType: "img",
  //   description: "Swizz is an innovative social networking platform that connects users based on shared interests and activities. \n\nBuilt with Angular and Firebase, it offers features such as real-time messaging, event creation, and community groups to foster meaningful connections." 
  // },
  // { id: 12, name: "DesignHub", year: "2024", category: "Experimental", imageUrl: "" },
  // { id: 13, name: "TechNova", year: "2025", category: "Graphics", imageUrl: "" },
  // { id: 14, name: "PixelPerfect", year: "2023", category: "Graphics", imageUrl: "" },
  // { id: 15, name: "CodeCrafters", year: "2026", category: "Graphics", imageUrl: "" },
];