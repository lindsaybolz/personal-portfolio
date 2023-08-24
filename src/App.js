import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
// import Experiences from './components/Experiences';
import About from './components/About';
import Skills from './components/Skills';
import Map from './components/Map';
// import mapboxgl from '!mapbox-gl'; 

// mapboxgl.accessToken = ''

function App() {
  return (
    <div className="App">
      <NavBar />
      <About />
      <Map />
      {/* <Experiences /> */}
      <Skills />
    </div>
  );
}

export default App;
