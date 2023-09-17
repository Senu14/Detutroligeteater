import React, { useEffect, useState } from 'react';
import ActorsList from './ActorList/ActorsList';
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
       <h2>Skuespillere</h2>
      
       {
        (actor, id) => {
          return <ActorsList key={id} item={{id: actor.id, image: actor.image, description: actor.description, name: actor.name}} id={actor.id} />;
        }
      }

      
    </div>
    </>
  );
};

export default Skuespillere