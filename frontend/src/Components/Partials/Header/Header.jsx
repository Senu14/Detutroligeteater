import React, { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';


import './Header.scss';



export default function Header() {
  const [toggleMenu, setToggleMenu] = useState(false)
  
//a function that will toggle the menu upon clicking on the button
  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }
// that will detect the screen width and not to hide the links.
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  useEffect(() => {

    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }
    return () => {
      window.removeEventListener('resize', changeWidth)
  }

}, [])

  return (
    <>
    
  
    <div className='collected-Nav'>
      
    <header>
       
        <img className="Top-logo"
    src={require("../../../Assets/SVG/Logo.jpg")}
    alt="logo"
  />
   <nav>
        {(toggleMenu || screenWidth > 500) && (
        <ul className="list">
            <Link to="/" className='items'> <li className="header__menu">FORSIDE</li></Link>
            <Link to="/ForestillingerEvents" className='items'> <li className="header__menu">F&E</li></Link>
            <Link to="/Skuespillere" className='items'> <li className="header__menu">SKUESPILLERE</li></Link>
            <Link to="/login" className='items'> <li className="header__menu">LOGIN</li></Link>
          </ul>
            )}
          <button onClick={toggleNav} className="btn">BTN</button>
        </nav>
    </header>
    <main>
      <Outlet />
    </main>
    
    </div>
    </>
  )
}


