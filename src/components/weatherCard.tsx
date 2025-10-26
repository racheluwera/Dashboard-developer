import React from "react";

interface WeatherData {
  temperature: number;
  wind: number;
  time: string;
}

const WeatherCard: React.FC<WeatherData> = ({ temperature, wind, time }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 w-64 text-center">
      <h2 className="text-lg font-semibold mb-2 text-gray-700 dark:text-gray-200">
        Current Weather
      </h2>
      <div className="flex flex-col items-center space-y-2">
        <div className="text-6xl">🌤️</div>
        <div className="text-4xl font-bold">{temperature}°</div>
        <div className="text-sm text-gray-500 dark:text-gray-400">
          Wind: {wind} mph
        </div>
        <div className="text-sm text-gray-500 dark:text-gray-400">
          Time: {time}
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
