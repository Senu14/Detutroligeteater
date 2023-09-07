import React from 'react';
import './EventList.scss';


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

const EDetailsCard = ({ item }) => {
  return (
    <div className='list-card'>
      <img src={`http://localhost:4000/Assets/Images/events/${item.image}`} alt="events" />
      
      <h3>{item.title}</h3>
      <h3>{item.name}</h3>
      <h3>{item.price}</h3>
      <p>{item.description}</p>

      <h5>{formatEventDate(item.startdate, item.stopdate)}</h5>

      <div className='EDetails-button'>
      
        <br />
        <button className="bt2" type="submit"> KØB BILLET</button>
      </div>
    </div>
  );
};

export default EDetailsCard;
