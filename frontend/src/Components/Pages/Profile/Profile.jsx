import React, { useEffect, useState } from 'react';
import { useQuery } from "@tanstack/react-query";
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../Providers/AuthProvider';
import './Profile.scss';



// // We define the fetch functions before using them in useQuery hooks
// const fetchReservations = async (userId, token) => {
//   try {
// //We set up the headers with the token
//     const headers = {
//       Authorization: `Bearer ${token}`,
//     };

//     const response = await axios.get(`http://localhost:4000/reservations/${userId}`, { headers });

//     // if (response.status !== 200) { // Check the status code for success (usually 200)
//     //   // Add a log for network errors
//     //   console.error('Network response was not ok');
//     //   throw new Error('Network response was not ok');
//     // }

//     const data = response.data; // Use response.data to get the JSON data
    
//     // Add a log to show the retrieved data
//     console.log('Fetched reservations:', data);
    
//     return data;
//   } catch (error) {
//     // Add a log for any errors that occur during the fetch
//     console.error('Error fetching reservations:', error);
//     return [];
//   }
// };


// // const fetchFavorites = async () => {
// //   try {
// //     const response = await axios.get(`http://localhost:4000/favorites`);
// //     if (!response.ok) {
// //       throw  new Error('Network response was not ok');
// //     }
// //     const data = await response.json();
// //     return data;
// //   } catch (error) {
// //     console.error('Error fetching favorites:', error);
// //     return [];
// //   }
// // };

// // const fetchReviews = async () => {
// //   try {
// //     const response = await axios.get(`http://localhost:4000/reviews`);
// //     if (!response.ok) {
// //       throw new Error('Network response was not ok');
// //     }
// //     const data = await response.json();
// //     return data;
// //   } catch (error) {
// //     console.error('Error fetching reviews:', error);
// //     return [];
// //   }
// // };

function Profile() {
  const { loginData, setLoginData } = useAuth()
  const navigate = useNavigate() 


  // console.log(loginData);
  // const [user, setCurrentUser] = useState(null);




//   const { data: reservations } = useQuery(['reservations'], () => fetchReservations(user?.id)); // Pass 'user?.id' to the function
//   // const { data: favorites } = useQuery(['favorites'], fetchFavorites);
//   // const { data: reviews } = useQuery(['reviews'], fetchReviews);
  
//   const storedToken = localStorage.getItem('accessToken'); // Retrieve the token from storage

//   useEffect(() => {
//     // Check if the token is available in storage
//     if (storedToken) {
//       // Retrieve the user ID from storage if needed
//       const userId = localStorage.getItem('currentUserId'); // Retrieve the user ID from storage if needed
//       console.log('user id :',userId)
//       // Set the current user in your state
//       setCurrentUser({ id: userId });

//       // Fetch reservations using the stored token and user ID
//       fetchReservations(userId, storedToken);
//     } else {
// // Handle the case where the token is not available
//       // console.error('Token not available. Please log in.');
//     }
//   }, [storedToken]);

//This is logout function
const Logout = () => {
  console.log(1234);
  sessionStorage.removeItem('token')
  navigate("/")
  
  //An empty string(loginData) is equal to false, 
  //so then i can log in by pressing the logout button 
  setLoginData('')
  
   }


  return (

    
    <div className='PR-card'>
      <h1>MIN SIDE</h1>
{/* Display Reservations */}

  <h2>Reservations</h2>
  <table>
    <thead>
      <tr>
        <th>Date & Time</th>
        <th>Show</th>
        <th>Scenes</th>
        <th>Amount</th>
        <th>Price</th>
        <th>Edit</th>
      </tr>
      {/* <p>Du er logget in på som:{loginData.user}</p> */}
    </thead>
    {/* <tbody>
      {reservations ? (
        reservations.map((reservation) => (
          <tr key={reservation.id}>
            <td>{reservation.id}</td>
            <td>{reservation.firstname}</td>
            {/* <td>{reservation.show}</td>
            <td>{reservation.scenes}</td>
            <td>{reservation.amount}</td>
            <td>{reservation.price}</td> */}
          {/* </tr>
        ))
      ) : (
        <tr>
          <td colSpan="6">Loading reservations...</td>
        </tr>
      )}
    </tbody> */} 
  </table>
  
  <div className="sb">
        <p>Du er logget ind</p>
        <br />
        <button onClick={() => Logout()}>Log ud</button>
      </div>
</div>


    
   
  );
}

export default Profile;
