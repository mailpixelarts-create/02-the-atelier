import { gsap } from 'gsap';

export const initLoaderAnimation = (
  logoRef: SVGSVGElement | null,
  textRef: HTMLDivElement | null,
  progressRef: HTMLDivElement | null,
  onComplete: () => void
) => {
  const tl = gsap.timeline({
    onComplete: () => {
      gsap.to('.loader', {
        yPercent: -100,
        duration: 0.8,
        ease: 'power3.inOut',
        onComplete
      });
    }
  });

  // Animate SVG logo paths
  const logoPaths = logoRef?.querySelectorAll('.logo-path');
  if (logoPaths) {
    tl.fromTo(
      logoPaths,
      { strokeDashoffset: 1000 },
      { strokeDashoffset: 0, duration: 2, stagger: 0.2, ease: 'power2.inOut' }
    );
  }

  // Animate text
  if (textRef) {
    tl.fromTo(
      textRef,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
      '-=1.2'
    );
  }

  // Progress bar
  if (progressRef) {
    tl.fromTo(
      progressRef,
      { scaleX: 0 },
      { scaleX: 1, duration: 2.5, ease: 'power1.inOut' },
      0
    );
  }

  return tl;
};

export const createAromaParticles = (container: HTMLElement) => {
  const particles = 8;

  for (let i = 0; i < particles; i++) {
    const particle = document.createElement('div');
    particle.className = 'loader__particle';
    particle.style.left = `${15 + i * 10}%`;
    particle.style.animationDelay = `${i * 0.3}s`;
    particle.style.setProperty('--drift', `${(i % 2 === 0 ? 1 : -1) * (5 + i * 2)}px`);
    container.appendChild(particle);
  }
};
