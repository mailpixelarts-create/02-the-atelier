import { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import './Navigation.scss';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      gsap.fromTo(
        '.nav__menu-link',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.08, duration: 0.5, ease: 'power3.out', delay: 0.2 }
      );
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  const navLinks = [
    { label: 'Morning Ritual', href: '#morning-ritual' },
    { label: 'Coffee', href: '#signature-coffee' },
    { label: 'Patisserie', href: '#seasonal-pastries' },
    { label: 'The Bakery', href: '#the-bakery' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Journal', href: '#journal' },
    { label: 'Reserve', href: '#reservation' }
  ];

  return (
    <>
      <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
        <div className="nav__inner">
          <a href="#" className="nav__logo">
            <span className="nav__logo-main">THE ATELIER</span>
            <span className="nav__logo-sub">Paris</span>
          </a>

          <div className="nav__links">
            {navLinks.slice(0, 4).map((link) => (
              <a key={link.href} href={link.href} className="nav__link">
                {link.label}
              </a>
            ))}
          </div>

          <button
            className={`nav__burger ${isOpen ? 'nav__burger--open' : ''}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      <div className={`nav__menu ${isOpen ? 'nav__menu--open' : ''}`}>
        <div className="nav__menu-inner">
          <div className="nav__menu-links">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav__menu-link"
                onClick={() => setIsOpen(false)}
              >
                <span className="nav__menu-link-number">
                  {String(navLinks.indexOf(link) + 1).padStart(2, '0')}
                </span>
                <span className="nav__menu-link-text">{link.label}</span>
              </a>
            ))}
          </div>

          <div className="nav__menu-footer">
            <div className="nav__menu-info">
              <p>42 Rue de Rivoli</p>
              <p>Paris, 75001</p>
            </div>
            <div className="nav__menu-hours">
              <p>Mon — Sat</p>
              <p>7:00 — 19:00</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
