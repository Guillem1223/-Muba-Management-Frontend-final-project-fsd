import React, { useState, useEffect } from "react";
import UserService from "../../../_services/UserService";
import { Navigate, useParams } from "react-router-dom";

export const ContractOffer = () => {
  return (
    <div className="ptCSS">
      <h2>Contract Offer</h2>
      <br />
      <br />
      <form action="mailto:saguesguillem@gmail.com">
        <label htmlFor="">Describe your event:</label>
        <textarea
          name=""
          id=""
          cols="80"
          rows="10"
          placeholder="IMPORTANT: Explain the capacity or number of people who can access the event, type of event, birthday, private party, wedding, commercial event or promotion, etc."
        ></textarea>
        <label htmlFor="">Event Direction:</label>
        <input type="text" />
        <label htmlFor="">Concert Start Time:</label>
        <input type="time" />
        <br /> <br />
        <label htmlFor="">Make your Offer for Hiring:</label>
        <input type="number" placeholder="Use Euros" />
        <br />
        <br />
        <button className="btn btn-success" type="submit">
          Send
        </button>
      </form>
    </div>
  );
};
