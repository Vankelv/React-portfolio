import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import '../styles/main.css';

const TextSlider = () => {
  const [index, setIndex] = useState(0);
  const texts = [
    'I build powerful web applications using the MERN stack.',
    'I design professional logos and compelling brand identities.',
    'I implement ISO-compliant security systems for businesses.'
  ];  
  const spring = useSpring({
    from: { transform: 'translate3d(0, 100%, 0)', opacity: 0 },
    to: { transform: 'translate3d(0, 0%, 0)', opacity: 1 },
    reset: true
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [index, texts.length]);

  return (
    <animated.h4 className="animate" style={{ textAlign: 'center', color: 'white', ...spring }}>
      {texts[index]}
    </animated.h4>
  );
};

export default TextSlider;
