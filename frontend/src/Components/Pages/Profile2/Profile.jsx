import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext, AuthProvider, useAuth } from '../../Providers/AuthProvider';

const Profile = () => {
  const navigate = useNavigate();
  const [reservations, setReservations] = useState([]);
  const { loginData, setLoginData } = useAuth();

  console.log('login :', loginData)

  const Logout = () => {
    sessionStorage.removeItem('token');
    navigate("/");
    setLoginData('');
  };

  useEffect(() => {
    // Fetch reservations
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/events/`)
        // , {
        //   headers: {
        //     Authorization: `Bearer ${loginData}`,
        //   },
        // }  
        // );
        console.log("events data:", response.data);
        let reserv = [];
        for (let i=0;i<response.data.length;i++){
          console.log(response.data[i].id);
          let id = response.data[i].id;
          let resp = await axios.get(`http://localhost:4000/reservations/${id}`)
          console.log(resp.data);
          if(resp.data){
            reserv.push(resp.data);
          }
        } 
        
        setReservations(reserv);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };
    
    fetchData();
  }, [loginData]);

  return (
    <div className='thank-card'>
      {!loginData || !loginData.username ? (
        <>
          <h2>Min Side</h2>
          {reservations.map((reservation) => (
            <div key={reservation.id}>
              <h3>{reservation.firstname}</h3>
              <h3>{reservation.lastname}</h3>
              <h3>{reservation.email}</h3>
              <h3>{reservation.address}</h3>
              <h3>{reservation.zipcode}</h3>
              <h3>{reservation.event.title}</h3>
              <h3>{reservation.event.price}DKK</h3>
            </div>
          ))}
        </>
      ) : (
        // Vis logindata hvis bruger er logget ind
        <div>
          <p>
          {`Du er logget ind som ${loginData.user.firstname} ${loginData.user.lastname} `}
          </p>
          <button onClick={Logout}>Log ud</button>
        </div>
      )}
     
    </div>
    
  );
  
      }
export default Profile;
