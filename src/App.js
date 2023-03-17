import React from "react";
import Navbar from "./Components/navbar";
import Body from "./Components/body";
import HeroSection from "./Components/HeroSection";
import Portfolio from "./Components/Portfolio";
import navSticky from './navSticky.js';
import Footer from "./Components/Footer";

function App() {
  return (
    <div style={{ backgroundColor: 'black' }}>
   <React.Fragment>
    <Navbar/>
    <HeroSection/>
    <Body/>
    <Portfolio/>
    <Footer/>
    </React.Fragment>
    </div>
  );
}

export default App;
