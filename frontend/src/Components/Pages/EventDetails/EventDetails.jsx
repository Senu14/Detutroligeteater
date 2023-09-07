import React, { useEffect, useState } from 'react'
import './EventDetails.scss'
import { useParams } from 'react-router'
import axios from 'axios'

function EventDetails() {
  //useParams..?
    const {id} = useParams();
    const [data, setData] = useState({});
    const [eventDetails, setEventDetails] = useState(null);

    useEffect(()=>{
        const fetchEventDetails = async ()=>{
            try{
                const response = await axios.get(`http://localhost:4000/events/${id}`)
                // const actorDataRes = await axios.get(
                //     `http://localhost:4000/actors?attributes=id, name, image`
                //   );
                console.log('here it is')
                // const fetchedData = await response.json();
                setData(response.data);
            }catch (err) {
                console.log(err)
            }
        }

        fetchEventDetails();
    },[id])

    return (

    <div className='ED-card'>
      {data && (
          <div className='ED-image'>
            {data.image && 
            // data.title && data.name && data.startdate && data.stopdate && data.price && data.description && 
            (
              <img
                src={require(`../../../Assets/Images/events/large/${data.image}`)}
                alt=""
              />
            )}
            </div>
      )}
            </div>
      )
};

export default EventDetails