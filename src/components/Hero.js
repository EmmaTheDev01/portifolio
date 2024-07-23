import React from 'react';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa'; // Example icons from React Icons

const Hero = ({ mode }) => {
  return (
    <div className={`min-h-screen flex flex-col justify-center items-center ${mode === 'dark' ? 'bg-slate-800 text-white' : 'bg-white text-gray-800'}`}>
      
      {/* Hero Content */}
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-pulse">Emmanuel Habumugisha</h1>
        <p className="text-lg md:text-xl font-bold animate-pulse">Frontend Developer & Designer</p>
      </div>
      
      {/* Social Icons */}
      <div className="mt-8 flex justify-center space-x-4">
        <a href="https://github.com/emmanuelhabumugisha" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-2xl md:text-3xl hover:text-gray-600" />
        </a>
        <a href="https://twitter.com/emmanuel_habumugisha" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="text-2xl md:text-3xl hover:text-gray-600" />
        </a>
        <a href="https://www.linkedin.com/in/emmanuel-habumugisha/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-2xl md:text-3xl hover:text-gray-600" />
        </a>
      </div>
      
      {/* Button to Start Journey */}
      <button className="mt-8 px-6 py-3 bg-transparent hover:bg-purple-800 text-purple-800 hover:text-white text-lg font-semibold border-2 border-purple-800 rounded-md shadow-md transition-colors duration-300">
        Start Journey
      </button>
    </div>
  );
};

export default Hero;
