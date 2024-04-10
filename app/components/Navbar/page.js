"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

import logo from '../../../public/Images/logo-img.png';
import logo_text from '../../../public/Images/logo-text.png';

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header className={isSticky ? 'stickynavbar' : ''}>
        <nav className='navbar'>
          <div className='logo'>
            <Image src={logo} alt='logo' />
            <Image src={logo_text} alt='logo' />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
