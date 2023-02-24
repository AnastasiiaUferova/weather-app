import React, { useEffect, useState } from "react";
import "../styles/App/App.css";
import "@fontsource/montserrat";
import { Images } from "../utilities/Utilities";
import Header from "./Header";
import Main from "./Main";
import Swiper from "./SwiperElement";
import { useDebouncedCallback } from "use-debounce";
import useFetch from "../api/useFetch";


function App() {

  const [ showMain, setShowMain] = useState<boolean | null>(true)


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

    const {data, loading, error} = useFetch('https://api.openweathermap.org/data/2.5/weather?q=Warsaw&appid=431e7a61c4a3556cbf4ffbf1a97345f3&units=metric')

if(loading) return <h1>LOADING...</h1>
if (error) console.log(error)
console.log(data.coord.lon)

  return (
    <>
      <div className="App">
        <Header />
          {showMain ? <Main /> : <Swiper /> }
      </div>
      <div style={{width:"400px", height:"400px",background: "red", color: "white"}}>
        {data?.coord.lon}
      </div>
    </>
  );
}

export default App;
