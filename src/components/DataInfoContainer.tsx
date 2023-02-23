import React from 'react'
import { DataInfoBody } from '../components/DataInfoBody';
import "../styles/DataCard/DataCard.css";

export default function DataInfoContainer () {
  return (
    <div className='data-info'>
        < DataInfoBody name={"PRECIPITATION"} sign={'%'} number={1}/>
        < DataInfoBody name={"HUMIDITY"} sign={'%'} number={1}/>
        < DataInfoBody name={"WIND"} sign={'km/h'} number={1}/>
        < DataInfoBody name={"AIR QUALITY"} sign={'/10'} number={1}/>
    </div>
)
}
