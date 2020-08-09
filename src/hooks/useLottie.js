/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import lottie from 'lottie-web';

const useLottie = (el, animationSrc, config) => {
  const loadAnimation = () => {
    return lottie.loadAnimation({
      renderer: 'svg',
      loop: false,
      autoplay: false,
      ...config,
      container: el.current,
      animationData: animationSrc,
    });
  };

  // Add animation to element
  const addAnimationToEl = () => {
    el.current.animation = loadAnimation();
  };

  useEffect(() => {
    // Add lottie animation instance to animation prop
    addAnimationToEl();
  }, []);

  return el;
};

export default useLottie;
