import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import About from './components/About';
import Skills from './components/Skills';
import Map from './components/Map';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <About />
      <Map />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
