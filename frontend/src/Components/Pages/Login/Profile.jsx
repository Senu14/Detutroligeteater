import React, { useEffect, useState } from 'react';
import { useQuery } from "@tanstack/react-query";
import axios from 'axios'
// import getCurrentUser from '../../../utils/getCurrentUser';
import './Profile.scss';

// i wasn't able to fetch the data of the user because i'm facing a problem with the token
//whenver i try to acces the token and get th id of the user from the token 
//it respond with error 403 not authorized and i don't know why because i'm destructing the token and 
//even with that he is not giving me the permision
//i need the token to get the id and get the data using that id
//it created more problems in other different pages 
//like eventDetails , Registration and posting a review page 
//whenver i try to post a new review it keep generating the erro 403 invalide token
//i need to acces the token to complete the functionalitys but with that error i've been stsack
//ps: another thing is that i tried to use jwt but when i install it on my pc it install some new dependecies for the package
//which creates a new problem for me and because of i wasn't able to use the jwt library to get the token


// Define the fetch functions before using them in useQuery hooks
const fetchReservations = async (userId, token) => {
  try {
    // Set up the headers with the token
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    const response = await axios.get(`http://localhost:4000/reservations/${userId}`, { headers });

    if (response.status !== 200) { // Check the status code for success (usually 200)
      // Add a log for network errors
      console.error('Network response was not ok');
      throw new Error('Network response was not ok');
    }

    const data = response.data; // Use response.data to get the JSON data
    
    // Add a log to show the retrieved data
    console.log('Fetched reservations:', data);
    
    return data;
  } catch (error) {
    // Add a log for any errors that occur during the fetch
    console.error('Error fetching reservations:', error);
    return [];
  }
};


const fetchFavorites = async () => {
  try {
    const response = await axios.get(`http://localhost:4000/favorites`);
    if (!response.ok) {
      throw  new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching favorites:', error);
    return [];
  }
};

const fetchReviews = async () => {
  try {
    const response = await axios.get(`http://localhost:4000/reviews`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching reviews:', error);
    return [];
  }
};

function Profile() {
  const [user, setCurrentUser] = useState(null);

  const { data: reservations } = useQuery(['reservations'], () => fetchReservations(user?.id)); // Pass 'user?.id' to the function
  // const { data: favorites } = useQuery(['favorites'], fetchFavorites);
  // const { data: reviews } = useQuery(['reviews'], fetchReviews);
  
  const storedToken = localStorage.getItem('accessToken'); // Retrieve the token from storage

  useEffect(() => {
    // Check if the token is available in storage
    if (storedToken) {
      // Retrieve the user ID from storage if needed
      const userId = localStorage.getItem('currentUserId'); // Retrieve the user ID from storage if needed
      console.log('user id :',userId)
      // Set the current user in your state
      setCurrentUser({ id: userId });

      // Fetch reservations using the stored token and user ID
      fetchReservations(userId, storedToken);
    } else {
      // Handle the case where the token is not available
      console.error('Token not available. Please log in.');
    }
  }, [storedToken]);



  return (
    <div className='PR-card'>
      <h1>Profile Page</h1>
{/* Display Reservations */}
<div className="RESERVATIONS">
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
    </thead>
    <tbody>
      {reservations ? (
        reservations.map((reservation) => (
          <tr key={reservation.id}>
            <td>{reservation.id}</td>
            <td>{reservation.firstname}</td>
            {/* <td>{reservation.show}</td>
            <td>{reservation.scenes}</td>
            <td>{reservation.amount}</td>
            <td>{reservation.price}</td> */}
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan="6">Loading reservations...</td>
        </tr>
      )}
    </tbody>
  </table>
</div>


      {/* Display Favorites */}
      <div className="FAVORITES">
        <h2>Favorites</h2>
        <table>
          {/* Render your favorites data here */}
        </table>
      </div>

      {/* Display Reviews */}
      <div className="REVIEWS">
        <h2>Reviews</h2>
        <table>
          {/* Render your reviews data here */}
        </table>
      </div>
    </div>
  );
}

export default Profile;
