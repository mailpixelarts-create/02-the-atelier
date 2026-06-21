import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const initHeroAnimations = () => {
  const tl = gsap.timeline({ delay: 3.4 });

  // Video overlay fade
  tl.fromTo(
    '.hero__video-overlay',
    { opacity: 1 },
    { opacity: 0.4, duration: 1.5, ease: 'power2.inOut' }
  );

  // Label entrance
  tl.fromTo(
    '.hero__label',
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
    '-=0.8'
  );

  // Headline word-by-word reveal
  const words = document.querySelectorAll('.hero__headline .word');
  tl.fromTo(
    words,
    { opacity: 0, y: 60, rotateX: -40 },
    { opacity: 1, y: 0, rotateX: 0, stagger: 0.06, duration: 0.9, ease: 'power3.out' },
    '-=0.4'
  );

  // Subline
  tl.fromTo(
    '.hero__subline',
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' },
    '-=0.3'
  );

  // CTA buttons
  tl.fromTo(
    '.hero__cta',
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
    '-=0.3'
  );

  // Scroll indicator
  tl.fromTo(
    '.hero__scroll',
    { opacity: 0 },
    { opacity: 1, duration: 0.5 },
    '-=0.2'
  );

  // Parallax on scroll
  gsap.to('.hero__video', {
    yPercent: 20,
    ease: 'none',
    scrollTrigger: {
      trigger: '.hero',
      start: 'top top',
      end: 'bottom top',
      scrub: 1
    }
  });

  // Content fade out on scroll
  gsap.to('.hero__content', {
    opacity: 0,
    y: -60,
    ease: 'none',
    scrollTrigger: {
      trigger: '.hero',
      start: 'center center',
      end: 'bottom top',
      scrub: 1
    }
  });

  return tl;
};
