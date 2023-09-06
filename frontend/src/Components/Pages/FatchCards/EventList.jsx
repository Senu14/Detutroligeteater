import React from 'react';
import './EventList.scss';


const EventList = ({item}) => {
  return (
    <div className='list-card'>
    
     <img src={`http://localhost:4000/Assets/Images/events/small/${item.image}`} alt="events" />
     <h3>{item.title}</h3>
     <h5>{item.startdate}</h5>
     <h5>{item.stopdate}</h5>
     
     
     
      <div className='list-button'>
      <br />
      <button className="bt1" type="submit">LÆS MERE</button>
      <br />
      <button className="bt2" type="submit"> KØB BILLET</button>
    </div>
    </div>
    
  )
}

export default EventList