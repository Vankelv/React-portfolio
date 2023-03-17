import React from "react";
import Navbar from "./Components/navbar";
import Body from "./Components/body";
import HeroSection from "./Components/HeroSection";

function App() {
  return (
    <div style={{ backgroundColor: 'black' }}>
   <React.Fragment>
    <Navbar/>
    <HeroSection/>
    <Body/>
    </React.Fragment>
    </div>
  );
}

export default App;
