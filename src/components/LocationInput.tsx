import React, { ChangeEvent, useState } from "react";
import "../styles/LocationInput/LocationInput.css";

export default function LocationInput() {

  const [country, setCountry] = useState<string>('')

  const handleChange = (event: ChangeEvent<HTMLInputElement> ) => {
      setCountry(event.target.value)
  }
  console.log(country)
  return (
    <div className="input">
      <form className="input__container-form">
        <input onChange={handleChange} value={country} className="input__input" type="text"></input>
        <button className="input__button" type="submit"></button>
      </form>
    </div>
  );
}
