import React, { useEffect, useRef, useState } from "react";
import "../styles/App/App.css";
import "@fontsource/montserrat";
import { Images } from "../utilities/Utilities";
import { Header } from "./Header";
import { Main } from "./Main";
import Swiper from "./SwiperElement";
import useFetch from "../api/useFetch";
import UseResize from "../hooks/UseResize";
import UseGeoLocation from "../hooks/UseGeoLocation";
import axios from "axios";

function App() {
  const [searchQuery, setSearchQuery] = useState<string | null>("");
  const [city, setCity] = useState<string | null>("");
  const [isSearching, setIsSearching] = useState<boolean | null>(false);
  const [geo, setGeo] = useState<any>(null);

  const { showMain } = UseResize(1100);
  const { geoLoading, geoError, geoData } = UseGeoLocation();

  const getLocationData = async () => {
    try {
      setGeo(geoData);
      if (error) {
        throw new Error(error);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getLocationData().then(() => {
      axios
        .get(
          `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${geo?.latitude}&longitude=${geo?.longitude}
    &localityLanguage=en`
        ) //find out the city by coordinates
        .then((res) => {
          setIsSearching(false);
          setCity(res.data.city);
          cityRefetch();
        })
        .catch((err) => {
          console.log(err);
        });
    });
  }, []);

  const {
    data: searchData,
    loading,
    error,
    refetch,
  } = useFetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${searchQuery}&appid=431e7a61c4a3556cbf4ffbf1a97345f3&units=metric`
  ); // Fetch data after changing the city

  const { data: cityData, refetch: cityRefetch } = useFetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=431e7a61c4a3556cbf4ffbf1a97345f3&units=metric`
  ); //

  function handleChangeQuery(item: string) {
    setSearchQuery(item);
    refetch();
    setIsSearching(true);
    console.log(data);
  }

  let data = isSearching ? searchData : cityData;

  return (
    <>
      <div className="App">
        <Header onChageQuery={handleChangeQuery} />
        {showMain ? (
          <Main
            city={data?.name}
            temp={data?.main.temp}
            details={data?.weather[0].main}
            timezone={data?.timezone}
          />
        ) : (
          <Swiper />
        )}
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
        
         <div style={{width:"400px", height:"400px",background: "red", color: "white"}}>
{data?.main.temp}
</div>








 useEffect(() => {
    if (!geoLoading) {
      cityRefetch();
      axios
        .get(
          `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${geoData.latitude}&longitude=${geoData.longitude}
      &localityLanguage=en`
        ) //find out the city by coordinates
        .then((res) => {
          setIsSearching(false);
          setCity(res.data.city);
          cityRefetch();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [geoLoading]);
        
        
        */
