import React, { useState, useEffect } from "react";
import Navbar from "./Components/navbar";
import Body from "./Components/body";
import HeroSection from "./Components/HeroSection";
import Portfolio from "./Components/Portfolio";
import Footer from "./Components/Footer";
import Preloader from "./Components/Preloader";

function App() {
  const [loading, setLoading] = useState(true); // Add a state variable to keep track of loading status

  useEffect(() => {
    // Use an effect to simulate a delay in loading the other components
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ backgroundColor: 'black' }}>
      {loading && <Preloader />} {/* Show the preloader only if the other components haven't loaded yet */}
      {!loading && (
        <React.Fragment>
          <Navbar />
          <Body />
          <Portfolio />
          <Footer />
        </React.Fragment>
      )}
    </div>
  );
}

export default App;
