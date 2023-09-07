
import React, { useEffect, useState } from 'react';
import EDetailsCard from '../../Elements/FatchCards/Events/EDetailsCard';
import './EventDetails.scss';

const EventDetails = () => {
  const [event, setEvent] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch ('http://localhost:4000/events/4');
        const jsonData = await response.json();
        console.log(jsonData);
       
      }catch (error) {
        console.log('error fetching data:', error);
      }
    };
    fetchData();
  }, []);
  return (
    

    <div className='EDetailsCard-list'>
      {
        (events, index) => {
          return <EDetailsCard key={index} item={{image: events.image, description: events.description, name:events.name}}/>
          
        }
        
      }
      
      
      
    </div>
  
  );
};

export default EventDetails;