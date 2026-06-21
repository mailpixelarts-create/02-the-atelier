import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './SeasonalPastries.scss';

gsap.registerPlugin(ScrollTrigger);

interface Pastry {
  name: string;
  description: string;
  price: string;
  image: string;
  seasonal?: boolean;
}

const pastries: Pastry[] = [
  {
    name: 'Croissant',
    description:
      'Twenty-two layers of hand-laminated dough. Golden, shattering, and impossibly light. Our signature since day one.',
    price: '€3.50',
    image: '/images/pastry-croissant.jpg'
  },
  {
    name: 'Pain au Chocolat',
    description:
      'Two batons of Valrhona dark chocolate wrapped in buttery, flaky pastry. Warm from the oven at 7:30 AM sharp.',
    price: '€4.00',
    image: '/images/pastry-painchocolat.jpg'
  },
  {
    name: 'Tarte aux Fruits',
    description:
      'A crisp almond frangipane base topped with seasonal fruits. This week: figs, plums, and passion fruit.',
    price: '€6.50',
    image: '/images/pastry-tarte.jpg',
    seasonal: true
  },
  {
    name: 'Pistachio Escargot',
    description:
      'Swirled with house-made pistachio frangipane and topped with crushed Bronte pistachios. Warm, nutty, unforgettable.',
    price: '€4.50',
    image: '/images/pastry-escargot.jpg'
  },
  {
    name: 'Kouign-Amann',
    description:
      'The Breton classic. Caramelized butter and sugar folded into bread dough until deeply golden and impossibly caramelized.',
    price: '€5.00',
    image: '/images/pastry-kouignamann.jpg'
  },
  {
    name: 'Paris-Brest',
    description:
      'Choux pastry ring filled with hazelnut praline mousseline cream. A tribute to the legendary bicycle race of 1910.',
    price: '€7.00',
    image: '/images/pastry-parisbrest.jpg'
  }
];

const SeasonalPastries = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.pastries__header',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.pastries__header',
            start: 'top 80%'
          }
        }
      );

      const cards = gsap.utils.toArray<HTMLElement>('.pastry-card');
      cards.forEach((card, i) => {
        const image = card.querySelector('.pastry-card__image img');
        const content = card.querySelector('.pastry-card__content');

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: 'top 80%'
          }
        });

        tl.fromTo(
          card,
          { opacity: 0, y: 60 },
          { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
        );

        if (image) {
          tl.fromTo(
            image,
            { scale: 1.15 },
            { scale: 1, duration: 1.2, ease: 'power3.out' },
            '-=0.6'
          );
        }

        if (content) {
          tl.fromTo(
            content.children,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, stagger: 0.1, duration: 0.5 },
            '-=0.8'
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="pastries section" id="seasonal-pastries" ref={sectionRef}>
      <div className="container">
        <div className="pastries__header">
          <span className="label">The Patisserie</span>
          <h2>Seasonal Viennoiserie</h2>
          <p>
            Baked fresh before dawn. Each piece is a small architecture of butter, flour, and time.
          </p>
        </div>

        <div className="pastries__grid">
          {pastries.map((pastry, i) => (
            <article key={i} className={`pastry-card ${pastry.seasonal ? 'pastry-card--seasonal' : ''}`}>
              <div className="pastry-card__image">
                <img src={pastry.image} alt={pastry.name} loading="lazy" />
                {pastry.seasonal && <span className="pastry-card__badge">Seasonal</span>}
                <span className="pastry-card__price">{pastry.price}</span>
              </div>
              <div className="pastry-card__content">
                <h3>{pastry.name}</h3>
                <p>{pastry.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SeasonalPastries;
