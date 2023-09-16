import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useAuth } from '../../../Providers/AuthProvider';

function ReviewForm({ event_id,fetchEventDetails}) {
    const [subject, setSubject] = useState('');
    const [comment, setComment] = useState('');
    const [reviews, setReviews] = useState('');
    const { loginData, setLoginData } = useAuth();


    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log('Submit Review button clicked');
    
      try {
        // Send a POST request to create a review with the user's token in the headers
        const response = await axios.post('http://localhost:4000/reviews', {
          event_id,
          num_stars: 0, // Include the user_id
          subject,
          comment,
          date : new Date(),
        }, {
          headers: {
            authorization: `Bearer ${loginData}`,
          },
        });
        console.log(response)
        setComment("");
        setSubject("");
        fetchEventDetails();
        // Rest of your code...
      } catch (err) {
        console.error(err);
        // Handle error if needed
      }
    };
    
      
    

    return (
        <form className='EDF'onSubmit={handleSubmit} >
            <h5>Write a Review</h5>
            <div className="options1">
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                />
            </div>
            <div className="options">
                <label htmlFor="comment">Comment:</label>
                <textarea
                    id="comment"
                    name="comment"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                ></textarea>
            </div>
            <div className="EDD">
            <button type="submit">Send
            {/* <Link to={`/Profile`}>Send</Link> */}
      </button>
      </div>
        </form>
    );
}

export default ReviewForm;
