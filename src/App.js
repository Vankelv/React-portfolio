import React, { useState, useEffect } from "react";
import { BrowserView } from 'react-device-detect';

import Navbar from "./Components/navbar";
import Body from "./Components/body";
import HeroSection from "./Components/HeroSection";
import Footer from "./Components/Footer";
import Preloader from "./Components/Preloader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserView device={["mobile"]}> {/* Wrap your component's content with BrowserView */}
      <div style={{ transform: 'rotate(0deg)', height: '100vh', width: '100vw', overflow: 'hidden' }}>
        <div style={{ backgroundColor: 'black' }}>
          {loading && <Preloader />}
          {!loading && (
            <React.Fragment>
              <Navbar />
              <HeroSection />
              <Body />
              <Footer />
            </React.Fragment>
          )}
        </div>
      </div>
    </BrowserView>
  );
}

export default App;

