import React, { FC } from "react";
import "../styles/DataCard/DataCard.css";

type DataInfoType = {
  name: string;
  number: number;
  sign: string;
};

export const DataInfoBody: FC<DataInfoType> = ({ name, number, sign }) => {
  return (
    <>
      <div className="data__info-body">
        <p className="data__info-body_name">{name}</p>
        <p className="data__info-body_number">
          {number} {sign}
        </p>
      </div>
    </>
  );
};
