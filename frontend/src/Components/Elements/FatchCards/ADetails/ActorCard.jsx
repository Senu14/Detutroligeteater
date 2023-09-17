import React from 'react';
import './ActorCard.scss';
import { Link, useParams } from 'react-router-dom';



const ActorCard = ({item, id}) => {

  
  console.log("this is only id: ",id)
  const {acotr_id} = useParams();
  return (
    
    <div className='AD'>
   
    <div className='image'>
     <img src={`http://localhost:4000/Assets/Images/actors/${item.image}`} alt="actors" />
     <hr />
     </div>
     <div className="text">
     <h3>{item.name}</h3>
     
     <p>{item.description}</p>
     
    
     
    
     </div>
     
     
     
      <div className="Actors-button">
    
      
      <button type="submit">
      <Link to={`/actors/${id}`}>LÆS MERE</Link>
        </button>
     
    </div>
    </div>
    

    
  )
}

export default ActorCard