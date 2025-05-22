import React from "react";
import "./Services.scss"; // Assuming you have a CSS file for styles
import interlacedBg from "../assets/interlaced.png"; 
import doodleBg from "../assets/doodle.png"; 
import concentricBg from "../assets/concentric.png";
import dotsBg from "../assets/dots.png";
import linesBg from "../assets/lines.png";
import wavesBg from "../assets/waves.png";
// import stripesBg from "../assets/stripes.png";

const cardData = [
  { title: "Basic Website", price: "$300", description: "Simple static websites, like landing page, porfolios, a small blogs, etc, used to convert visitors into leads.", backgroundImage: interlacedBg },
  { title: "Standard Website", price: "$600", description: "Multi-page website (up to 10 pages) that matches/reflects your business goals, brand, makes you look big, and boosts credibility.", backgroundImage: doodleBg  },
  { title: "E-Commerce Website", price: "$800", description: "Online store that sells your products 24/7, accepts payments, and used to manage orders, inventory and customers.", backgroundImage: concentricBg },
  { title: "UI-UX Design", price: "$150", description: "Get a professional UI/UX design for your website, that makes your website user-friendly and visually appealing.", backgroundImage: dotsBg },
  { title: "Graphic Design", price: "from $12", description: "Get a professional design for your business or brand.", backgroundImage: linesBg },
  { title: "Templates & Source Codes", price: "Get", description: "Get instant access to my pre-made templates and source codes.", backgroundImage: wavesBg },
];

const Services = () => {
  return (
    <section className="bg-gradient-to-b from-gray-0 to-gray-0 w-full min-h-screen flex justify-center py-22" id="services">
      <div className="w-full">
        <p className='md:text-[28px]/[48px] text-[19px]/8 font-light mb-4'> What do you need? <br/> </p>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {cardData.map((card, i) => (
            <div
              key={i}
              className={`card w-full flex flex-col items-start justify-start gap-18 md:p-8 p-6 rounded-2xl border-1 border-primary/20 bg-white md:bg-light-gray shadow sticky md:relative`}
              style={{ 
                backgroundImage: `url(${card.backgroundImage})`, 
                backgroundSize: 'cover', 
                backgroundPosition: 'center', 
                backgroundRepeat: 'no-repeat',
                // backgroundOpacity: 0.1,
                // backgroundBlendMode: 'luminosity',
                // top: `${i * 20}px`
              }}
            >
              <h5 className="md:text-xl text-md font-medium p-0 w-full flex items-center justify-between">
                {/* <span className="block text-sm text-blue-700">Project #{i + 1}</span> */}
                {card.title}
                <small className="text-primary bg-primary/10 text-sm font-semibold rounded-full py-1 px-4"> {card.price} </small>
              </h5>
              <p className="text-sm leading-relaxed mt-2">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;