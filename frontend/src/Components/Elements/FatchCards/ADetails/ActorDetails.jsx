import React, { useEffect, useState } from 'react';
import './ActorsDetails.scss';
import { useParams } from 'react-router';
import ActorCard from './ActorCard';
import axios from 'axios';

function ActorDetails() {
  //useParams..?
    const {id} = useParams();
    const [data, setData] = useState({});
    const [Actor, setActor] = useState([]);
    useEffect(()=>{
        const fetchActorDetails = async ()=>{
            try{
                const response = await axios.get(`http://localhost:4000/actors/${id}`)
                
                console.log(response)
// const fetchedData = await response.json();
                setData(response.data);
            }catch (err) {
                console.log(err)
            }
        }

        fetchActorDetails();
    },[id])

    return (

    <div className='ACard'>
      <h1>Skuespillere</h1>
      {data && (
        <>
          <div className='AD-image'>
            {data.image && 
            (
              <img
                src={require(`../../../../Assets/Images/actors/${data.image}`)} alt="Acrors"
                
              />
            )}
           
            </div>
            <div className='list'>
      
      
       {
        (data, id) => {
          return <ActorCard key={id} item={{  description: data.description, name: data.name}} id={data.id} />;
        }
      }

      
    </div>
            
      <div className="Actors-button">
      <br />
      <button className="bts" type="submit">LÆS MERE</button>
      
    </div>
    </>
            
      )}
            </div>
      )
};

export default ActorDetails