import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './TheBakery.scss';

gsap.registerPlugin(ScrollTrigger);

const TheBakery = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image parallax
      gsap.fromTo(
        '.bakery__image-main img',
        { yPercent: -10 },
        {
          yPercent: 10,
          ease: 'none',
          scrollTrigger: {
            trigger: '.bakery__image-main',
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1
          }
        }
      );

      // Content reveal
      const contentEls = gsap.utils.toArray<HTMLElement>(
        '.bakery__story > *, .bakery__detail'
      );
      contentEls.forEach((el) => {
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
              start: 'top 85%'
            }
          }
        );
      });

      // Secondary images
      const sideImages = gsap.utils.toArray<HTMLElement>('.bakery__image-side');
      sideImages.forEach((img) => {
        gsap.fromTo(
          img,
          { opacity: 0, scale: 0.95 },
          {
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: img,
              start: 'top 80%'
            }
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="bakery section" id="the-bakery" ref={sectionRef}>
      <div className="container">
        <div className="bakery__layout">
          <div className="bakery__images">
            <div className="bakery__image-main">
              <img src="/images/bakery-main.jpg" alt="The Atelier bakery interior" loading="lazy" />
            </div>
            <div className="bakery__image-side bakery__image-side--1">
              <img src="/images/bakery-side1.jpg" alt="Dough preparation" loading="lazy" />
            </div>
            <div className="bakery__image-side bakery__image-side--2">
              <img src="/images/bakery-side2.jpg" alt="Fresh pastries" loading="lazy" />
            </div>
          </div>

          <div className="bakery__content">
            <div className="bakery__story">
              <span className="label">The Bakery</span>
              <h2>Behind Every Crust,<br />a Story</h2>
              <p>
                Our bakery is not a factory. It is a workshop — a place where hands
                shape dough with the same reverence a sculptor gives to marble. Every
                morning, before the city stirs, we begin.
              </p>
              <p>
                We source heritage wheat from the Beauce region. Our butter comes from
                Normandy, churned from grass-fed cows. Our flour is stone-ground, alive
                with the minerals and character that industrial milling strips away.
              </p>
            </div>

            <div className="bakery__details">
              <div className="bakery__detail">
                <span className="bakery__detail-number">100%</span>
                <span className="bakery__detail-label">Organic Flour</span>
              </div>
              <div className="bakery__detail">
                <span className="bakery__detail-number">48h</span>
                <span className="bakery__detail-label">Cold Fermentation</span>
              </div>
              <div className="bakery__detail">
                <span className="bakery__detail-number">22</span>
                <span className="bakery__detail-label">Layers of Butter</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheBakery;
