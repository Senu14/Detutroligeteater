import React, { useState} from 'react';
import { Link, Outlet } from 'react-router-dom';


import './Header.scss';



export default function Header() {
  return (
    <>
    
  
    <div className='collected-Nav'>
      
    <header>
      
    <img className="Top-logo"
    src={require("../../../Assets/SVG/Logo.jpg")}
    alt="logo"
  />
   <div className="search">
            <form action="#">
                <input type="text"
                       placeholder=" Search Courses"
                       name="search"></input>
                <button>
                    <i className="fa fa-search"
                      >
                    </i>
                </button>
            </form>
        </div>
     
        <nav>
 
            <Link to="/" className='Links'> <li className="header__menu">FORSIDE</li></Link>
            <Link to="/ForestillingerEvents" className='Links'> <li className="header__menu">F&E</li></Link>
            <Link to="/Skuespillere" className='Links'> <li className="header__menu">SKUESPILLERE</li></Link>
            <Link to="/login" className='Links'> <li className="header__menu">LOGIN</li></Link>
        </nav>
    </header>
    <main>
      <Outlet />
    </main>
    
    </div>
    </>
  )
}


