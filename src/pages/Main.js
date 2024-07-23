import React, { useState } from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Story from '../components/Story';

const Main = () => {
    const [mode, setMode] = useState('light'); // Initial mode is 'light'

  const toggleMode = () => {
    setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <div>
    <Header mode={mode} toggleMode={toggleMode}/>
    <Hero mode={mode} toggleMode={toggleMode} />
    <Story mode={mode} toggleMode={toggleMode}/>
    </div>
  )
}

export default Main