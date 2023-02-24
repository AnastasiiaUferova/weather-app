import React, { FC, useState } from "react";
import "../styles/Header/Header.css";
import { ChangeLocationButton } from "./ChangeLocationButton";
import { LocationInput } from "./LocationInput";
import SwitchButton from "./SwitchButton";

type HeaderPropsType = {
  onChageQuery: (arg: string) => void;
};

export const Header: FC<HeaderPropsType> = ({ onChageQuery }) => {
  const [inputVisible, setInputVisible] = useState<boolean | null>(false);

  function ChangeLocationFunction() {
    setInputVisible(true);
  }

  function handleChangeQuery(item: string) {
    onChageQuery(item);
  }

  return (
    <div className="header">
      {inputVisible ? (
        <LocationInput onChageQuery={handleChangeQuery} />
      ) : (
        <ChangeLocationButton ChangeLocationFunction={ChangeLocationFunction} />
      )}
      <SwitchButton />
    </div>
  );
};
