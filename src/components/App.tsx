import React, { useEffect, useState } from "react";
import "../styles/App/App.css";
import "@fontsource/montserrat";
import { Images } from "../utilities/Utilities";
import { Header } from "./Header";
import Main from "./Main";
import Swiper from "./SwiperElement";
import useFetch from "../api/useFetch";
import UseResize from "../hooks/UseResize";
import UseGeoLocation from "../hooks/UseGeoLocation";
import axios from "axios";

function App() {
  const [searchQuery, setSearchQuery] = useState<string | null>("");
  const [city, setCity] = useState<string | null>("");

  const { showMain } = UseResize(1100);

  const { data, loading, error, refetch } = useFetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${searchQuery}&appid=431e7a61c4a3556cbf4ffbf1a97345f3&units=metric`
  );

  const { data:cityData, refetch:cityRefetch } = useFetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=431e7a61c4a3556cbf4ffbf1a97345f3&units=metric`
  );

  const {geoLoading, geoError, geoData } = UseGeoLocation()

useEffect(() => {
    if (!geoLoading) {
      axios
      .get(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${geoData.latitude}&longitude=${geoData.longitude}
      &localityLanguage=en`)
      .then((res) => {
        setCity(res.data.city);
        cityRefetch()
      })
      .catch((err) => {
        console.log(err);
      })
    }

  
  }, [geoLoading]);


  function handleChangeQuery(item: string) {
    setSearchQuery(item);
    refetch();
  }

  if (loading) return <h1>LOADING...</h1>;
  if (error) console.log(error);

console.log(cityData)
  return (
    <>
      <div className="App">
        <Header onChageQuery={handleChangeQuery} />
        {showMain ? <Main /> : <Swiper />}
      </div>
      <div style={{width:"400px", height:"400px",background: "red", color: "white"}}>
{cityData?.main.temp}
</div>
    </>
  );
}

export default App;


