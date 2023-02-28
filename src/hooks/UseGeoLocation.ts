import React, { useEffect, useRef, useState } from 'react'
import useFetch from '../api/useFetch';
import axios from "axios";

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

    navigator.geolocation.getCurrentPosition(successHandler, errorHandler)

        
    }, [])

    return {geoLoading, geoError, geoData}

}












