import React from "react";

interface ThemeToggleProps {
  darkMode: boolean;
  toggle: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ darkMode, toggle }) => {
  return (
    <button
      onClick={toggle}
      className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-4 py-2 rounded-full transition"
    >
      {darkMode ? "Light" : "Dark"}
    </button>
  );
};

export default ThemeToggle;
