import { Menu } from 'lucide-react';
import React from 'react'
import { NavLink, Link } from 'react-router-dom';
import resume from '../assets/Chidera_Olisah_Web_Developer_Resume.pdf';

const Navbar = () => {

  const navLinks = [
    {name: 'About me', href: '/about'}, 
    {name: 'Contact', href: '/contact'},
  ];


  return (
    <nav className='container flex items-center justify-between py-3'>
      <Link to="/" className='font-normal'> Chidera Olisah </Link>


      <ul className='flex items-center gap-4 md:gap-6 font-normal'>
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