import React, { useState, useEffect } from 'react';
import logo2 from "./eftalia.png";
import Link from '../Link/Link';

const Nav = () => {
  const [navClass, setNavClass] = useState('');
  const [toggeledNav, settoggeledNav] = useState(false);

  const toggleNav = () => {
    settoggeledNav(!toggeledNav);
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      let navClass = '';
      if (window.scrollY >= 300) {
        navClass = 'scrolled';
      }
      setNavClass(navClass);
    });
  }, []);
  return (
    <nav className={`navbar navbar-expand-md bg-light ${navClass}`}>
      <div className='container'>
        <a className='navbar-brand' href='/' target="_blank">
         <img src={logo2} style={{height:"40%", width:"40%"}}></img>
         
        
        </a>
        <div
          className={`navbar-toggler nav-icon ${(() => {
            if (toggeledNav) return 'open';
            return '';
          })()}`}
          onClick={toggleNav}
        >
          <span />
          <span />
          <span />
        </div>

        <div
          className={`collapse navbar-collapse ${(() => {
            if (toggeledNav) return 'show';
            return '';
          })()}`}
        >
          <ul className='navbar-nav ml-auto'>
            <li className='nav-item'>
              <Link target='home' offset={-120} classes='nav-link'>
                Anasayfa
              </Link>
            </li>
            <li className='nav-item'>
              <Link target='about' classes='nav-link'>
                HAKKINDA
              </Link>
            </li>
            <li className='nav-item'>
              <Link target='services' classes='nav-link'>
                HİZMETLER
              </Link>
            </li>
            <li className='nav-item'>
              <Link target='Device' classes='nav-link'>
              CİHAZLAR
              </Link>
            </li>
            <li className='nav-item'>
              <Link target='contact' classes='nav-link'>
              İLETİŞİM
              </Link>
            </li>
            <li className='nav-item'>
            <Link target='kvkk' classes='nav-link'>
              KVKK
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
