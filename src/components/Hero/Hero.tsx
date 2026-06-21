import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './Hero.scss';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const sublineRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 3.4 });

      tl.fromTo(
        '.hero__video-overlay',
        { opacity: 1 },
        { opacity: 0.4, duration: 1.5, ease: 'power2.inOut' }
      );

      tl.fromTo(
        '.hero__label',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
        '-=0.8'
      );

      // Headline word reveal
      const words = headlineRef.current?.querySelectorAll('.word');
      if (words) {
        tl.fromTo(
          words,
          { opacity: 0, y: 60, rotateX: -40 },
          { opacity: 1, y: 0, rotateX: 0, stagger: 0.06, duration: 0.9, ease: 'power3.out' },
          '-=0.4'
        );
      }

      tl.fromTo(
        sublineRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' },
        '-=0.3'
      );

      tl.fromTo(
        ctaRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
        '-=0.3'
      );

      tl.fromTo(
        '.hero__scroll',
        { opacity: 0 },
        { opacity: 1, duration: 0.5 },
        '-=0.2'
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const headlineWords = 'Crafted Every Morning. Remembered Forever.'.split(' ');

  return (
    <section className="hero" ref={heroRef} id="hero">
      <div className="hero__video-wrapper">
        <video
          className="hero__video"
          autoPlay
          muted
          loop
          playsInline
          poster="/images/hero-poster.jpg"
        >
          <source src="/videos/atelier-morning.mp4" type="video/mp4" />
        </video>
        <div className="hero__video-overlay" />
      </div>

      <div className="hero__content">
        <span className="hero__label label">Parisian Artisan Cafe & Patisserie</span>

        <h1 ref={headlineRef} className="hero__headline">
          {headlineWords.map((word, i) => (
            <span key={i} className="word-wrapper">
              <span className="word">{word}</span>
              {i < headlineWords.length - 1 && ' '}
            </span>
          ))}
        </h1>

        <div ref={sublineRef} className="hero__subline">
          <p>Where the art of Parisian pastry meets the ritual of exceptional coffee.</p>
        </div>

        <div ref={ctaRef} className="hero__cta">
          <a href="#morning-ritual" className="btn">
            <span>Discover Our Ritual</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 1v14M1 8l7 7 7-7" stroke="currentColor" strokeWidth="1" />
            </svg>
          </a>
          <a href="#reservation" className="btn btn--filled">
            Reserve a Table
          </a>
        </div>
      </div>

      <div className="hero__scroll">
        <div className="hero__scroll-line" />
        <span>Scroll</span>
      </div>
    </section>
  );
};

export default Hero;
