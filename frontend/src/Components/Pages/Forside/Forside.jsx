import React, { useEffect, useState } from 'react';
import EventCard from './ForsideEventCards/EventCard';
import './Forside.scss';
import  HeroWrapper from '../../App/Layout/HeroWrapper/HeroWrapper';
import { Link } from 'react-router-dom';
import { useAuth } from '../../Providers/AuthProvider';



const Forside = () => {
  


  const [data, setData] = useState([]);
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch ('http://localhost:4000/events/?orderby=duration_minutes&limit=3&attributes=id,title,image%2Cstartdate%2Cstopdate');
        const jsonData = await response.json();
        setData(jsonData.slice(0,3));
      }catch (error) {
        console.log('error fetching data:', error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
    <HeroWrapper />
   
    <div className='Container'>
      
      {
        data.map((events, index) => {
          return <EventCard key={index} item={{id:events.id, image: events.image, title:events.title, name:events.genre.name, startdate:events.startdate, stopdate:events.stopdate, name:events.stage.name}}/>
          
        })
        
      }
      <div className='see-More'>
        <br />
        <button type="submit">
        <Link to="/ForestillingerEvents">
          SE ALLE FORESTILLINGER
          </Link>
          </button>
        </div>
    
    </div>
    </>
  );
};

export default Forside