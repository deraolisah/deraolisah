import MecoClub from "../assets/mecoclub.gif";
import UrbanScope01 from "../assets/UrbanScope01.gif";
import UrbanScope02 from "../assets/UrbanScope02.png";
import UrbanScope03 from "../assets/UrbanScope03.gif";
import UrbanScope04 from "../assets/UrbanScope04.png";
import UrbanScope05 from "../assets/UrbanScope05.png";
import UrbanScope06 from "../assets/UrbanScope06.png";
import DelightWedsFredrick from "../assets/DelightWedsFredrick.png";  
import Mosalak from "../assets/Mosalak.png";
import YoleCouriers from "../assets/YoleCouriers.png";
import Corty from "../assets/Corty.png";
import ShopLindura from "../assets/ShopLindura.png";
import Amara from "../assets/Amara.png";
import Chris from "../assets/Chris.png";
import Marvel from "../assets/Marvel.png";
import Swizz from "../assets/Swizz.png";
import { StepBackIcon } from "lucide-react";


export const projects = [
  { 
    id: 1, 
    name: "Meco Club", 
    year: "2025", 
    category: "Web", 
    link: "https://mecoclub.netlify.app/",
    media: [
      { type: "img", url: "https://images.squarespace-cdn.com/content/v1/5de150a7f708ae5ab34c13ee/1637238516875-RM5BHZ62RUAKHD9O60MG/Riccardo-Agostinelli---Neologia-v2.gif?format=500w" },
      { type: "img", url: MecoClub },
      { type: "img", url: "https://images.squarespace-cdn.com/content/v1/5de150a7f708ae5ab34c13ee/476066f1-a572-4556-ab22-439e9bf7a644/Precomposizione+1.gif?format=500w" },
      { type: "", url: "" },
      { type: "", url: "" },
      { type: "", url: "" },
    ],
    description: "Website for Meco Club, a UK-based Record Label managing mutiple Artists. \n\nThe site features artist showcase, music release, event calendar, and reservation system to enhance user engagement and streamline bookings. \n\nA sleek, user-friendly experience.",
    stack: [ "React.js", "TailwindCSS", "GSAP" ],
  },
  { 
    id: 2, 
    name: "Urban Scope", 
    year: "2025", 
    category: "Web", 
    link: "https://urbanscope.netlify.app/",
    media: [
      { type: "img", url: UrbanScope01 },
      { type: "img", url: UrbanScope02 },
      { type: "img", url: UrbanScope03 },
      { type: "img", url: UrbanScope04 },
      { type: "img", url: UrbanScope05 },
      { type: "img", url: UrbanScope06 },
      { type: "", url: "" },
      { type: "", url: "" },
      { type: "", url: "" },
      { type: "", url: "" },
    ],
    description: "Urban Scope is a real estate web application that allows users to explore properties in various cities. \n\nBuilt with React for the frontend and Node.js for the backend, it features advanced search filters, interactive maps, and detailed property listings to enhance user experience.",
    stack: [],
  },
  { 
    id: 3, 
    name: "Delight Weds Fredrick", 
    year: "2024", 
    category: "Web", 
    link: "https://delight-weds-fredrick.netlify.app/",
    media: [
      { type: "img", url: DelightWedsFredrick },
      { type: "", url: "" },
      { type: "", url: "" },
      { type: "", url: "" },
    ],
    description: "A beautifully designed wedding website for Delight and Fredrick, featuring event details, RSVP functionality, and a gallery to share their special moments with friends and family. \n\nBuilt with HTML, CSS, and JavaScript to ensure a seamless and engaging user experience." ,
    stack: [],
  },
  { 
    id: 4, 
    name: "Mosalak Hub", 
    year: "2026", 
    category: "Web", 
    link: "https://mosalak.netlify.app/", 
    media: [
      { type: "img", url: "https://images.squarespace-cdn.com/content/v1/5de150a7f708ae5ab34c13ee/1681767326789-Q6KE29YQAXXDW24IGK1H/Neologia-IV.gif?format=500w" },
      { type: "img", url: Mosalak },
      { type: "", url: "" },
      { type: "", url: "" },
    ],
    description: "Mosalak Hub is a comprehensive platform for managing and sharing digital resources. \n\nDeveloped using React.js and TailwindCSS, it offers features such as user authentication, file uploads, and collaborative workspaces to facilitate efficient resource management.",
    stack: [],
  },
  { 
    id: 5, 
    name: "Yole Couriers", 
    year: "2025", 
    category: "Web", 
    link: "https://yolecouriers.com/", 
    media: [
      { type: "img", url: "https://images.squarespace-cdn.com/content/v1/5de150a7f708ae5ab34c13ee/1673650470434-AYMGEP56EMD84QB9W13O/17.gif?format=500w" },
      { type: "img", url: YoleCouriers },
      { type: "", url: "" },
      { type: "", url: "" },
    ],
    description: "Yole Couriers is a logistics and delivery service platform that connects customers with reliable courier services. \n\nBuilt with Vue.js and Node.js, it includes real-time tracking, order management, and customer support features to ensure a smooth delivery experience.",
    stack: [],
  },
  { 
    id: 6, 
    name: "Corty Maxwell", 
    year: "2023", 
    category: "Experimental", 
    link: "https://corty.netlify.app/", 
    media: [
      { type: "img", url: "https://corty.netlify.app/assets/img4-DNrH5ty2.jpg" },
      { type: "img", url: "https://corty.netlify.app/assets/img5-DjxIQwKB.jpg" },
      { type: "img", url: "https://corty.netlify.app/assets/img6-BdKV2kyt.jpg" },
      { type: "img", url: Corty },
      { type: "", url: "" },
      { type: "", url: "" },
      { type: "", url: "" },
    ],
    description: "Corty Maxwell is a personal portfolio website showcasing the work and achievements of Corty Maxwell. \n\nCreated with Gatsby.js and GraphQL, it features a dynamic project gallery, blog section, and contact form to engage visitors and potential clients.",
    stack: [],
  },
  { 
    id: 7, 
    name: "Amara Reynolds", 
    year: "2024", 
    category: "Experimental", 
    link: "https://amararey.netlify.app/", 
    media: [
      { type: "img", url: "https://images.squarespace-cdn.com/content/v1/5de150a7f708ae5ab34c13ee/049bdb15-54d2-4ef8-8ae7-3ea0d09abaca/GIF_09-min.gif?format=500w" },
      { type: "img", url: "https://images.squarespace-cdn.com/content/v1/5de150a7f708ae5ab34c13ee/50e3b24e-7d04-49b0-bbd1-05510d22831c/GIF_08-min.gif?format=500w" },
      { type: "img", url: Amara },
      { type: "", url: "" },
      { type: "", url: "" },
      { type: "", url: "" },
    ],
    description: "Amara Reynolds is an e-commerce platform specializing in handmade crafts and artisanal products. \n\nDeveloped using Shopify and Liquid templating, it offers a user-friendly shopping experience with secure payment options, product reviews, and personalized recommendations.",

    stack: [],
  },
  { 
    id: 8, 
    name: "Chris Dubem Photography", 
    year: "2026", 
    category: "Web", 
    link: "https://chrisdubemphotography.com/", 
    media: [
      { type: "img", url: Chris },
      { type: "", url: "" },
      { type: "", url: "" },
      { type: "", url: "" },
    ],
    description: "Chris Dubem Photography is a stunning portfolio website that showcases the captivating work of photographer Chris Dubem. \n\nBuilt with WordPress and Elementor, the site features high-resolution image galleries, client testimonials, and a booking system to connect with potential clients.",
    role: "Web Developer",
    stack: [],
  },
  { 
    id: 9, 
    name: "Shop Lindura", 
    year: "2024", 
    category: "Web", 
    media: [
      { type: "img", url: ShopLindura },
      { type: "", url: "" },
      { type: "", url: "" },
      { type: "", url: "" },
    ],
    description: "",
    stack: [],
  },
  { 
    id: 10, 
    name: "Marvel Consulting", 
    year: "2023", 
    category: "Web", 
    link: "https://marvelca.netlify.app/",
    media: [
      { type: "img", url: "https://images.squarespace-cdn.com/content/v1/5de150a7f708ae5ab34c13ee/1669747475194-CIY4LABRAD90U3T4U8TG/FOR+HER+%280-00-00-07%29.png?format=500w" },
      { type: "img", url: Marvel },
      { type: "", url: "" },
      { type: "", url: "" },
    ],
    description: "Marvel Consulting is a professional services website offering business consulting and strategic planning solutions. \n\nDeveloped with Next.js and Tailwind CSS, it features service overviews, case studies, and a contact form to facilitate client engagement.",
    stack: [],
  },
  { 
    id: 11, 
    name: "Swizz", 
    year: "2023", 
    category: "Experimental", 
    link: "https://swizz.netlify.app/",
    media: [
      { type: "img", url: Swizz },
      { type: "", url: "" },
      { type: "", url: "" },
      { type: "", url: "" },
    ],
    description: "Swizz is an innovative social networking platform that connects users based on shared interests and activities. \n\nBuilt with Angular and Firebase, it offers features such as real-time messaging, event creation, and community groups to foster meaningful connections.",
    stack: [], 
  },
  { id: 12, name: "DesignHub", year: "2024", category: "Experimental", media: [{ type: "", url: "" }] },
  { id: 13, name: "TechNova", year: "2025", category: "Graphics", media: [{ type: "", url: "" }] },
  { id: 14, name: "PixelPerfect", year: "2023", category: "Graphics", media: [{ type: "", url: "" }] },
  { 
    id: 15, 
    name: "CodeCrafters", 
    year: "2026", 
    category: "Graphics", 
    media: [
      { type: "img", url: "https://images.squarespace-cdn.com/content/v1/5de150a7f708ae5ab34c13ee/4ef35f32-e7ef-4f3c-b036-718e78de7422/69.png?format=500w" }
    ] 
  },
];