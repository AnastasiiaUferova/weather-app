import React, { useEffect, useState } from 'react'
import useFetch from '../api/useFetch';

export default function UseGeoLocation() {
    const[geoLoading, setGeoLoading] = useState<boolean | null> (true);
    const[geoData, setGeoData] = useState<any> ();
    const[geoError, setGeoError] = useState<object | null> ({});


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

        navigator.geolocation.getCurrentPosition(successHandler, errorHandler);

        
    }, [])

    if (geoLoading === false) {

    }


    const { data:dataCity, loading:loadingCity, error:errorCity } = useFetch(
        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${geoData.latitude}&longitude=${geoData.longitude}
        &localityLanguage=en`
      );

      console.log(dataCity)

    return {geoLoading, geoError, dataCity}

}
