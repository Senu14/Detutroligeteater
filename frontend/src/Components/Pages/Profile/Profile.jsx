import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
// import Reservations from './Reservations'
// import Reviews from './Reviews';
// import Favorites from './Favorites';
import { AuthContext, AuthProvider, useAuth } from '../../Providers/AuthProvider';

const Profile = () => {
 
  const navigate = useNavigate() 
  // const [reviews, setReviews] = useState([]);
  // const [reservations, setReservations] = useState([]);
  // const [favorites, setFavorites] = useState([]);

  const { loginData, setLoginData } = useAuth();
  console.log("loginData:", loginData);


  const userId = loginData && loginData.data && loginData.data.id;

  console.log("userId:", userId);

  useEffect(() => {
    // Fetch reviews, reservations, and favorites if the user is logged in
    if (userId) {
      // Create headers with the authentication token and user ID
      const headers = {
        Authorization: `Bearer ${loginData.access_token}`,
        'X-User-ID': userId,
      };


      // Fetch reviews
      axios.get(`http://localhost:4000/reviews`, { headers })
        .then(response => {
          console.log("Reviews data:", response.data);
          // setReviews(response.data);
        })
        .catch(error => console.error('Error fetching reviews:', error));

      // Fetch reservations
      axios.get(`http://localhost:4000/reservations`, { headers })
        .then(response => {
          console.log("Reservations data:", response.data);
          // setReservations(response.data);
        })
        .catch(error => console.error('Error fetching reservations:', error));

      // Fetch favorites
      axios.get(`http://localhost:4000/favorites`, { headers })
        .then(response => {
          console.log("Favorites data:", response.data);
          // setFavorites(response.data);
        })
        .catch(error => console.error('Error fetching favorites:', error));
    }
  }, [userId]);

// new code of mine 
//This is logout function
 const Logout = () => {
   sessionStorage.removeItem('token')
   navigate("/Profile")
  
//An empty string(loginData) is equal to false, 
//so then i can log in by pressing the logout button 
   setLoginData('')
  


  return (
    <div>
       {!loginData && !loginData.username ? (
//         <>
      <h1>Profile</h1>
      ) : (
       // Vis logindata hvis bruger er logget ind
       <div >
         <p>
           Du er logget ind som: {`${loginData.user.firstname} ${loginData.user.lastname} `}
         </p>
         <button onClick={Logout}>
         <Link to={`/log`}>
         Logout
         </Link></button>
       </div>
     )}
      {/* <h2>Reservations</h2>
      <Reservations reservations={reservations} />

      <h2>Reviews</h2>
      <Reviews reviews={reviews} />

      <h2>Favorites</h2>
      <Favorites favorites={favorites} /> */}
    </div>
  );
};
}

export default Profile;
