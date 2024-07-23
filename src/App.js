import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';

function App() {
  const [mode, setMode] = useState('light'); // Initial mode is 'light'

  const toggleMode = () => {
    setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`App ${mode === 'dark' ? 'dark' : 'light'}`} style={{ backgroundColor: mode === 'dark' ? '#1a202c' : '#f7fafc' }}>
      <Header mode={mode} toggleMode={toggleMode} />
      <Hero mode={mode} toggleMode={toggleMode} />
    </div>
  );
}

export default App;
