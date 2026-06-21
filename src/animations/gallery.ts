import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const initGalleryAnimations = () => {
  const items = gsap.utils.toArray<HTMLElement>('.gallery__item');

  items.forEach((item) => {
    gsap.fromTo(
      item,
      { opacity: 0, y: 40, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: item,
          start: 'top 85%'
        }
      }
    );
  });

  // Hover effect - image zoom
  items.forEach((item) => {
    const img = item.querySelector('img');
    if (!img) return;

    item.addEventListener('mouseenter', () => {
      gsap.to(img, { scale: 1.05, duration: 0.6, ease: 'power2.out' });
    });

    item.addEventListener('mouseleave', () => {
      gsap.to(img, { scale: 1, duration: 0.6, ease: 'power2.out' });
    });
  });
};

export const initMasonryLayout = () => {
  const container = document.querySelector('.gallery__masonry');
  if (!container) return;

  // Ensure proper masonry column layout
  const items = gsap.utils.toArray<HTMLElement>('.gallery__item');
  items.forEach((item) => {
    // Force reflow for proper column layout
    item.style.breakInside = 'avoid';
  });
};
