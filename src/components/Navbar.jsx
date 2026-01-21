import { Menu } from 'lucide-react';
import React from 'react'
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {

  const navLinks = [
    {name: 'Projects', href: '/'}, 
    {name: 'About me', href: '/about'}, 
    {name: 'Contact', href: '/contact'}
  ];


  return (
    <nav className='container flex items-center justify-between py-3'>
      <Link to="/" className='font-medium'> Chidera Olisah </Link>


      <ul className='hidden md:flex items-center gap-6 font-medium'>
        {navLinks.map((link, index) => (
          <li key={index}>
            <NavLink to={link.href} className={({ isActive }) => isActive ? "underline" : ""}>
              {link.name} 
            </NavLink>
          </li>
        ))}
      </ul>

      <div className='flex md:hidden cursor-pointer'>
        <Menu />
      </div>
    </nav>
  )
}

export default Navbar;