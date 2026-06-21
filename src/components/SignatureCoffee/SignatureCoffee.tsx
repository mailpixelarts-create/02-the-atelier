import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './SignatureCoffee.scss';

gsap.registerPlugin(ScrollTrigger);

interface CoffeeItem {
  name: string;
  origin: string;
  description: string;
  price: string;
  image: string;
}

const coffees: CoffeeItem[] = [
  {
    name: 'Espresso',
    origin: 'Colombia & Ethiopia Blend',
    description:
      'A double shot pulled at 9 bars. Notes of dark chocolate, toasted walnut, and a whisper of blackberry on the finish.',
    price: '€4.50',
    image: '/images/coffee-espresso.jpg'
  },
  {
    name: 'Pour Over',
    origin: 'Ethiopia Yirgacheffe',
    description:
      'Hand-poured through a ceramic V60. Bright jasmine aromatics with stone fruit sweetness and a clean, tea-like body.',
    price: '€5.50',
    image: '/images/coffee-pourover.jpg'
  },
  {
    name: 'Chemex',
    origin: 'Guatemala Huehuetenango',
    description:
      'Slow-filtered for clarity. Milk chocolate, brown sugar, and a delicate acidity that unfolds like silk.',
    price: '€6.00',
    image: '/images/coffee-chemex.jpg'
  },
  {
    name: 'Cold Brew',
    origin: 'Brazil Santos',
    description:
      'Steeped for eighteen hours in cold spring water. Smooth, full-bodied, with notes of caramel and roasted hazelnut.',
    price: '€5.50',
    image: '/images/coffee-coldbrew.jpg'
  },
  {
    name: 'House Blend',
    origin: 'The Atelier Signature',
    description:
      'Our proprietary blend roasted in small batches. A balanced cup of honey sweetness, mild acidity, and a velvet finish.',
    price: '€4.00',
    image: '/images/coffee-houseblend.jpg'
  }
];

const SignatureCoffee = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.coffee__header',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.coffee__header',
            start: 'top 80%'
          }
        }
      );

      const cards = gsap.utils.toArray<HTMLElement>('.coffee-card');
      cards.forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: i * 0.1,
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
    <section className="coffee section" id="signature-coffee" ref={sectionRef}>
      <div className="container">
        <div className="coffee__header">
          <span className="label">The Coffee</span>
          <h2>Signature Collection</h2>
          <p>
            Sourced from single estates. Roasted weekly. Served with intention.
          </p>
        </div>

        <div className="coffee__grid">
          {coffees.map((coffee, i) => (
            <article key={i} className="coffee-card">
              <div className="coffee-card__image">
                <img src={coffee.image} alt={coffee.name} loading="lazy" />
                <span className="coffee-card__price">{coffee.price}</span>
              </div>
              <div className="coffee-card__content">
                <div className="coffee-card__header">
                  <h3>{coffee.name}</h3>
                  <span className="coffee-card__origin">{coffee.origin}</span>
                </div>
                <p>{coffee.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SignatureCoffee;
