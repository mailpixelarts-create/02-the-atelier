import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Footer.scss';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.footer__inner',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top 90%'
          }
        }
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" ref={footerRef}>
      <div className="container">
        <div className="footer__inner">
          <div className="footer__top">
            <div className="footer__brand">
              <span className="footer__logo">THE ATELIER</span>
              <span className="footer__tagline">Parisian Artisan Cafe & Patisserie</span>
            </div>

            <div className="footer__columns">
              <div className="footer__column">
                <h4>Visit</h4>
                <p>42 Rue de Rivoli</p>
                <p>Paris, 75001</p>
                <p>France</p>
              </div>

              <div className="footer__column">
                <h4>Hours</h4>
                <p>Monday — Saturday</p>
                <p>7:00 AM — 7:00 PM</p>
                <p>Sunday — Closed</p>
              </div>

              <div className="footer__column">
                <h4>Connect</h4>
                <a href="#">Instagram</a>
                <a href="#">Newsletter</a>
                <a href="#">Press Inquiries</a>
              </div>
            </div>
          </div>

          <div className="footer__divider" />

          <div className="footer__bottom">
            <p className="footer__credit">
              A LOOKBOOK Studio Experience
            </p>
            <p className="footer__copyright">
              © {currentYear} Norman James. Made with love by Empathy Studio.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
