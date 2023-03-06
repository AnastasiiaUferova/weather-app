import React from "react";
import { DataInfoBody } from "../components/DataInfoBody";
import "../styles/DataCard/DataCard.css";

export default function DataInfoContainer() {
  return (
    <div className="data-info">
      <DataInfoBody name={"TEMP MAX"} sign={"°C"} number={2} />
      <DataInfoBody name={"TEMP MIN"} sign={"°C"} number={-3} />
      <DataInfoBody name={"HUMIDITY"} sign={"%"} number={3} />
      <DataInfoBody name={"DESCRIPTION"} sign={"Heavy Rain"} />
    </div>
  );
}
