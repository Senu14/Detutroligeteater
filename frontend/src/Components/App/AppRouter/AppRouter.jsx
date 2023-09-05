import React from 'react';
import { Route, Routes } from 'react-router-dom';

//import All Pages
import Forside from '../../Pages/Forside/Forside';
import ForestillingerEvents from '../../Pages/ForestillingerEvents/ForestillingerEvents';
import Skuespillere from '../../Pages/Skuespillere/Skuespillere';
import Login from '../../Pages/Login/Login';

//Layouts that wrapped the other pages
import NavBar from '../../Partials/NavBar/NavBar';

const AppRouter = () => {
  return (
    <Routes>
          <Route index path="/" element={<Forside />} />
          <Route path='/' element={<NavBar />} />
          <Route path= "/ForestillingerEvents" element={<ForestillingerEvents />} />
          <Route path="/Skuespillere" element={<Skuespillere/>} />
          <Route path="/login" element={<Login/>} />

    </Routes>
  )
}

export default AppRouter;