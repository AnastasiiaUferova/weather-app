import React from "react";
import "../styles/LocationInput/LocationInput.css";

export default function LocationInput() {
  return (
    <div className="input">
      <form className="input__container-form">
        <input className="input__input" type="text"></input>
        <button className="input__button" type="submit"></button>
      </form>
    </div>
  );
}
