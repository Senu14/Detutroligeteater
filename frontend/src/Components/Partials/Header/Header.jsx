import React, { useState} from 'react';
import { Link, Outlet } from 'react-router-dom';
import Logo from '../../../Assets/SVG/Logo.svg'

import './Header.scss';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isLoggedIn = 
  localStorage.getItem('access_token') !== null;
 

  return (
    <>
    <header className="header">
    {/* <a href="http://localhost:3000/" class="nav-link"> */}
    {/* <img className="Top-logo"
    src={require("../../../Assets/SVG/Logo.svg")}
    alt="logo"
  /> */}
  {/* </a> */}
    
      <button className="header__burger" onClick={toggleMenu}>
      </button>
      {isOpen && (
        <ul className="header__menu">
          <Link to="/"   className='Links'> <li className="header__menu-item">FORSIDE</li></Link>
         <Link to="/ForestillingerEvents"   className='Links'><li className="header__menu-item">F&E</li></Link>
         <Link to="/Skuespillere"  className='Links'><li className="header__menu-item">SKUESPILLERE</li></Link>
         <Link to="/login" className='Links'><li className="header__menu-item">LOGIN</li></Link>
       
        </ul>
      )}
    </header>
    <main>
      <Outlet />
    </main>
  </>
    
      
    

  )
}

export default Header;
