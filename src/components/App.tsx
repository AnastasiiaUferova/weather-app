import React, { useEffect, useState } from "react";
import "../styles/App/App.css";
import "@fontsource/montserrat";
import { Images } from "../utilities/Utilities";
import Header from "./Header";
import Main from "./Main";
import Swiper from "./SwiperElement";
import { useDebouncedCallback } from "use-debounce";


function App() {

  const [ showMain, setShowMain] = useState(true)

  const Resize = useDebouncedCallback(
    () => {
        if (window.innerWidth <= 1100) {
          setShowMain(false)
        }
        else setShowMain(true)
    }, 200
)

    useEffect(() => {
    
        window.addEventListener('resize', Resize)
        return () => {
            window.removeEventListener('resize', Resize);
    } }, [Resize])


  return (
    <>
      <div className="App">
        <Header />
          {showMain ? <Main /> : <Swiper /> }
      </div>
    </>
  );
}

export default App;
