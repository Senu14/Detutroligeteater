import React, { useState } from 'react';
import './BuyTicket.scss'
import { Link } from 'react-router-dom';

const BuyTicket = ({}) => {
  const [data, setData] = useState({});
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  

  return (
     <>
    
     <div className="container">
      
      <h2>Køb billet</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">FORNAVN</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="name">EFTERNAVN</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">VAJNAVN & NR</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">POSTNR.& BY</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            
          />
          <div className="para">
               <p>ALLE FELTER SKAL UDFYLDES</p>
          </div>
          <div className="pris">
          <input type="number" id="tentacles" name="tentacles" min="10" max="100" />
          <span>PRIS 1.000 DKK</span>
          <p>PRIS INKL MOMS</p>
          <br />
          <br />
          <br />
          
               </div>
               
         
        </div>


      
      </form>
      <div className="image-container">
        <img src="/path/to/your/image.jpg" alt="Image" />
      </div>
      <br />
      <div className="scenen">
          <h2>FRISCENEN</h2>
<br />
<br />
<br />
          <p>VÆLG SIDDEPLADSER</p>

          
      </div>
    </div>
    <div className="approve">
     <button><Link to={`/thank`}>GODKEND BESTILLING</Link></button>
    </div>
    
  </>

  );
};

export default BuyTicket;