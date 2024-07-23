import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

const ToggleButton = ({ mode, toggleMode }) => {
  return (
    <button
      className="bg-gray-100 hover:bg-gray-300 text-gray-700 font-bold py-3 px-3 rounded-full"
      onClick={toggleMode}
    >
      {mode === 'light' ? (
        <FaMoon />
      ) : (
        <FaSun />
      )}
    </button>
  );
};

export default ToggleButton;
