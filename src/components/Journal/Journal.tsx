import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Journal.scss';

gsap.registerPlugin(ScrollTrigger);

interface JournalEntry {
  date: string;
  category: string;
  title: string;
  excerpt: string;
  image: string;
  readTime: string;
}

const entries: JournalEntry[] = [
  {
    date: 'June 2026',
    category: 'Coffee Origins',
    title: 'Following the Bean: A Journey to Yirgacheffe',
    excerpt:
      'We traveled to the birthplace of coffee to source our newest single-origin. What we found in the highlands of Ethiopia changed how we think about every cup.',
    image: '/images/journal-01.jpg',
    readTime: '8 min read'
  },
  {
    date: 'May 2026',
    category: 'Pastry Arts',
    title: 'The 72-Hour Croissant: Why We Wait',
    excerpt:
      'Our croissant dough ferments for three full days. The result is a flavor complexity and textural depth that no shortcut can replicate.',
    image: '/images/journal-02.jpg',
    readTime: '6 min read'
  },
  {
    date: 'April 2026',
    category: 'Design',
    title: 'Ceramics by Eloise: The Art of the Everyday',
    excerpt:
      'Meet the Parisian ceramicist whose handmade cups and plates give The Atelier its tactile soul. Each piece carries the warmth of the kiln.',
    image: '/images/journal-03.jpg',
    readTime: '5 min read'
  }
];

const Journal = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.journal__header',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.journal__header',
            start: 'top 80%'
          }
        }
      );

      const cards = gsap.utils.toArray<HTMLElement>('.journal-card');
      cards.forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: i * 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%'
            }
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="journal section" id="journal" ref={sectionRef}>
      <div className="container">
        <div className="journal__header">
          <div className="journal__header-text">
            <span className="label">The Journal</span>
            <h2>Stories from the Atelier</h2>
          </div>
          <a href="#" className="btn">
            View All Stories
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1" />
            </svg>
          </a>
        </div>

        <div className="journal__grid">
          {entries.map((entry, i) => (
            <article key={i} className="journal-card">
              <div className="journal-card__image">
                <img src={entry.image} alt={entry.title} loading="lazy" />
                <span className="journal-card__category">{entry.category}</span>
              </div>
              <div className="journal-card__content">
                <div className="journal-card__meta">
                  <span>{entry.date}</span>
                  <span className="journal-card__dot">·</span>
                  <span>{entry.readTime}</span>
                </div>
                <h3>{entry.title}</h3>
                <p>{entry.excerpt}</p>
                <a href="#" className="journal-card__link">
                  Read More
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M1 6h10M7 2l3 4-3 4" stroke="currentColor" strokeWidth="1" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journal;
