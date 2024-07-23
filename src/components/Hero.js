import React, { useState, useRef } from 'react';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa'; // Example icons from React Icons
import './story.css';

const Hero = ({ mode }) => {
  const [dragging, setDragging] = useState(false);
  const dragItem = useRef();
  const dragNode = useRef();

  const handleDragStart = (e, index) => {
    dragItem.current = index;
    dragNode.current = e.target;
    dragNode.current.addEventListener('dragend', handleDragEnd);
    setTimeout(() => {
      setDragging(true);
    }, 0);
  };

  const handleDragEnter = (e, index) => {
    if (dragNode.current !== e.target) {
      const currentItem = dragItem.current;
      // Swap items in your stories array or update state accordingly
      // Example: update state to reorder stories
    }
  };

  const handleDragEnd = () => {
    setDragging(false);
    dragItem.current = null;
    dragNode.current.removeEventListener('dragend', handleDragEnd);
  };

  return (
    <div className={`min-h-screen flex flex-col justify-center items-center ${mode === 'dark' ? 'bg-slate-800 text-white' : 'bg-white text-gray-800'} px-4 md:px-8 lg:px-16`}>

      {/* Hero Content */}
      <div className="text-center p-3">
        <h1 className="text-2xl sm:text-2xl md:text-5xl lg:text-6xl font-bold mb-4 animate-pulse typewriter typewriter-animation">
          Emmanuel Habumugisha
        </h1>
        <p className="text-base sm:text-lg md:text-xl font-bold animate-pulse">
          Frontend Developer & Designer
        </p>
      </div>

      {/* Social Icons */}
      <div className="mt-6 md:mt-8 flex justify-center space-x-4 text-md sm:text-3xl md:text-4xl lg:text-2xl">
        <a href="https://github.com/EmmaTheDev01" target="_blank" rel="noopener noreferrer">
          <FaGithub className="hover:text-gray-600 transition-colors duration-300" />
        </a>
        <a href="https://twitter.com/cybereazon" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="hover:text-gray-600 transition-colors duration-300" />
        </a>
        <a href="https://www.linkedin.com/in/emma-habumugisha-133a231b9/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="hover:text-gray-600 transition-colors duration-300" />
        </a>
      </div>

      {/* Button to Start Journey */}
      <button className="mt-6 md:mt-8 px-4 py-2 sm:px-6 sm:py-3 bg-transparent hover:bg-purple-800 text-purple-800 hover:text-white text-base sm:text-lg font-semibold border-2 border-purple-800 rounded-md shadow-md transition-colors duration-300">
        Start Journey
      </button>
    </div>
  );
};

export default Hero;
