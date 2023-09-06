import React from 'react';
import './ActorsList.scss';


const ActorsList = ({item}) => {
  return (
    <div className='Actors-card'>
    
     <img src={`http://localhost:4000/Assets/Images/actors/${item.image}`} alt="actors" />
     <h3>{item.name}</h3>
     <p>{item.description}</p>
    
     
     
     
      <div className='Actors-button'>
      <br />
      <button className="bts" type="submit">LÆS MERE</button>
      
    </div>
    </div>
    
  )
}

export default ActorsList