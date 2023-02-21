import React from "react";
import "../styles/App/App.css";
import "@fontsource/montserrat";
import { Images } from "../utilities/Utilities";
import Header from "./Header";
import Main from "./Main";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Main />
      </div>
    </>
  );
}

export default App;
