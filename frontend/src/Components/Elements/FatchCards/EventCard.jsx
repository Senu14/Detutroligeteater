import React from 'react';
import './EventCard.scss';


const EventCard = ({item}) => {
  return (
    <div className='events-card'>
      
     <img src={`http://localhost:4000/Assets/Images/events/small/${item.image}`} alt="events" />
     <h3>{item.title}</h3>
     <h2>{item.genre}</h2>
     
      <div className='event-button'>
      <br />
      <button className="custom-button1" type="submit">LÆS MERE</button>
      <br />
      <button className="custom-button2" type="submit"> KØB BILLET</button>
    </div>

    </div>
  )
}

export default EventCard