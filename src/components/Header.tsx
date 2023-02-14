import React from "react";
import "../styles/Header/Header.css";
import ChangeLocationButton from "./ChangeLocationButton";
import LocationInput from "./LocationInput";
import SwitchButton from "./SwitchButton";

export default function Header() {
  return (
    <div className="header">
      <LocationInput />
      <ChangeLocationButton />
      <SwitchButton />
    </div>
  );
}
