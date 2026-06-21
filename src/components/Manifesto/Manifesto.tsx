import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Manifesto.scss';

gsap.registerPlugin(ScrollTrigger);

const Manifesto = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLQuoteElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax on the background
      gsap.fromTo(
        '.manifesto__bg',
        { yPercent: -15 },
        {
          yPercent: 15,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1
          }
        }
      );

      // Quote text reveal
      const quoteWords = quoteRef.current?.querySelectorAll('.manifesto__word');
      if (quoteWords) {
        gsap.fromTo(
          quoteWords,
          { opacity: 0.15 },
          {
            opacity: 1,
            stagger: 0.05,
            ease: 'none',
            scrollTrigger: {
              trigger: quoteRef.current,
              start: 'top 70%',
              end: 'bottom 40%',
              scrub: 1
            }
          }
        );
      }

      // Line reveal
      gsap.fromTo(
        '.manifesto__line',
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.2,
          ease: 'power3.inOut',
          scrollTrigger: {
            trigger: '.manifesto__line',
            start: 'top 80%'
          }
        }
      );

      // Attribution fade in
      gsap.fromTo(
        '.manifesto__attribution',
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: '.manifesto__attribution',
            start: 'top 85%'
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const quoteText = 'Luxury begins with patience.';

  return (
    <section className="manifesto section" ref={sectionRef}>
      <div className="manifesto__bg" />

      <div className="container container--narrow">
        <div className="manifesto__content">
          <span className="manifesto__label label">Our Philosophy</span>

          <div className="manifesto__line" />

          <blockquote ref={quoteRef} className="manifesto__quote">
            {quoteText.split(' ').map((word, i) => (
              <span key={i} className="manifesto__word-wrapper">
                <span className="manifesto__word">{word}</span>
                {i < quoteText.split(' ').length - 1 && ' '}
              </span>
            ))}
          </blockquote>

          <div className="manifesto__line" />

          <div className="manifesto__attribution">
            <p>
              In every croissant folded at dawn, in every cup pulled with precision,
              we honor the slow art of doing things right.
            </p>
            <span className="label">— The Atelier, since 2019</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Manifesto;
