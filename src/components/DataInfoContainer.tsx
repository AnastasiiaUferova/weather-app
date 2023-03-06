import React, { FC } from "react";
import { DataInfoBody } from "../components/DataInfoBody";
import "../styles/DataCard/DataCard.css";
import { DataInfoContainerType } from "../types/types";

export const DataInfoContainer: FC<DataInfoContainerType> = ({
  description,
  humidity,
  min,
  max,
}) => {
  return (
    <div className="data-info">
      <DataInfoBody name={"TEMP MAX"} sign={"°C"} number={Math.round(max)} />
      <DataInfoBody name={"TEMP MIN"} sign={"°C"} number={Math.round(min)} />
      <DataInfoBody name={"HUMIDITY"} sign={"%"} number={humidity} />
      <DataInfoBody name={"DESCRIPTION"} sign={description} />
    </div>
  );
};
