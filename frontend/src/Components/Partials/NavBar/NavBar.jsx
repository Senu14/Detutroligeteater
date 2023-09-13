import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
     <div className='main-Nav'>
     <header>
         <nav>
           
             <NavLink to="/"><span>Forside</span></NavLink>
             <NavLink to="/Forestillinger & Events"><span>Forestillinger & Events</span></NavLink>
             <NavLink to="/Skuespillere"><span>Skuespillere</span></NavLink>
             <NavLink to="/log"><span>NLogin</span></NavLink>
             {/* <NavLink to="/EventDetails"><span>EventDetails</span></NavLink> */}
         </nav>
     </header>
     {/* <main>
       <Outlet />
     </main> */}
     </div>
  )
}

export default NavBar;
