import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

//import All Pages
import Forside from '../../Pages/Forside/Forside';
import ForestillingerEvents from '../../Pages/ForestillingerEvents/ForestillingerEvents';
import Skuespillere from '../../Pages/Skuespillere/Skuespillere';
import Profile from '../../Pages/Profile2/Profile';
import EventDetails from '../../Pages/EventDetails/EventDetails';
import BuyTicket from '../../Pages/BuyTicket/BuyTicket';
import ActorDetails from '../../Elements/FatchCards/ADetails/ActorDetails';
// import SeatPicker from '../../Pages/SeatPicker/SeatPicker';
import ThankYou from '../../Pages/ThankYou/ThankYou';
import ReviewForm from '../../Elements/FatchCards/WReview/ReviewForm';
import Login from '../../Pages/Login/Login';
import NotFound from '../../Pages/NotFound/NotFound';
import ConfirmOrder from "../../Elements/FatchCards/COrder/ConfirmOrder";
// import SeatPicker from '../../Pages/SeatPicker/SeatPicker';

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
          <Route path="/Profile" element={<Profile/>} />
          <Route path="/Buy/:id" element={<BuyTicket/>} />
          <Route path="/thank" element={<ThankYou/>} />
          <Route path="/write" element={<ReviewForm/>} />
          <Route path="/event/:id" element={<EventDetails/>} />
          <Route path="/actors/:id" element={<ActorDetails/>} />
          {/* <Route path="/Pick" element={<SeatPicker/>} /> */}
          <Route path="/log" element={<Login/>} />
          <Route path="/Not" element={<NotFound/>} />
      <Route path="/confirme/:id" element={<ConfirmOrder />} />
      {/* <Route path="/sm" element={<SeatPicker />} /> */}



    </Routes>
  )
}

export default AppRouter;
