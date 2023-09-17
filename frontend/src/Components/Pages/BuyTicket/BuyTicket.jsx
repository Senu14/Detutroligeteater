// import React, { useState } from 'react';
// import './BuyTicket.scss'
// import { Link, useParams } from 'react-router-dom';
// import { useForm } from "react-hook-form"
// import axios from 'axios'
// import { useAuth} from '../../Providers/AuthProvider';
// import GetTI from '../SeatPicker/GetTI';
// // import { useHistory } from 'react-router-dom';


// const BuyTicket = () => {
//   const { loginData } = useAuth()
//   const [data, setData] = useState({});
//   const { register, handleSubmit, formState: { errors } } = useForm()
//   const { event_id } = useParams()
// //   const history = useHistory();

//   const onSubmit = async formObject => {

//   const formData = new URLSearchParams()
//   formData.append('event_id', event_id)
// 		formData.append('firstname', formObject.firstname)
// 		formData.append('lastname', formObject.lastname)
// 		formData.append('address', formObject.address)
// 		formData.append('zipcode', formObject.zipcode)
// 		formData.append('city', formObject.city)
// 		formData.append('email', formObject.email)
// 		formData.append('seats[0]', 1)
// 		formData.append('seats[1]', 2)
// 		console.log(formData);

// 	};
	
 

   
// return (
//   <>
  
//     <div className="container">
//     <h2>Køb billet</h2>
// 	 <hr />
	
   
   
// <hr />
       

      
	
//       <form className="Buy-Form" onSubmit={handleSubmit(onSubmit)}>
//         <div className="Buy-group">
//           <label htmlFor="firstname">Fornavn</label>
//           <input id="firstname" {...register('firstname', 
// 				{required: 'Indtaste dit fornavn', 
// 				pattern: { 
// 				value: /^[A-Za-z]+$/i, 
// 				message: 'Indtaste et gyldigt navn'
// 				}  
// 				})} />
//       {errors.firstname && <span>{errors.firstname.message}</span>}
//         </div>

//         <div className="Buy-group">
//         <label htmlFor="lastname">Efternavn:</label>
// 	   <input id="lastname" {...register('lastname', 
// 				{required: 'Indtaste dit efternavn', 
// 				pattern: { 
// 				value: /^[A-Za-z]+$/i, 
// 				message: 'Indtaste et gyldigt navn'
// 				}  
// 				})} />
// 			{errors.lastname && <span>{errors.lastname.message}</span>}
//         </div>

//         <div className="Buy-group">
//         <label htmlFor="address">VEJNAVN & NR:</label>
// 	   <input id="address" {...register('address', 
// 				{required: 'Indtaste din adresse'
// 				})} />
// 			{errors.address && <span>{errors.address.message}</span>}
//         </div>

//         <div className="Buy-group">
//         <label htmlFor="zipcode">Postnr & BY:</label>
// 	   <input id="zipcode" {...register('zipcode', 
// 			{required: 'Indtaste dit postnummer',
// 			pattern: { 
// 			value: /^[0-9]+$/i, 
// 			message: 'Indtaste et gyldigt postnummer'									
// 			},
// 			min: {value: 999,
// 			message: 'Postnummer kan ikke være mindre end 1000'
// 			},
// 			max: {value: 9990,
// 			message: 'Postnummer kan ikke være større end 9990'
// 			}})} />
// 		{errors.zipcode && <span>{errors.zipcode.message}</span>}


//      <div className="min-para">
//           <p>ALLE FELTER SKAL UDFYLDES</p>
//      </div>
	
//      </div> 

// 	<div className='BuyB'>
// 		<button type='submit'>GODKEND BESTILLING</button>
// 	</div>
//      </form>
	
//      </div>
    
//     </>
  
//      );
//   };
  
//   export default BuyTicket;
      
     
//       {/* <div>

//         <p>VÆLG SIDDEPLADSER</p>

          
//       </div>
//     </div>
//     <div className="approve"> */}
//      {/* <button><Link to={`/thank`}>GODKEND BESTILLING</Link></button> */}
   
import React from "react";
import "./BuyTicket.scss";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateFormObject } from "../../../redux/actions";

const BuyTicket = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const formObject = useSelector((state) => state.formObject);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateFormObject({ ...formObject, [name]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    console.log("Submit button clicked.");
    console.log("Form data:", formObject);
    // Submit the form data or perform any other actions here
  };

  return (
    <>
      <div className="container">
        <h2>Køb billet</h2>
        <hr /> <hr />
        <form className="Buy-Form" onSubmit={onSubmit}>
          <div className="Buy-group">
            <label htmlFor="firstname">Fornavn</label>
            <input
              id="firstname"
              name="firstname"
              value={formObject.firstname}
              onChange={handleInputChange}
            />
          </div>
          <div className="Buy-group">
            <label htmlFor="lastname">Efternavn:</label>
            <input
              id="lastname"
              name="lastname"
              value={formObject.lastname}
              onChange={handleInputChange}
            />
          </div>
          <div className="Buy-group">
            <label htmlFor="address">VEJNAVN & NR:</label>
            <input
              id="address"
              name="address"
              value={formObject.address}
              onChange={handleInputChange}
            />
          </div>{" "}
          <div className="Buy-group">
            <label htmlFor="city">city:</label>
            <input
              id="city"
              name="city"
              value={formObject.city}
              onChange={handleInputChange}
            />
          </div>{" "}
          <div className="Buy-group">
            <label htmlFor="seats">seats:</label>
            <input
              id="seats"
              name="seats"
              value={formObject.seats}
              onChange={handleInputChange}
            />
          </div>
          <div className="Buy-group">
            <label htmlFor="zipcode">Postnr & BY:</label>
            <input
              id="zipcode"
              name="zipcode"
              value={formObject.zipcode}
              onChange={handleInputChange}
            />
            <div className="min-para">
              <p>ALLE FELTER SKAL UDFYLDES</p>
            </div>
          </div>
          <div className="BuyB">
            <Link to={`/confirme/${id}`}>
              <button type="submit">GODKEND BESTILLING</button>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default BuyTicket;
