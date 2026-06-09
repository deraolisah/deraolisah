import { Menu } from 'lucide-react';
import React from 'react'
import { NavLink, Link } from 'react-router-dom';
import resume from '../assets/Chidera_Olisah_Web_Developer_Resume.pdf';
import me from "../assets/me.png";

const Navbar = () => {

  const navLinks = [
    {name: 'About Me', href: '/about'}, 
    {name: 'Contact', href: '/contact'},
  ];


  return (
    <nav className='container flex items-center justify-between gap-2 py-3'>
      <Link to="/" className='font-normal flex items-center gap-1.5 text-nowrap'> 
        <img src={me} alt='Me' className='w-7 h-7 object-cover rounded-full' />
        <span> Chidera Olisah </span>
      </Link>


      <ul className='flex flex-wrap items-center gap-4 md:gap-6 font-normal'>
        {navLinks.map((link, index) => (
          <li key={index}>
            <NavLink 
              to={link.href} 
              className={({ isActive }) => isActive ? "underline" : "hover:underline"}
              >
              {link.name} 
            </NavLink>
          </li>
        ))}
        <a href={resume}  className='hover:underline' target="_blank" rel="noopener noreferrer">
          Resume
        </a>
      </ul>
    </nav>
  )
}

export default Navbar;