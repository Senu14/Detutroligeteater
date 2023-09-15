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
            <div action="#">
            <input className="search" placeholder="INDAST SOGEORD" type="search" id="search" name="search"></input>
            </div>
        </div>
     
        <nav>
 
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
                 <Link to="/log" className="items">
                   <li className="header__menu">Login</li>
                 </Link>
                   </ul>
        </nav>
    </header>
    <main>
      <Outlet />
    </main>
    
    </div>
    </>
  )
}




































// import React, { useState, useEffect } from 'react';
// import { Link, Outlet } from 'react-router-dom';
// import { useNavigate } from "react-router-dom";

// import axios from 'axios';

// import './Header.scss';

// export default function Header() {
//   const [toggleMenu, setToggleMenu] = useState(false);
//   const [currentUser, setCurrentUser] = useState(null);
//   const [open, setopen] = useState(false);
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState(null);

//   const navigate = useNavigate();

//   const toggleNav = () => {
//     setToggleMenu(!toggleMenu);
//   }

//   const screenWidth = window.innerWidth;

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("http://localhost:4000/login", { username, password });
//       localStorage.setItem("currentUser", JSON.stringify(res.data));
//       setCurrentUser(res.data); // Set the current user state
//       navigate("/Profile");
//     } catch (err) {
//       if (err.response) {
//         setError(err.response.data);
//       } else {
//         setError("An error occurred while connecting to the server.");
//       }
//     }
//   };

//   const handleLogout = () => {
//     localStorage.removeItem('currentUser');
//     setCurrentUser(null); // Clear the current user state
//   };

//   useEffect(() => {
//     const userString = localStorage.getItem('currentUser');
//     const user = JSON.parse(userString);
//     setCurrentUser(user);
//   }, []);

//   return (
//     <>
//       <div className={currentUser ? "active too" : "active"}>
//         <header>
//           <img className="Top-logo"
//             src={require("../../../Assets/SVG/Logo.jpg")}
//             alt="logo"
//           />
//           <input className="search" placeholder="INDAST SOGEORD" type="search" id="search" name="search"></input>
//           <nav>
//             {(toggleMenu || screenWidth > 500) && (
//               <ul className="list">
//                 <Link to="/" className="items">
//                   <li className="header__menu">FORSIDE</li>
//                 </Link>
//                 <Link to="/ForestillingerEvents" className="items">
//                   <li className="header__menu">F&E</li>
//                 </Link>
//                 <Link to="/Skuespillere" className="items">
//                   <li className="header__menu">SKUESPILLERE</li>
//                 </Link>

// {/** Pupup og dropup loginform kode starter here*/}

//                 {currentUser ? (
//                   <div className='.drop-up' onClick={() => setopen(!open)}>
//                     <li className="header__menu" onClick={handleLogout}>
//                     <Link to={`/Profile`} >
//                     MIN SIDE
//                     </Link> 
//                       </li>
//                   </div>
//                 ) : (
//                   <div className='.drop-up' onClick={() => setopen(!open)}>
//                     <li className="header__menu" onClick={toggleNav}>LOGIN</li>
//                   </div>
//                 )}
//               </ul>
//             )}

// {/** Burger menu starter here*/}
//             {/* <button onClick={toggleNav} className="btn">BTN</button> */}
//             {open && !currentUser && (
//               <form onSubmit={handleLogin}>
//                 <div className="options">
//                   <input type="text" name="username"
//                     onChange={(e) => setUsername(e.target.value)}
//                   />
//                   <input name="password" type="password"
//                     onChange={(e) => setPassword(e.target.value)}
//                   />
//                   <div className="header__menu" >
//                     <button className="items" type="submit">
//                     <Link to={`/Profile`} >
//                     LOGIN
//                     </Link> 
//                     </button>
//                   </div>
//                 </div>
//               </form>
//             )}
//           </nav>
//         </header>
        
//       </div>
//     </>
//   )
// }