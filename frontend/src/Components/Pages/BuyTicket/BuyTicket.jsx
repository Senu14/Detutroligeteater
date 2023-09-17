import React from "react";
import "./BuyTicket.scss";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateFormObject } from "../../../redux/actions";

const BuyTicket = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const formObject = useSelector((state) => state.formObject);


  //In this component i was in need to send data from this component to another one
  //but they are not like a childe and a parent component 
  //so i couldn't use the normal use stase methode
  //instead of it i use redux buy making a global useState , this global useState
  //is accessible buy all the component in the project 
  //so now , this file is gonna be handled by a global useState 
  //and in the other component (confirmOrder) i'll be able to access the data in that state
  //because it's a global state and can be accessible from anywhere in that project
  //you can find the redux configuration in a folder called redux
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateFormObject({ ...formObject, [name]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    console.log("Submit button clicked.");
    console.log("Form data:", formObject);
    // Submit the form data or perform any other actions here
  };

  return (
    <>
      <div className="container">
        <h2>Køb billet</h2>
        <hr /> <hr />
        <form className="Buy-Form" onSubmit={onSubmit}>
          <div className="Buy-group">
            <label htmlFor="firstname">Fornavn</label>
            <input
              id="firstname"
              name="firstname"
              value={formObject.firstname}
              onChange={handleInputChange}
            />
          </div>
          <div className="Buy-group">
            <label htmlFor="lastname">Efternavn:</label>
            <input
              id="lastname"
              name="lastname"
              value={formObject.lastname}
              onChange={handleInputChange}
            />
          </div>
          <div className="Buy-group">
            <label htmlFor="address">VEJNAVN & NR:</label>
            <input
              id="address"
              name="address"
              value={formObject.address}
              onChange={handleInputChange}
            />
          </div>{" "}
          <div className="Buy-group">
            <label htmlFor="city">city:</label>
            <input
              id="city"
              name="city"
              value={formObject.city}
              onChange={handleInputChange}
            />
          </div>{" "}
          <div className="Buy-group">
            <label htmlFor="seats">seats:</label>
            <input
              id="seats"
              name="seats"
              value={formObject.seats}
              onChange={handleInputChange}
            />
          </div>
          <div className="Buy-group">
            <label htmlFor="zipcode">Postnr & BY:</label>
            <input
              id="zipcode"
              name="zipcode"
              value={formObject.zipcode}
              onChange={handleInputChange}
            />
            <div className="min-para">
              <p>ALLE FELTER SKAL UDFYLDES</p>
            </div>
          </div>
          <div className="BuyB">
            <Link to={`/confirme/${id}`}>
              <button type="submit">GODKEND BESTILLING</button>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default BuyTicket;
