import React from 'react';
import './EventCard.scss';
import { Link } from 'react-router-dom';


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

const EventCard = ({item}) => {
  return (
      // <Link to={`/event/${item.id}`}  className='list-card'>
    <div className='events-card'>
    
    
     <img src={`http://localhost:4000/Assets/Images/events/small/${item.image}`} alt="events" />
     <div className="content">
     <p className="small-text-up">Stor scene</p>
     <h5 className="hero-date">{formatEventDate(item.startdate, item.stopdate)}</h5>
     <hr />
     <h3 className="title-hero">{item.title}</h3>
     {item.stage && item.stage.name && <h4>{item.stage.name}</h4>}
     {item.genre && item.genre.name && <h4>{item.genre.name}</h4>}
  

     </div>
     {/* <br/> */}
     
      <div className='event-button'>
      <br />
      <button className="custom-button1" type="submit">LÆS MERE</button>
      <br />
      <button className="custom-button2" type="submit"> 
      <Link to={`/Buy`}>KØB BILLET</Link>
      </button>
      
    </div>
    </div>
    // </Link>
  )
}

export default EventCard