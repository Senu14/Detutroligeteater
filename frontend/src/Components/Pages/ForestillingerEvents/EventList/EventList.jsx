
import React from 'react';
import './EventList.scss';
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

const EventList = ({ item }) => {
  return (
   
<div className='list-card'>
     {/* Link to the detail page */}
      <img src={`http://localhost:4000/Assets/Images/events/small/${item.image}`} alt="events" />
      <h3>{item.title}</h3>
      <h5>{formatEventDate(item.startdate, item.stopdate)}</h5>
      <div className='list-button'>
        <br />
        <button className="bt1" type="submit">
        <Link to={`/event/${item.id}`} >
          LÆS MERE
          </Link>
          </button>
          
        <br />
        <button className="bt2" type="submit">
        <Link to={`/buy`} >
        KØB BILLET
          </Link> 
       </button>
      </div>
      </div>
    
  );
};

export default EventList;