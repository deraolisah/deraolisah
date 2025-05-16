import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Me from "../../public/favicon.png";

const Nav = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState('');
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.getElementById('home');
      const aboutSection = document.getElementById('about');
      const servicesSection = document.getElementById('services');
      const projectsSection = document.getElementById('projects');
      const connectSection = document.getElementById('connect');

      const homeTop = homeSection.offsetTop;
      const aboutTop = aboutSection.offsetTop - 80;
      const servicesTop = servicesSection.offsetTop - 80;
      const projectsTop = projectsSection.offsetTop - 80;
      const connectTop = connectSection.offsetTop - 200;

      const scrollPosition = window.scrollY;

      if (scrollPosition >= homeTop && scrollPosition < aboutTop) {
        setActiveLink('home');
      } else if (scrollPosition >= aboutTop && scrollPosition < servicesTop) {
        setActiveLink('about');
      } else if (scrollPosition >= servicesTop && scrollPosition < projectsTop) {
        setActiveLink('services');
      } else if (scrollPosition >= projectsTop && scrollPosition < connectTop) {
        setActiveLink('projects');
      } else if (scrollPosition >= connectTop) {
        setActiveLink('connect');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const path = location.pathname;
    if (path === '/home') {
      setActiveLink('home');
    } else if (path === '/about') {
      setActiveLink('about');
    } else if (path === '/services') {
      setActiveLink('services');
    } else if (path === '/projects') {
      setActiveLink('projects');
    } else if (path === '/connect') {
      setActiveLink('connect');
    }
  }, [location]);
  const handleLinkClick = (link) => {
    setActiveLink(link);
  };


  const [isSticky, setIsSticky] = useState(false);
  const handleScroll = () => {
    if(window.scrollY > 690 ){
      setIsSticky(true);
    } else{
      setIsSticky(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return() => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <nav className={`w-full flex items-center justify-center -top-15 md:h-[100px] h-[88px] z-10 bg-transparent pointer-events-none ${isSticky ? "sticky items-start top-4.5 transition-all ease-in-out duration-700" : ""}`}>
      <ul className={'md:w-fit mx-auto flex items-center justify-between md:justify-center rounded-full p-1.5 pointer-events-auto shadow'}
        style={{
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          backgroundColor: "rgba(242, 242, 242, 0.6)",
          borderRadius: "1000px",
          border: "1px solid rgba(255, 255, 255, 0.2)",
        }}
      >
        <li className='flex md:w-full items-center justify-center mr-2'>
          <Link to="/" title='<Home>' className={`rounded-full transition-all duration-200 ${activeLink === 'home' ? 'bg-white' : ''}`} onClick={() => handleLinkClick('home')} aria-label="Home" aria-hidden="false">
            <img src={Me} className='min-h-8 min-w-8 max-h-8 max-w-8 rounded-full border-1 border-dark-gray bg-primary pointer-events-none' alt='' />
          </Link>
        </li>
        <li title='<About Me>'>
          <a href='#about' className={`px-4 py-2 hover:bg-white/60 hover:text-primary rounded-full md:text-base text-sm transition-all duration-200 ${activeLink === 'about' ? 'bg-white' : ''}`} onClick={() => handleLinkClick('about')}> About </a>
        </li>
        <li title='<Services>'>
          <a href="#services" className={`px-4 py-2 hover:bg-white/60 hover:text-primary rounded-full md:text-base text-sm transition-all duration-200 ${activeLink === 'services' ? 'bg-white' : ''}`} onClick={() => handleLinkClick('craft')}> Services </a>
        </li>
        <li title='<My Projects>'>
          <a href="#projects" className={`px-4 py-2 hover:bg-white/60 hover:text-primary rounded-full md:text-base text-sm transition-all duration-200 ${activeLink === 'projects' ? 'bg-white' : ''}`} onClick={() => handleLinkClick('projects')}> Projects </a>
        </li>
        <li title='<Connect/Contact>'>
          <a href="#connect" className={`px-4 py-2 hover:bg-white/60 hover:text-primary rounded-full md:text-base text-sm transition-all duration-200 ${activeLink === 'connect' ? 'bg-white' : ''}`} onClick={() => handleLinkClick('connect')}> Connect </a>
        </li>
      </ul>
    </nav>
  )
}

export default Nav;