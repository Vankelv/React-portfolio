import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';

const TextSlider = () => {
  const [index, setIndex] = useState(0);
  const texts = [
    'I craft stunning websites with flawless functionality.',
    'I design striking brand identities that leave a lasting impression.',
    'I provide expert IT support to keep your systems running smoothly.'
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
    <animated.h3 style={{ color: 'white', ...spring }}>
      {texts[index]}
    </animated.h3>
  );
};

export default TextSlider;
