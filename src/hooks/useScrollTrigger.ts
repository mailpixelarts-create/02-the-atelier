import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const useScrollTrigger = () => {
  useEffect(() => {
    ScrollTrigger.defaults({
      toggleActions: 'play none none reverse'
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return { ScrollTrigger };
};

export default useScrollTrigger;
