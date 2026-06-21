import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Gallery.scss';

gsap.registerPlugin(ScrollTrigger);

const images = [
  { src: '/images/gallery-01.jpg', alt: 'Morning light through cafe windows', size: 'large' },
  { src: '/images/gallery-02.jpg', alt: 'Barista pouring latte art', size: 'small' },
  { src: '/images/gallery-03.jpg', alt: 'Fresh croissants on cooling rack', size: 'medium' },
  { src: '/images/gallery-04.jpg', alt: 'Ceramic cups on wooden shelf', size: 'small' },
  { src: '/images/gallery-05.jpg', alt: 'The Atelier storefront at dawn', size: 'large' },
  { src: '/images/gallery-06.jpg', alt: 'Coffee beans being roasted', size: 'medium' },
  { src: '/images/gallery-07.jpg', alt: 'Interior details and tilework', size: 'small' },
  { src: '/images/gallery-08.jpg', alt: 'Pastry chef dusting sugar', size: 'medium' },
  { src: '/images/gallery-09.jpg', alt: 'Handmade bread loaves', size: 'small' },
  { src: '/images/gallery-10.jpg', alt: 'Espresso machine close-up', size: 'large' },
  { src: '/images/gallery-11.jpg', alt: 'Outdoor seating in morning sun', size: 'medium' },
  { src: '/images/gallery-12.jpg', alt: 'The bar counter and pastry display', size: 'small' },
  { src: '/images/gallery-13.jpg', alt: 'Seasonal fruit tart detail', size: 'medium' },
  { src: '/images/gallery-14.jpg', alt: 'Reading corner with books', size: 'small' },
  { src: '/images/gallery-15.jpg', alt: 'Steam rising from coffee cup', size: 'large' },
  { src: '/images/gallery-16.jpg', alt: 'Kitchen team at work', size: 'small' },
  { src: '/images/gallery-17.jpg', alt: 'Window display with flowers', size: 'medium' },
  { src: '/images/gallery-18.jpg', alt: 'Evening ambiance at The Atelier', size: 'small' }
];

const Gallery = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.gallery__header',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.gallery__header',
            start: 'top 80%'
          }
        }
      );

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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="gallery section" id="gallery" ref={sectionRef}>
      <div className="container">
        <div className="gallery__header">
          <span className="label">Visual Journal</span>
          <h2>The Atelier Gallery</h2>
        </div>

        <div className="gallery__masonry">
          {images.map((img, i) => (
            <div key={i} className={`gallery__item gallery__item--${img.size}`}>
              <div className="gallery__item-inner">
                <img src={img.src} alt={img.alt} loading="lazy" />
                <div className="gallery__item-overlay">
                  <span className="gallery__item-number">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="gallery__item-caption">{img.alt}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
