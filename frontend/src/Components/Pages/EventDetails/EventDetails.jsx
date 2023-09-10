import React, { useEffect, useState } from 'react';
import './EventDetails.scss';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ReviewForm from '../../Elements/FatchCards/WReview/ReviewForm';

const formatEventDate = (startDate, stopDate) => {
  const options = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  };

  const formattedStartDate = new Date(startDate).toLocaleDateString('da-DK', options);
  const formattedStopDate = new Date(stopDate).toLocaleDateString('da-DK', options);

  return `${formattedStartDate} - ${formattedStopDate}`;
};

// Function to generate actor image URLs
const getActorImageUrl = (actorName) => {
  // Replace spaces in actor name with underscores and append ".jpg" (or the appropriate file extension)
  const imageName = actorName.replace(/\s+/g, '_') + '.jpg';
  return `http://localhost:4000/Assets/Images/actors/${imageName}`;
};

function EventDetails() {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [eventDetails, setEventDetails] = useState(null);
  const [actorImages, setActorImages] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [authToken, setAuthToken] = useState(null);
  const [actorData, setActorData] = useState([]);

  useEffect(() => {
    // Retrieve the authentication token from local storage
    const authToken = localStorage.getItem('authToken');
    setAuthToken(authToken);

    // Retrieve the user information from local storage
    const userString = localStorage.getItem('currentUser');
    const user = JSON.parse(userString);
    setCurrentUser(user);

    // Fetch actors
    const getData = async () => {
      try {
        const eventData = await axios.get(
          `http://localhost:4000/events/${id}`
        );
        const actorDataRes = await axios.get(
          `http://localhost:4000/actors?attributes=id, name, image`
        );

        setData(eventData.data);
        setActorData(actorDataRes.data);
      } catch (err) {
        console.error(err);
      }
    };
    getData();

    // Fetch event details and reviews
    const fetchEventDetails = async () => {
      try {
        const [eventResponse, reviewsResponse] = await Promise.all([
          axios.get(`http://localhost:4000/events/${id}`, {
            headers: {
              Authorization: `Bearer ${authToken}`, // Include the auth token in the request headers
            },
          }),
          axios.get(`http://localhost:4000/reviews/${id}`, {
            headers: {
              Authorization: `Bearer ${authToken}`, // Include the auth token in the request headers
            },
          }),
        ]);

        setData(eventResponse.data);
        setReviews(reviewsResponse.data);

        // Add a console log to check the fetched reviews
        console.log('Fetched reviews:', reviewsResponse.data);
      } catch (err) {
        console.log(err);
      }
    };

    // Call the fetchEventDetails function
    fetchEventDetails();
  }, 
  [id, authToken]);


  return (
    <div className='ED-card'>
      {data.image && (
        <img
          src={require(`../../../Assets/Images/events/large/${data.image}`)}
          alt="imgEventDetails"
        />
      )}

      {data && (
        <div className='ED-image'>
          <h5>{formatEventDate(data.startdate, data.stopdate)}</h5>
          <h2>price: {data.price}</h2>
          <h1>{data.title}</h1>
          <div className='More'>
            <div className='buyT'>
              <Link to="/Buy">
                <button type="submit">KØB BILLET</button>
              </Link>
            </div>
          </div>
          {data.genre ? <p>{data.genre.name}</p> : null}
          <br />
          <div className='paragraph'>
            <p className='para'>{data.description}</p>
            <br />
            <p className='para'>Varighed ca. {data.duration_minutes} minutter</p>
          </div>
          <br />
          <span>
            <h4>Medvirkende</h4>
          </span>
          <br />

          {/* ACTORS SECTION START */}
          <section className='Actors'>
          {actorData.slice(0, 5).map((actor) => (
              <article  key={actor.id}>
                <figure>
                  {actor.image && (
                    <img
                      src={require(`../../../Assets/Images/actors/${actor.image}`)}
                      alt="imagesofactors"
                    />
                  )}
                </figure>
                <h4>{actor.name}</h4>
              </article>
            ))}
          </section>

          <br />

          {reviews.map((review) => (
            <div key={review.id}>
              <h5>{review.User.firstname} {review.User.lastname}</h5>
              <h5>{review.created_at}</h5>
              <p className='paragraph'>{review.subject}</p>
            </div>
          ))}

          {currentUser ? (
            <ReviewForm event_id={id} />
          ) : (
            // User is not logged in, show the review form
            <form className='EDF'>
              <p className='whiet'>Skriv en anmeldelse</p>
              <p className='whiet'>Du skal være logget ind for at skrive en anmeldelse</p>
              {/* onSubmit={handleSubmit}  */}
              <div className="options">
                <input type="text" name="username" />
                <input name="password" type="password" />
                <div className="header__menu">
                  <button className="items" type="submit">login</button>
                </div>
              </div>
            </form>
          )}
        </div>
      )}
    </div>
  );
}

export default EventDetails;
