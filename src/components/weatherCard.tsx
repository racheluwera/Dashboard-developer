import React, { useEffect, useState } from "react";
import axios from "axios";

interface WeatherData {
  temperature: number;
  wind: number;
  time: string;
}

const WeatherCard: React.FC = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          "https://api.open-meteo.com/v1/forecast?latitude=-1.95368&longitude=30.0606&current_weather=true"
        );
        const data = response.data.current_weather;
        setWeather({
          temperature: data.temperature,
          wind: data.windspeed,
          time: new Date(data.time).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        });
      } catch {
        setError("⚠️ Failed to fetch weather data.");
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 w-64 text-center">
      <h2 className="text-lg font-semibold mb-2 text-gray-700 dark:text-gray-200">
        Current Weather
      </h2>

      {/* 👇 Handle loading, error, and success states separately */}
      {loading && <p className="text-gray-500">Loading...</p>}

      {error && <p className="text-red-500 text-sm">{error}</p>}

      {!loading && !error && weather && (
        <div className="flex flex-col items-center space-y-2">
          <div className="text-6xl">🌤️</div>
          <div className="text-4xl font-bold">{weather.temperature}°</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Wind: {weather.wind} mph
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Time: {weather.time}
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherCard;
