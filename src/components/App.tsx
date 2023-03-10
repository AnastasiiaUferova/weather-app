import React, { useEffect, useRef, useState } from "react";
import "../styles/App/App.css";
import "@fontsource/montserrat";
import { Images } from "../utilities/Utilities";
import { Header } from "./Header";
import { Main } from "./Main";
import useFetch from "../api/useFetch";
import UseResize from "../hooks/UseResize";
import UseGeoLocation from "../hooks/UseGeoLocation";
import axios from "axios";
import { SwiperElement } from "./SwiperElement";

function App() {
  const [searchQuery, setSearchQuery] = useState<string | null>("");
  const [city, setCity] = useState<string | null>("");
  const [isSearching, setIsSearching] = useState<boolean | null>(false);
  const [geo, setGeo] = useState<any>(null);
  const [time, setTime] = useState<any>(null);

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

  /*useEffect(() => {

  getLocationData().then(() => {
    axios
    .get(
      ` https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=${geo?.latitude}&lon=${geo?.longitude}&appid=431e7a61c4a3556cbf4ffbf1a97345f3&units=metric`
    ) //find out the city by coordinates
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err);
    });
  })

}, [])*/

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

  const commonProps = {
    city: data?.name,
    temp: data?.main.temp,
    details: data?.weather[0].main,
    timezone: data?.timezone,
    description: data?.weather[0].description,
    humidity: data?.main.humidity,
    max: data?.main.temp_max,
    min: data?.main.temp_min,
    sunset: data?.sys.sunset,
    sunrise: data?.sys.sunrise,
  };

  return (
    <>
      <div className="App">
        <Header onChageQuery={handleChangeQuery} />
        {showMain ? (
          <Main {...commonProps} />
        ) : (
          <SwiperElement {...commonProps} />
        )}
      </div>
    </>
  );
}

export default App;

/*  
 import { useState, useEffect } from 'react';
import useFetch from './useFetch';

function App() {
  const [data, setData] = useState([]);

  const urls = ['https://api.example.com/data1', 'https://api.example.com/data2'];

  const fetchHooks = urls.map(url => useFetch(url));

  useEffect(() => {
    Promise.all(fetchHooks)
      .then(responses => Promise.all(responses.map(res => res.json())))
      .then(dataArray => setData(dataArray))
      .catch(error => console.log(error));
  }, [urls]);

  return (
    <div>
      {data.map((dataItem, index) => (
        <p key={index}>{JSON.stringify(dataItem)}</p>
      ))}
    </div>
  );
}

export default App;


import { useState, useEffect } from 'react';
import useFetch from './useFetch';

function App() {
  const [data, setData] = useState([]);

  const urls = [
    'https://api.example.com/data1',
    'https://api.example.com/data2',
    'https://api.example.com/data3'
  ];

  const fetchData = async () => {
    const promises = urls.map(url => useFetch(url));
    const results = await Promise.all(promises);

    const data = results.map(result => result.data);
    setData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {data.map((item, index) => (
        <p key={index}>{JSON.stringify(item)}</p>
      ))}
    </div>
  );
}

export default App;
        

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
        
        */
