import React, { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useNavigate } from "react-router-dom";


import axios from 'axios';

import './Header.scss';



export default function Header() {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [active, setActive] = useState(false);
  const [open, setopen] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  
//a function that will toggle the menu upon clicking on the button
  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }
// that will detect the screen width and not to hide the links.
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:4000/login", { username, password });
      localStorage.setItem("currentUser", JSON.stringify(res.data));
      navigate("/Profile")
    } catch (err) {
      if (err.response) {
        setError(err.response.data);
      } else {
        setError("An error occurred while connecting to the server.");
      }
    }
    
  };


  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);
  
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    setCurrentUser(user);
  }, []);

  const toggleLoginForm = () => {
    setShowLoginForm(!showLoginForm);
  };

  const handleLogout = () => {
    // Implement your logout logic here
    localStorage.removeItem('currentUser');
    setCurrentUser(null);
  };


  return (
    <>
    <div className={ active ? "active too" : "active"}>
  
      
    <header>
       
    
        <img className="Top-logo"
    src={require("../../../Assets/SVG/Logo.jpg")}
    alt="logo"
  />
  
  <input className="search" placeholder="INDAST SOGEORD" type="search" id="search" name="search"></input>  
  
   <nav>
   
        {(toggleMenu || screenWidth > 500) && (
        <ul className="list">
            <Link to="/" className="items">
              <li className="header__menu">FORSIDE</li>
            </Link>
            <Link to="/ForestillingerEvents" className="items">
              <li className="header__menu">F&E</li>
            </Link>
            <Link to="/Skuespillere" className="items">
              <li className="header__menu">SKUESPILLERE</li>
            </Link>

            {/* <Link to="/login" className="items">
              <li className="header__menu">LOGIN</li>
            </Link> */}

            {currentUser && (
               <div className='.drop-up' onClick={()=>setopen(!open)}>
               
                 <Link to="" className="items">
                 <li className="header__menu" onClick={toggleLoginForm}>LOGIN</li>
            </Link>
               
               </div>
            )}
          </ul>
            )}
          <button onClick={toggleNav} className="btn">BTN</button>
          {open && (
                   <form onSubmit={handleSubmit}>  
                 <div className="options">

               <input type="text" name="username" 
                onChange={(e) => setUsername(e.target.value)}
              />
               <input name="password" type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="header__menu" >
               <button className="items" type="submit">login</button>
               </div>
              </div>
              </form>
              )}
              </nav>
        
    </header>
    <main>
      <Outlet />
    </main>
    
    </div>
    </>
  )
}


