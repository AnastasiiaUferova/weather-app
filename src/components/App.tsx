import React, { useEffect, useRef, useState } from "react";
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
  const [isSearching, setIsSearching] = useState<boolean | null>(false);

 
  const { showMain } = UseResize(1100);

  const { data:searchData, loading, error, refetch } = useFetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${searchQuery}&appid=431e7a61c4a3556cbf4ffbf1a97345f3&units=metric`
  ); // Fetch data after changing the city

  const { data:cityData, refetch:cityRefetch } = useFetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=431e7a61c4a3556cbf4ffbf1a97345f3&units=metric`
  ); //

  const {geoLoading, geoError, geoData } = UseGeoLocation()
  const [mainData, setMainData] = useState<any>(cityData);


useEffect(() => {
    if (!geoLoading) {
      cityRefetch()
      axios
      .get(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${geoData.latitude}&longitude=${geoData.longitude}
      &localityLanguage=en`) //find out the city by coordinates 
      .then((res) => {
        setIsSearching(false)
        setCity(res.data.city);
        cityRefetch()
        setMainData(cityData)
      })
      .catch((err) => {
        console.log(err);
      })
    }
  
  }, [geoLoading]);


  function handleChangeQuery(item: string) {
    setSearchQuery(item);
    refetch();
    setMainData(searchData)
    setIsSearching(true)
  }

 

  //console.log(searchData)
  console.log(cityData)

  return (
    <>
      <div className="App">
        <Header onChageQuery={handleChangeQuery} />
        {showMain ? <Main /> : <Swiper />}
      </div>
      <div style={{width:"400px", height:"400px",background: "red", color: "white"}}>
{isSearching ? searchData?.main.temp : cityData?.main.temp }
</div>
    </>
  );
}

export default App;




/*  setMainData(mainData => ({
          ...mainData,
          ...cityData
        }));
        
         if (loading) return <h1>LOADING...</h1>;
  if (error) console.log(error);
        
        
        
        
        */