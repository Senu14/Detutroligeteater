// ConfirmOrder.js
import React from 'react';

const ConfirmOrder = ({ formDatae }) => {

     const handleConfime = async ()=>{
          try {
            const response = await axios.post()   
          } catch (error) {
               
          }
     }

     const handleCancel = async () =>{
          try {
               
          } catch (error) {
               
          }
     }

  return (
    <div>
      <h2>Confirm Your Order</h2>
      <div>
        <p>Fornavn: {formData.firstname}</p>
        <p>Efternavn: {formData.lastname}</p>
        <p>VEJNAVN & NR: {formData.address}</p>
        <p>Postnr & BY: {formData.zipcode}</p>
        {/* Include other form fields as needed */}
      </div>
      <div className="buttons">
        <button onClick={onCancel}>Cancel</button>
        <button onClick={onApprove}>Approve</button>
      </div>
    </div>
  );
};

export default ConfirmOrder;
