import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import About from './components/About';
import Skills from './components/Skills';
import Map from './components/Map';

// mapboxgl.accessToken = ''

function App() {
  return (
    <div className="App">
      <NavBar />
      <About />
      <Map />
      <Skills />
    </div>
  );
}

export default App;
