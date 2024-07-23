import React from 'react';
import ToggleButton from './ToggleButton';

const Header = ({ mode, toggleMode }) => {
  return (
    <header className={`fixed top-0 left-0 right-0 z-10  ${mode === 'dark' ? 'bg-slate-800 text-white' : 'bg-white text-gray-800'}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img src="/logo.png" alt="Logo" className="h-8" />
          <h1 className="text-xl font-bold">Portfolio</h1>
        </div>
        <ToggleButton mode={mode} toggleMode={toggleMode} />
      </div>
    </header>
  );
};

export default Header;
