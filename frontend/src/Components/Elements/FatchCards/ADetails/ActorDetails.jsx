import React, { useEffect, useState } from 'react';
import './ActorsDetails.scss';
import { useParams } from 'react-router';
import axios from 'axios';

function ActorDetails() {
  //useParams..?
    const {id} = useParams();
    const [data, setData] = useState({});
    const [ActorDetails, setActorDetails] = useState(null);
    useEffect(()=>{
        const fetchActorDetails = async ()=>{
            try{
                const response = await axios.get(`http://localhost:4000/actors/${id}`)
                
                console.log('here it is')
// const fetchedData = await response.json();
                setData(response.data);
            }catch (err) {
                console.log(err)
            }
        }

        fetchActorDetails();
    },[id])

    return (

    <div className='ED-card'>
      <h2>Skuespillere</h2>
      {data && (
        <>
          <div className='ED-image'>
            {data.image && 
            (
              <img
                src={require(`../../../../Assets/Images/actors/${data.image}`)} alt="Acrors"
                
              />
            )}
            <h1>this is the acotr id : {id}</h1>
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