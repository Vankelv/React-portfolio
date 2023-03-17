import React from "react";
import Navbar from "./Components/navbar";
import Body from "./Components/body";
import HeroSection from "./Components/HeroSection";
import Portfolio from "./Components/Portfolio";
import './navSticky.js';

function App() {
  return (
    <div style={{ backgroundColor: 'black' }}>
   <React.Fragment>
    <Navbar/>
    <HeroSection/>
    <Body/>
    <Portfolio/>
    </React.Fragment>
    </div>
  );
}

export default App;
