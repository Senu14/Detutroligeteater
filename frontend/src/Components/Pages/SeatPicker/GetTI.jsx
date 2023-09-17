import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


const GetTI = () => {
    const [buyTicket, setbuyTicket] = useState([])
    const {event_id} = useParams()

    useEffect(() => {
        const getData = async () => {
            try{
                const result = await axios.get(`http://localhost:4000/events/${event_id}`)
                setbuyTicket(result.data)
            } catch(err) {
                console.error(err)
            }
        }
        getData()
    }, [event_id])
   return (
    <div>
    {buyTicket.image && (
      <img
        src={require(`../../../Assets/Images/events/large/${buyTicket.image}`)}
        alt="EventsImg"
      />
    )}
    <div>
      <article>
        <h3>{buyTicket.title}</h3>
        {buyTicket.stage ? <p>{buyTicket.stage.name}</p> : null}
       (buyTicket.startdate, false)
      </article>
    </div>
  </div>
  )
}

export default GetTI.jsx;