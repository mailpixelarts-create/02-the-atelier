import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const initSectionAnimations = () => {
  // Fade in up on scroll
  const fadeElements = document.querySelectorAll('[data-animate="fade-up"]');
  fadeElements.forEach((el) => {
    gsap.fromTo(
      el,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 80%'
        }
      }
    );
  });

  // Slide from left
  const slideLeftElements = document.querySelectorAll('[data-animate="slide-left"]');
  slideLeftElements.forEach((el) => {
    gsap.fromTo(
      el,
      { opacity: 0, x: -60 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 80%'
        }
      }
    );
  });

  // Slide from right
  const slideRightElements = document.querySelectorAll('[data-animate="slide-right"]');
  slideRightElements.forEach((el) => {
    gsap.fromTo(
      el,
      { opacity: 0, x: 60 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 80%'
        }
      }
    );
  });

  // Scale in
  const scaleElements = document.querySelectorAll('[data-animate="scale-in"]');
  scaleElements.forEach((el) => {
    gsap.fromTo(
      el,
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 80%'
        }
      }
    );
  });

  // Parallax images
  const parallaxImages = document.querySelectorAll('[data-parallax]');
  parallaxImages.forEach((img) => {
    gsap.fromTo(
      img,
      { yPercent: -10 },
      {
        yPercent: 10,
        ease: 'none',
        scrollTrigger: {
          trigger: img,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1
        }
      }
    );
  });

  // Horizontal line reveal
  const lines = document.querySelectorAll('[data-animate="line-reveal"]');
  lines.forEach((line) => {
    gsap.fromTo(
      line,
      { scaleX: 0 },
      {
        scaleX: 1,
        duration: 1.2,
        ease: 'power3.inOut',
        scrollTrigger: {
          trigger: line,
          start: 'top 80%'
        }
      }
    );
  });
};
