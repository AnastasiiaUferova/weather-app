import React, { ChangeEvent, FC, useState } from "react";
import "../styles/LocationInput/LocationInput.css";

type LocationInputType = {
  onChageQuery: (arg: string) => void;
};

export const LocationInput: FC<LocationInputType> = ({ onChageQuery }) => {
  const [country, setCountry] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCountry(event.target.value);
  };

  function handleSubmit(event: { preventDefault: () => void }) {
    event.preventDefault();
    onChageQuery(country);
  }

  return (
    <div className="input">
      <form className="input__container-form" onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={country}
          className="input__input"
          type="text"
        ></input>
        <button className="input__button" type="submit"></button>
      </form>
    </div>
  );
};
