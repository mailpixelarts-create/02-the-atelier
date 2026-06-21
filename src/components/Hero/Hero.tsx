import { useEffect, useRef } from 'react';
import { createHeroAnimation, createHeroParallax } from '../../animations/hero';
import './Hero.scss';

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      createHeroAnimation();
      createHeroParallax();
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="hero" ref={heroRef}>
      <div className="hero__atelier">
        <div className="hero__window">
          <div className="hero__window-frame" />
          <div className="hero__window-light" />
        </div>
        
        <div className="hero__croissant">
          <svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M30 90 Q50 30 100 40 Q150 30 170 90" className="hero__croissant-body" />
            <path d="M40 85 Q60 40 100 48 Q140 40 160 85" className="hero__croissant-inner" />
            <path d="M50 80 Q70 50 100 56 Q130 50 150 80" className="hero__croissant-detail" />
          </svg>
        </div>

        <div className="hero__flour-dust">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className={`hero__dust-particle hero__dust-particle--${i + 1}`} />
          ))}
        </div>
      </div>

      <div className="hero__vignette" />
      <div className="hero__noise" />
      <div className="hero__grain" />

      <div className="hero__content">
        <div className="hero__label">
          <div className="hero__label-dash" />
          <span>Parisian Artisan Café & Pâtisserie</span>
          <div className="hero__label-dash" />
        </div>

        <h1 className="hero__title">
          <span className="hero__title-line">Crafted</span>
          <span className="hero__title-line hero__title-line--accent">Every Morning</span>
          <span className="hero__title-line">Remembered Forever</span>
        </h1>

        <div className="hero__divider">
          <div className="hero__divider-line" />
          <div className="hero__divider-ornament">❋</div>
          <div className="hero__divider-line" />
        </div>

        <p className="hero__subtitle">
          Where the art of Parisian pastry meets the ritual of exceptional coffee.
        </p>

        <div className="hero__actions">
          <a href="#morning-ritual" className="hero__btn hero__btn--primary">
            <span>Discover Our Ritual</span>
          </a>
          <a href="#reservation" className="hero__btn hero__btn--secondary">
            <span>Reserve a Table</span>
          </a>
        </div>

        <div className="hero__meta">
          <div className="hero__meta-item">
            <span className="hero__meta-label">Address</span>
            <span className="hero__meta-value">42 Rue de Rivoli, Paris</span>
          </div>
          <div className="hero__meta-divider" />
          <div className="hero__meta-item">
            <span className="hero__meta-label">Hours</span>
            <span className="hero__meta-value">6:30 AM — 8:00 PM</span>
          </div>
        </div>
      </div>

      <div className="hero__scroll-indicator">
        <div className="hero__scroll-text">Défiler</div>
        <div className="hero__scroll-track">
          <div className="hero__scroll-thumb" />
        </div>
      </div>

      <div className="hero__corner hero__corner--tl" />
      <div className="hero__corner hero__corner--tr" />
      <div className="hero__corner hero__corner--bl" />
      <div className="hero__corner hero__corner--br" />
    </section>
  );
}
