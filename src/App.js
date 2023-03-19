import React from "react";
import Navbar from "./Components/navbar";
import Body from "./Components/body";
import navSticky from './navSticky.js';
import Footer from "./Components/Footer";

function App() {
  return (
    <div style={{ backgroundColor: 'black' }}>
   <React.Fragment>
    <Navbar/>
  
    <Body/>
    <Footer/>
    </React.Fragment>
    </div>
  );
}

export default App;
