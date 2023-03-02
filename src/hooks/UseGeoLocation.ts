import { useState, useEffect } from 'react';

const useGeoLocation = () => {
  const [location, setLocation] = useState({
    loaded: false,
    coordinates: { lat: '', lng: '' },
    city: '',
  });

  const onSuccess = (location: { coords: { latitude: any; longitude: any; }; }) => {
    fetchCityName(location.coords.latitude, location.coords.longitude)
      .then((city) => {
        setLocation({
          loaded: true,
          coordinates: {
            lat: location.coords.latitude,
            lng: location.coords.longitude,
          },
          city,
        });
      })
      .catch((error) => {
        setLocation({
          loaded: true,
          coordinates: {
            lat: location.coords.latitude,
            lng: location.coords.longitude,
          },
          ...error,
        });
      });
  };

  const onError = (error: { code: number; message: string; }) => {
       console.log(error)
  };

  const fetchCityName = async (lat: any, lng: any) => {
    const response = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}
    &localityLanguage=en`);
    const data = await response.json();
    return data.city
  };

  useEffect(() => {
    if (!('geolocation' in navigator)) {
      onError({
        code: 0,
        message: 'Geolocation is not supported',
      });
    }

    const watchId = navigator.geolocation.watchPosition(onSuccess, onError);
    
    return () => navigator.geolocation.clearWatch(watchId);
  }, []);

//console.log(location)
  return location;
};

export default useGeoLocation;
















/* import React, { useEffect, useRef, useState } from 'react'
import useFetch from '../api/useFetch';
import axios from "axios";

export default function UseGeoLocation() {
    const[geoLoading, setGeoLoading] = useState<boolean | null> (true);
    const[geoData, setGeoData] = useState<any> ();
    const[geoError, setGeoError] = useState<object | null> ({});
    const[city, setCity] = useState<any>(null)


    useEffect(() => {
        const successHandler = (pos: { coords: any; }) => {
            const crd = pos.coords;
        setGeoData(crd)
        setGeoError(null)
        setGeoLoading(false)
        }

        const errorHandler = (err: { code: number; message: string; }) => {
            setGeoError(err)
            console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    navigator.geolocation.getCurrentPosition(successHandler, errorHandler)

    const fetchCityName = async () => {
        const response = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${geoData.latitude}&longitude=${geoData.longitude}
        &localityLanguage=en`) ;
        const data = await response.json();
        setCity(data)
        
    };
    fetchCityName()

    }, [])


  
    console.log(city)
    return {geoLoading, geoError, geoData, city}

}

*/










