import React from "react";
import "../styles/PhraseCard/PhraseCard.css";

export default function PhraseCard() {
  return (
    <div className="phrase">
      <h2>Quote of the day</h2>
      <div className="phrase__body">
        âWe cannot solve problems with the kind of thinking we employed when we
        came up with them.â â Albert Einstein
      </div>
      <button>New quote</button>
    </div>
  );
}
