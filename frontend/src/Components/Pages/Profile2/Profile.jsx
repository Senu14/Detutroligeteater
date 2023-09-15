import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Profile.scss'
import { AuthContext, AuthProvider, useAuth } from '../../Providers/AuthProvider';


const formatEventDate = (startDate) => {
  const options = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    time: 'numeric',
  };

  const formattedStartDate = new Date(startDate).toLocaleDateString('da-DK', options);
  

  return `${formattedStartDate}`;
};




const Profile = ({review}) => {
  const navigate = useNavigate();
  const [reviews, setreviews] = useState([]);
  const { loginData, setLoginData } = useAuth();

  console.log('login :', loginData)

 

  useEffect(() => {
    // Fetch reviews
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/events`)
     

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
        
        setreviews(reserv);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };
    
    fetchData();
  }, [loginData]);

 
//This is logout function
const Logout = () => {
  // Removes login info from session storage
      sessionStorage.removeItem("token")
  //An empty string(loginData) is equal to false, 
  //so then i can log in by pressing the logout button 
      setLoginData("")
      
    }

  


  return (
    <div className='PR-card'>
        <>
          <h2>Min Side</h2>
          {reviews && reviews.map((review) => (
            <div className="Like"key={review.id}>
              <div className="Review-card" >
                <h4>DATO & TID</h4>
                <h3>{formatEventDate(review.created_at)}</h3>
              </div>
        
              <div className="Review-card">
              <h4>FORESTILLING</h4>
              <h3>{review.event.title}</h3>
              </div>

              <div className="Review-card">
              <h4>SCENE</h4>
              <h3>{review.event.stage.name}</h3> 
              </div>
             
              <div className="Review-card">
              <h4>ANTAL</h4>
              <h3>{review.event.event_id}</h3>
              </div>

              <div className="Review-card">
              <h4>PRIS</h4>
              <h3>{review.event.price}DKK</h3> 
              </div>

              <div className="Review-card">
                <h4>REDIGER</h4>
                </div>
              
                </div>
          ))}
        </>
     
    </div>
    
  );
  
      }
export default Profile;