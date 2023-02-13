import React from 'react';
import "../styles/SwitchButton/SwitchButton.css"

export default function SwitchButton() {
  return (
  
<div className="check-box">
	<label className="label-C">C</label>
	<label className="label-F">F</label>
	<input type="checkbox" readOnly />
</div>
  )
}
