import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function createHeroAnimation(): gsap.core.Timeline {
  const tl = gsap.timeline({ delay: 0.3 });

  // Window light appears
  tl.to('.hero__window', {
    opacity: 0.6,
    duration: 2,
    ease: 'power2.out',
  }, 0);

  // Croissant draws itself
  tl.to('.hero__croissant', {
    opacity: 1,
    duration: 0.5,
    ease: 'power2.out',
  }, 0.5);
  tl.to('.hero__croissant-body', {
    strokeDashoffset: 0,
    duration: 2,
    ease: 'power2.inOut',
  }, 0.8);
  tl.to('.hero__croissant-inner', {
    strokeDashoffset: 0,
    duration: 1.5,
    ease: 'power2.inOut',
  }, 1.5);
  tl.to('.hero__croissant-detail', {
    strokeDashoffset: 0,
    duration: 1,
    ease: 'power2.inOut',
  }, 2);

  // Flour dust floats
  const dust = document.querySelectorAll('.hero__dust-particle');
  dust.forEach((particle, i) => {
    tl.to(particle, {
      opacity: 0.4,
      duration: 0.3,
      ease: 'power2.out',
    }, 1 + i * 0.1);

    gsap.to(particle, {
      y: -(30 + Math.random() * 40),
      x: (Math.random() - 0.5) * 20,
      opacity: 0,
      duration: 4 + Math.random() * 2,
      ease: 'power1.out',
      repeat: -1,
      delay: 2 + i * 0.2,
    });
  });

  // Label reveals
  tl.to('.hero__label', {
    opacity: 1,
    duration: 1,
    ease: 'power2.out',
  }, 2);

  // Title lines reveal slowly — Parisian pacing
  tl.to('.hero__title-line', {
    y: 0,
    opacity: 1,
    stagger: 0.2,
    duration: 1.2,
    ease: 'power3.out',
  }, 2.5);

  // Divider
  tl.to('.hero__divider', {
    opacity: 1,
    duration: 0.8,
    ease: 'power2.out',
  }, 3.5);
  tl.to('.hero__divider-line', {
    scaleX: 1,
    duration: 1,
    ease: 'power3.inOut',
  }, 3.6);
  tl.to('.hero__divider-ornament', {
    scale: 1,
    rotation: 0,
    duration: 0.6,
    ease: 'back.out(1.7)',
  }, 4);

  // Subtitle
  tl.to('.hero__subtitle', {
    opacity: 1,
    duration: 1,
    ease: 'power2.out',
  }, 4);

  // Actions
  tl.to('.hero__actions', {
    opacity: 1,
    duration: 0.8,
    ease: 'power2.out',
  }, 4.2);

  // Meta
  tl.to('.hero__meta', {
    opacity: 1,
    duration: 0.8,
    ease: 'power2.out',
  }, 4.4);

  // Scroll indicator
  tl.to('.hero__scroll-indicator', {
    opacity: 0.5,
    duration: 0.6,
    ease: 'power2.out',
  }, 4.6);

  // Corners
  tl.to('.hero__corner', {
    opacity: 0.3,
    duration: 0.5,
    stagger: 0.1,
    ease: 'power2.out',
  }, 4.5);

  return tl;
}

export function createHeroParallax(): void {
  const hero = document.querySelector('.hero');
  if (!hero) return;

  // Content parallax
  gsap.to('.hero__content', {
    y: 100,
    opacity: 0,
    ease: 'none',
    scrollTrigger: {
      trigger: hero,
      start: 'top top',
      end: 'bottom top',
      scrub: 1.5,
    },
  });

  // Window parallax
  gsap.to('.hero__window', {
    y: -60,
    ease: 'none',
    scrollTrigger: {
      trigger: hero,
      start: 'top top',
      end: 'bottom top',
      scrub: 2,
    },
  });

  // Croissant parallax
  gsap.to('.hero__croissant', {
    y: -40,
    x: 20,
    ease: 'none',
    scrollTrigger: {
      trigger: hero,
      start: 'top top',
      end: 'bottom top',
      scrub: 1,
    },
  });
}
