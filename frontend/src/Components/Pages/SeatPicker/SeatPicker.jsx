import React from 'react'
import './SeatPicker.scss'
import { useState } from 'react';

function SeatPicker() {
  const[ value, setValue]  = useState([]);
  return (
    <>
     <title>Movie Seat Booking</title>
      
         <div class="movie-container">
           <select id="movie">
             <option value="320"></option>
             <option value="250"></option>
             <option value="260"></option>
           </select>
         </div>
     
         
         <div class="container">
           <div class="screen"></div>
     
           <div class="row">
             <div class="seat"></div>
             <div class="seat"></div>
             <div class="seat"></div>
             <div class="seat"></div>
             <div class="seat"></div>
             <div class="seat"></div>
             <div class="seat"></div>
             <div class="seat"></div>
           </div>
     
           <div class="row">
             <div class="seat"></div>
             <div class="seat"></div>
             <div class="seat"></div>
             <div class="seat "></div>
             <div class="seat "></div>
             <div class="seat"></div>
             <div class="seat"></div>
             <div class="seat"></div>
           </div>
           <div class="row">
             <div class="seat"></div>
             <div class="seat"></div>
             <div class="seat"></div>
             <div class="seat"></div>
             <div class="seat"></div>
             <div class="seat"></div>
             <div class="seat "></div>
             <div class="seat "></div>
           </div>
           <div class="row">
             <div class="seat"></div>
             <div class="seat"></div>
             <div class="seat"></div>
             <div class="seat"></div>
             <div class="seat"></div>
             <div class="seat"></div>
             <div class="seat"></div>
             <div class="seat"></div>
           </div>
           <div class="row">
             <div class="seat"></div>
             <div class="seat"></div>
             <div class="seat"></div>
             <div class="seat "></div>
             <div class="seat "></div>
             <div class="seat"></div>
             <div class="seat"></div>
             <div class="seat"></div>
           </div>
           <div class="row">
             <div class="seat"></div>
             <div class="seat"></div>
             <div class="seat"></div>
             <div class="seat"></div>
             <div class="seat"></div>
             <div class="seat"></div>
             <div class="seat"></div>
             <div class="seat"></div>
           </div>
         </div>
         <p class="text">
          </p>
          <script src="script.js"></script>
         </>
          
            )
  }
     
        
export default SeatPicker