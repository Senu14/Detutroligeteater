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
         
          Fornavn:
          {/* {formObject.firstname} */}
        </p>
        <p>
          Efternavn:
          {/* {formObject.lastname} */}
        </p>
        <p>
          VEJNAVN & NR:
          {/* {formObject.address} */}
        </p>
        <p>
          Postnr & BY:
          {/* {formObject.zipcode} */}
        </p>
        <p>
          city:
          {/* {formObject.city} */}
        </p>
        <p>
          sesats:
          {/* {formObject.seats} */}
        </p>
        {/* Include other form fields as needed */}
        <p>
        BILLETTERNE SENDES ELEKTRONISK TIL DIN EMAIL.
        </p>
      </div>
      <div className="buttons">
        {/* <button onClick={onCancel}>Cancel</button> */}
        <button onClick={onApprove}>TILBAGE</button>
      </div>
      <div className="buttons">
        {/* <button onClick={onCancel}>Cancel</button> */}
        <button onClick={onApprove}>GODKEND BESTILLING</button>
      </div>
      
    </div>
   
    
  );
};

export default ConfirmOrder;
