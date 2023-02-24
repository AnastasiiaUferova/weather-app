import React, { useState } from "react";
import "../styles/Header/Header.css";
import { ChangeLocationButton } from "./ChangeLocationButton";
import LocationInput from "./LocationInput";
import SwitchButton from "./SwitchButton";

export default function Header() {

  const [inputVisible, setInputVisible] = useState<boolean | null> (false)

  function ChangeLocationFunction () {
        setInputVisible(true)
  }

  return (
    <div className="header">
      {inputVisible ?
      <LocationInput /> :
      <ChangeLocationButton ChangeLocationFunction={ChangeLocationFunction}/>
}
      <SwitchButton />
    </div>
  );
}
