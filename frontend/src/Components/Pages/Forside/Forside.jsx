import React, { useEffect, useState } from 'react';
import EventCard from '../FatchCards/EventCard';
import './Forside.scss';
import  HeroWrapper  from '../../Elements/HeroWrapper/HeroWrapper';

const Forside = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch ('http://localhost:4000/events');
        const jsonData = await response.json();
        setData(jsonData.slice(0,7));
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
          return <EventCard key={index} item={{title:events.title,name: events.name}}/>
        })
      }
    </div>
    </>
  );
};

export default Forside