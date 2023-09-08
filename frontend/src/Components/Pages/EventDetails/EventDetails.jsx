import React, { useEffect, useState } from 'react'
import './EventDetails.scss'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import axios from 'axios'


const formatEventDate = (startDate, stopDate) => {
  const options = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  };

  const formattedStartDate = new Date(startDate).toLocaleDateString('da-DK', options);
  const formattedStopDate = new Date(stopDate).toLocaleDateString('da-DK', options);

  return `${formattedStartDate} - ${formattedStopDate}`;
};

function EventDetails() {
  //useParams..?
    const {id} = useParams();
    const [data, setData] = useState({});
    const [eventDetails, setEventDetails] = useState(null);
    const [actorImages, setActorImages] = useState([]);
    const numberOfActorImages = 5;

    useEffect(()=>{
        const fetchEventDetails = async ()=>{
            try{
                const response = await axios.get(`http://localhost:4000/events/${id}`)
                setData(response.data);
              }
            catch (err) {
                console.log(err)
            }
        }


        fetchEventDetails();
    },[id])



    return (

    <div className='ED-card'>
      
      {data.image && 
            // data.title && data.name && data.startdate && data.stopdate && data.price && data.description && 
            (
              <img
                src={require(`../../../Assets/Images/events/large/${data.image}`)}
                alt=""
              />
            )}

      {data && (
          <div className='ED-image'>

           <h5>{formatEventDate(data.startdate, data.stopdate)}</h5>
            {/* <h2>duration: {data.duration_minutes}</h2> */}
            <h2>price: {data.price}</h2>
             <h1>{data.title}</h1>
             <div className='More'>
      
        <Link to="/ForestillingerEvents"><button type="submit">SE ALLE FORESTILLINGER</button></Link>
        </div>
      <p className='paragraph'>{data.description}</p> 
      <br />

      <h5>ANMELDELSER</h5>
      <h5>Sammy Samuelsen</h5>
      <h5>10.07.2022</h5>
      <p className='paragraph'>{data.description}</p>
      <br />
      
      <h5>Gitte Hansen</h5>
      <h5>10.07.2022</h5>
      <p className='paragraph'>Dette var en forestilling lige efter min smag. Den kan varmt anbefales!</p>

      <form className='EDF'> 
      <p className='whiet'>Skriv en anmeldelse</p>
      <p className='whiet'>Du skal være logget ind for at skrive en anmeldelse</p>
      {/* onSubmit={handleSubmit}  */}
            <div className="options">

          <input type="text" name="username" 
          //  onChange={(e) => setUsername(e.target.value)}
         />
          <input name="password" type="password"
          //  onChange={(e) => setPassword(e.target.value)}
         />
         <div className="header__menu" >
          <button className="items" type="submit">login</button>
          </div>
         </div>
         </form>
            
            

            
            {/* <h2>genre name{data.genre.name}</h2>
            <h2>stage name{data.stage.name}</h2>  */}


       
            </div>
            
            
      )}
            </div>
      )
};

export default EventDetails;