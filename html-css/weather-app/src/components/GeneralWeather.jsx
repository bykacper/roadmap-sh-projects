import React, { useContext, useEffect } from "react";
import search from '../assets/images/search.png'
import sunny from '../assets/images/sunny-icon.png';
import WeatherContext from "../context/WeatherContext";
import farenheitToCelsius from "../assets/functions/FarenheitToCelsius";

export default function GeneralWeather() {
    const { weather, setWeather } = useContext(WeatherContext);

    useEffect(() => {
        if (weather)
            console.log(weather);
    }, [weather])

    return (
        <>
            {weather && (
                <>
                    <div className="general-weather">
                        <div className="gw-search-city">
                            <img src={search} alt="search" />
                            <input type="text" placeholder="Search for places..." />
                        </div>
                        <img src={sunny} alt="sunny weather" />
                        <h1> {farenheitToCelsius(weather.currentConditions.temp)}°C</h1>
                        <p> <strong> {weather.address}</strong>, {weather.currentConditions.datetime} </p>
                        <hr />
                        <p className="today-weather-description"> {weather.description} </p>
                    </div>
                </>
            )}
        </>
    )
}