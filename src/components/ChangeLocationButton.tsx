import React, { FC } from "react";
import "../styles/ChangeLocationButton/ChangeLocationButton.css";


type ChangeLocationType = {
  ChangeLocationFunction: () => void;
}
export const ChangeLocationButton:FC<ChangeLocationType> = ({ChangeLocationFunction}) => {

  function onChangeLocation() {
    ChangeLocationFunction()
  }

  return (
    <>
      <button onClick={onChangeLocation}className="change-location">Change Location</button>
    </>
  );
}
