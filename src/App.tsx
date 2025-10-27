import React, { useState } from "react";
import WeatherCard from "./components/weatherCard";
import GitHubCard from "./components/GitHubCard";
import ThemeToggle from "./components/ThemeToggle";

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <div className="flex justify-between items-center w-96 mb-8">
        <h1 className="text-2xl font-bold">Developer Dashboard</h1>
        <ThemeToggle darkMode={darkMode} toggle={toggleTheme} />
      </div>

      <div className="flex space-x-6">
        <WeatherCard />
        <GitHubCard />
      </div>
    </div>
  );
};

export default App;
