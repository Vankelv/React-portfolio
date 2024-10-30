import React from 'react';
import "../styles/Preloader.css";

class Preloader extends React.Component {
  render() {
    return (
      <div className="preloader">
        <div className="preloader__wrapper">
          <div className="preloader__background">
            <svg className="preloader__svg" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="40" stroke="url(#gradient)" strokeWidth="10" fill="transparent" />
              <defs>
                <linearGradient id="gradient" x1="10%" y1="20%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#231557" />
                  <stop offset="50%" stopColor="#ff097f" />
                  <stop offset="100%" stopColor="#ef6d35" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="preloader__content">
            <div className="text-base">Dagbeneva</div>
            <div className="preloader__dots">
              <div className="preloader__dot"></div>
              <div className="preloader__dot"></div>
              <div className="preloader__dot"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Preloader;
