import React, { useEffect, useState } from 'react';
import EventList from '../../Elements/FatchCards/Events/EventList';
import './ForestillingerEvents.scss';
import  HeroWrapper  from '../../Elements/HeroWrapper/HeroWrapper';

const ForestillingerEvents = () => {
  const [event, setEvent] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch ('http://localhost:4000/events?attributes=id%2Ctitle%2Cimage%2Cstartdate%2Cstopdate&limi');
        const jsonData = await response.json();
        setEvent(jsonData.slice(0,7));
      }catch (error) {
        console.log('error fetching data:', error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
    <HeroWrapper />
    <div className='Container-list'>
      
      {
        event.map((events, index) => {
          return <EventList key={index} item={{image: events.image, startdate: events.startdate, stopdate: events.stopdate, title:events.title, name:events.genre}}/>
          
        })
        
      }
      
    </div>
    </>
  );
};

export default ForestillingerEvents