import React from 'react';
import './EventCard.scss';


const EventCard = ({item}) => {
  return (
    <div className='events-card'>
     <img src={item.image} alt="events" />
     <h3>{item.title}</h3>

    </div>
  )
}

export default EventCard