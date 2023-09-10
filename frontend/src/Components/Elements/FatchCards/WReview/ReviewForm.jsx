import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ReviewForm({ event_id }) {
    const [subject, setSubject] = useState('');
    const [comment, setComment] = useState('');
    const [reviews, setReviews] = useState('')

    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log('Submit Review button clicked');
    
      try {
        const userToken = localStorage.getItem('currentUser');
        console.log('userToken:', userToken); // Log userToken
    
        // Send a POST request to create a review with the user's token in the headers
        const response = await axios.post('http://localhost:4000/reviews', {
          event_id,
          user_id: userToken.id, // Include the user_id
          subject,
          comment,
        }, {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        });
    
        // Rest of your code...
      } catch (err) {
        console.error(err);
        // Handle error if needed
      }
    };
    
      
    

    return (
        <form onSubmit={handleSubmit}>
            <h5>Write a Review</h5>
            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="comment">Comment:</label>
                <textarea
                    id="comment"
                    name="comment"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                ></textarea>
            </div>
            <button type="submit">
            <Link to={`/Profile`}>Send</Link>
      </button>
        </form>
    );
}

export default ReviewForm;
