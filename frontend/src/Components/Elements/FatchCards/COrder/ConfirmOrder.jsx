// ConfirmOrder.js
import React from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import './ConfirmOrder.scss';
import { useAuth } from "../../../Providers/AuthProvider";

const ConfirmOrder = ({ formDatae }) => {
  const formObject = useSelector((state) => state.formObject);
  const { loginData, setLoginData } = useAuth();
  console.log(loginData);

  const onApprove = async () => {
    try {
      const response = await axios.post(
        "http://localhost:4000/reservations",
        formObject,
        {
          headers: {
            authorization: `Bearer ${loginData.access_token}`,
          },
        }
      );
      console.log("Reservation successful:", response.data);
    } catch (error) {
      console.error("Error creating reservation:", error);
      if (error.response) {
        console.error("Error response data:", error.response.data);
      }
    }
  };

  // const handleCancel = async () => {
  //   try {
  //   } catch (error) {}
  // };

  return (

    <div className="COrder">
      <h2>Godkend order</h2>
      <hr />
      <div className="site">
        <p>SÆDE</p>
        <p>RÆKKE</p>
        <p>PRIS</p>
      </div>
      <p>PRIS I ALT:</p>
      <hr />
      <p className="moms">PRIS INKL. MOMS & BILLETGEBYR </p>
      
      <div className="Cinfo">
        <p>KUNDE:</p>
        <p>
         
          
          {formObject.firstname}
        </p>
        <p>
         
         {formObject.lastname}
        </p>
        <p>
         
          {formObject.address} 
        </p>
        <p>
         
          {formObject.zipcode} 
        </p>
        <p>
          
           {formObject.city}
        </p>
        <p>
          
          {formObject.email}
       </p>
        
        
        <p>
        BILLETTERNE SENDES ELEKTRONISK TIL DIN EMAIL
        </p>
        <div className="buttons">
        {/* <button onClick={onCancel}>Cancel</button> */}
        <button onClick={onApprove}>Approve</button>
      </div>
      </div>
      
    </div>
  );
};

export default ConfirmOrder;
