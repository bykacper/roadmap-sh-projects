import { WeatherProvider } from "./context/WeatherContext";
import TodayWeather from "./layouts/TodayWeather";
import { useEffect, useState } from "react";
import WeatherHighligts from "./layouts/WeatherHighligts";

export default function App() {
  const [weather, setWeather] = useState(null);

  return (
    <WeatherProvider>
      <div className="weather-app-wrapper">
        <TodayWeather />
        <WeatherHighligts />
      </div>
    </WeatherProvider>
  );
}


