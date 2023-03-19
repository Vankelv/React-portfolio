import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';

const TextSlider = () => {
  const [index, setIndex] = useState(0);
  const texts = [
    'I craft stunning websites with flawless functionality.',
    'I design striking brand identities with lasting impression.',
    'I offer expert IT support for smooth system performance.'
  ];

  const spring = useSpring({
    from: { transform: 'translate3d(0, 100%, 0)', opacity: 0 },
    to: { transform: 'translate3d(0, 0%, 0)', opacity: 1 },
    reset: true
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index + 1) % texts.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [index, texts.length]);

  return (
    <animated.h4 style={{ color: 'white', ...spring }}>
      {texts[index]}
    </animated.h4>
  );
};

export default TextSlider;
