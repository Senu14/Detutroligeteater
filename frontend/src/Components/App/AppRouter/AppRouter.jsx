import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

//import All Pages
import Forside from '../../Pages/Forside/Forside';
import ForestillingerEvents from '../../Pages/ForestillingerEvents/ForestillingerEvents';
import Skuespillere from '../../Pages/Skuespillere/Skuespillere';
import Profile from '../../Pages/Login/Profile';
import EventDetails from '../../Pages/EventDetails/EventDetails';
import BuyTicket from '../../Pages/BuyTicket/BuyTicket';
import ActorDetails from '../../Elements/FatchCards/ADetails/ActorDetails';
import ThankYou from '../../Pages/ThankYou/ThankYou';
import ReviewForm from '../../Elements/FatchCards/WReview/ReviewForm';


//Layouts that wrapped the other pages
import NavBar from '../../Partials/NavBar/NavBar';


function isAuthenticated() {
  const userString = localStorage.getItem('currentUser');
  const user = JSON.parse(userString);
  return user !== null; // Modify this condition based on your authentication logic
}

const AppRouter = () => {
  return (
    <Routes>
          <Route index path="/" element={<Forside />} />
          <Route path='/' element={<NavBar />} />
          <Route path= "/ForestillingerEvents" element={<ForestillingerEvents />} />
          <Route path="/Skuespillere" element={<Skuespillere/>} />
          <Route
              path="/Profile"
              element={
                isAuthenticated() ? (
                  <Profile />
                ) : (
                  <Navigate to="/" replace />
                )
              }
            />

          <Route path="/buy" element={<BuyTicket/>} />
          <Route path="/thank" element={<ThankYou/>} />
          <Route path="/write" element={<ReviewForm/>} />
          <Route path="/event/:id" element={<EventDetails/>} />
          <Route path="/actor/:id" element={<ActorDetails/>} />


    </Routes>
  )
}

export default AppRouter;
