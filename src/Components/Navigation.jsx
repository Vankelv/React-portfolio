import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/portfolio">My Work</Link>
      <Link to="/about">About Me</Link>
      <Link to="/contact">Contact Me</Link>
    </nav>
  );
};

export default Navigation;
