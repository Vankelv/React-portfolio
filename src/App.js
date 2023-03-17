import React from "react";
import Navbar from "./Components/navbar";
import Body from "./Components/body";
import HeroSection from "./Components/HeroSection";

function App() {
  return (
   <React.Fragment>
    <Navbar/>
    <HeroSection/>
    <Body/>
    </React.Fragment>
  );
}

export default App;
