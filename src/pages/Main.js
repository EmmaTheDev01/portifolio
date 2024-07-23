import React, { useState } from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Story from '../components/Story';
import Projects from '../components/Projects';
import Footer from '../components/Footer';
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
    <Projects mode={mode} toggleMode={toggleMode}/>
    <Footer mode={mode} toggleMode={toggleMode}/>
    </div>
  )
}

export default Main