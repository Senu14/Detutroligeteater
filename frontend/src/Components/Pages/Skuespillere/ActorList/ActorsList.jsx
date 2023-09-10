import React from 'react';
import './ActorsList.scss';
import { Link, useParams } from 'react-router-dom';



const ActorsList = ({item}) => {

  const {id} = useParams();
  return (
    
    <div className='Actors-card'>
   
    <div className='image'>
     <img src={`http://localhost:4000/Assets/Images/actors/${item.image}`} alt="actors" />
     </div>
     <div className="text">
     <h3>{item.name}</h3>
     <p>{item.description}</p>
    
     
    
     </div>
     
     
     
      <div className="Actors-button">
      <br />
      
      <button className="bts" type="submit">
      <Link to={`/actor/${item.id}`}>LÆS MERE</Link>
        </button>
     
    </div>
    </div>
    

    
  )
}

export default ActorsList