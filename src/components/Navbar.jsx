import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {

  const navLinks = [
    {name: 'Projects', href: '/'}, 
    {name: 'About me', href: '/about'}, 
    {name: 'Contact', href: '/contact'}
  ];


  return (
    <nav className='container flex items-center justify-between py-3'>
      <Link to="/" className='font-medium'> Chidera Olisah </Link>


      <ul className='flex items-center gap-6 font-medium'>
        {navLinks.map((link, index) => (
          <li key={index}>
            <Link to={link.href} className='hover:text-dark/60'> {link.name} </Link>
          </li>
        ))}
      </ul>

      
    </nav>
  )
}

export default Navbar;