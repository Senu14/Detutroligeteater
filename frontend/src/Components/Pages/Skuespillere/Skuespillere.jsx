import React, { useEffect, useState } from 'react';
import ActorsList from '../../Elements/FatchCards/ActorsList';
import './Skuespillere.scss';

const Skuespillere = () => {
  const [actors, setactors] = useState([]);

  useEffect(() => {
    const fetchUrl = async () => {
      try {
        const response = await fetch ('http://localhost:4000/actors?orderby=name&dir=desc&limit=4&attributes=id,image,name,description');
        const jsonData = await response.json();
        setactors(jsonData.slice(0,4));
      }catch (error) {
        console.log('error fetching url:', error);
      }
    };
    fetchUrl();
  }, []);
  return (
    <>
 
    <div className='Actors-list'>
      
      {
        actors.map((actors, index) => {
          return <ActorsList key={index} item={{image: actors.image, description: actors.description, name:actors.name}}/>
          
        })
        
      }
      
    </div>
    </>
  );
};

export default Skuespillere