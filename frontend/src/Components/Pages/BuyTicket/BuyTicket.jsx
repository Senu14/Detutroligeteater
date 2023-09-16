import React, { useState } from 'react';
import './BuyTicket.scss'
import { Link, useParams } from 'react-router-dom';
import { useForm } from "react-hook-form"
import axios from 'axios'
import { useAuth} from '../../Providers/AuthProvider';

const BuyTicket = () => {
  const { loginData } = useAuth()
  const [data, setData] = useState({});
  const { register, handleSubmit, formState: { errors } } = useForm()
  const { event_id } = useParams()

  const formSubmit = async formObject => {
        const api_endpoint = 'http://localhost:4000/reservations'

 
  const formData = new URLSearchParams()
  formData.append('event_id', event_id)
		formData.append('firstname', formObject.firstname)
		formData.append('lastname', formObject.lastname)
		formData.append('address', formObject.address)
		formData.append('zipcode', formObject.zipcode)
		formData.append('city', formObject.city)
		formData.append('email', formObject.email)
		formData.append('seats[0]', 1)
		formData.append('seats[1]', 2)
    //console.log(...formData);

    const options = {
			headers: {
				Authorization: `Bearer ${loginData.access_token}`,
			},
		}

    try {
      const response = await axios.post(`http://localhost:4000/reservations`, formData, options)
      if(response.data) {
            console.log(response.data);
      }
         
    }catch (error) {
      console.log(error);
      
    }
      
  };

   
return (
  <>
    <div className="container">
    <h2>Køb billet</h2>
	 <hr />
   
   
      <form className="BY-card" onSubmit={handleSubmit(formSubmit)}>
        <div className="Buy-group">
          <label htmlFor="firstname">Fornavn</label>
          <input id="firstname" {...register('firstname', 
				{required: 'Indtaste dit fornavn', 
				pattern: { 
				value: /^[A-Za-z]+$/i, 
				message: 'Indtaste et gyldigt navn'
				}  
				})} />
      {errors.firstname && <span>{errors.firstname.message}</span>}
        </div>

        <div className="Buy-group">
        <label htmlFor="lastname">Efternavn:</label>
	   <input id="lastname" {...register('lastname', 
				{required: 'Indtaste dit efternavn', 
				pattern: { 
				value: /^[A-Za-z]+$/i, 
				message: 'Indtaste et gyldigt navn'
				}  
				})} />
			{errors.lastname && <span>{errors.lastname.message}</span>}
        </div>

        <div className="Buy-group">
        <label htmlFor="address">VEJNAVN & NR:</label>
	   <input id="address" {...register('address', 
				{required: 'Indtaste din adresse'
				})} />
			{errors.address && <span>{errors.address.message}</span>}
        </div>

        <div className="Buy-group">
        <label htmlFor="zipcode">Postnr & BY:</label>
	   <input id="zipcode" {...register('zipcode', 
			{required: 'Indtaste dit postnummer',
			pattern: { 
			value: /^[0-9]+$/i, 
			message: 'Indtaste et gyldigt postnummer'									
			},
			min: {value: 999,
			message: 'Postnummer kan ikke være mindre end 1000'
			},
			max: {value: 9990,
			message: 'Postnummer kan ikke være større end 9990'
			}})} />
		{errors.zipcode && <span>{errors.zipcode.message}</span>}

</div>
     <div className="min-para">
          <p>ALLE FELTER SKAL UDFYLDES</p>
     </div>
	
     </form>
      {/* {data.image && (
        <img
          src={require(`../../../Assets/Images/events/medium/${data.image}`)}
          alt="imgEventDetails"
        />
      )} */}
<hr />
       

      
	
      <form className="Buy-Form" onSubmit={handleSubmit(formSubmit)}>
        <div className="Buy-group">
          <label htmlFor="firstname">Fornavn</label>
          <input id="firstname" {...register('firstname', 
				{required: 'Indtaste dit fornavn', 
				pattern: { 
				value: /^[A-Za-z]+$/i, 
				message: 'Indtaste et gyldigt navn'
				}  
				})} />
      {errors.firstname && <span>{errors.firstname.message}</span>}
        </div>

        <div className="Buy-group">
        <label htmlFor="lastname">Efternavn:</label>
	   <input id="lastname" {...register('lastname', 
				{required: 'Indtaste dit efternavn', 
				pattern: { 
				value: /^[A-Za-z]+$/i, 
				message: 'Indtaste et gyldigt navn'
				}  
				})} />
			{errors.lastname && <span>{errors.lastname.message}</span>}
        </div>

        <div className="Buy-group">
        <label htmlFor="address">VEJNAVN & NR:</label>
	   <input id="address" {...register('address', 
				{required: 'Indtaste din adresse'
				})} />
			{errors.address && <span>{errors.address.message}</span>}
        </div>

        <div className="Buy-group">
        <label htmlFor="zipcode">Postnr & BY:</label>
	   <input id="zipcode" {...register('zipcode', 
			{required: 'Indtaste dit postnummer',
			pattern: { 
			value: /^[0-9]+$/i, 
			message: 'Indtaste et gyldigt postnummer'									
			},
			min: {value: 999,
			message: 'Postnummer kan ikke være mindre end 1000'
			},
			max: {value: 9990,
			message: 'Postnummer kan ikke være større end 9990'
			}})} />
		{errors.zipcode && <span>{errors.zipcode.message}</span>}


     <div className="min-para">
          <p>ALLE FELTER SKAL UDFYLDES</p>
     </div>
	
     </div> 

     </form>
	<div className='BuyB'>
		<button>GODKEND BESTILLING</button>
	</div>
	
     </div>
    
    </>
  
     );
  };
  
  export default BuyTicket;
      
     
      {/* <div>

        <p>VÆLG SIDDEPLADSER</p>

          
      </div>
    </div>
    <div className="approve"> */}
     {/* <button><Link to={`/thank`}>GODKEND BESTILLING</Link></button> */}
   