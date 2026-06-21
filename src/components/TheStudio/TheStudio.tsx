import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './TheStudio.scss';

gsap.registerPlugin(ScrollTrigger);

const studioItems = [
  {
    title: 'Handmade Ceramics',
    description:
      'Every cup and plate in The Atelier is crafted by Parisian ceramicist Eloise Marchand. Each piece is wheel-thrown, glazed by hand, and fired in a wood-burning kiln — making every vessel one of a kind.',
    image: '/images/studio-ceramics.jpg'
  },
  {
    title: 'Custom Furniture',
    description:
      'Our tables are built from reclaimed Parisian oak, sanded to a matte finish and treated with natural oils. The chairs, designed by Studio Voltaire, blend mid-century lines with artisanal joinery.',
    image: '/images/studio-furniture.jpg'
  },
  {
    title: 'The Space',
    description:
      'A former printmaker\'s workshop on Rue de Rivoli, our space retains its original tin ceilings, terrazzo floors, and wrought-iron windows. Light pours in from a skylight above the bar.',
    image: '/images/studio-space.jpg'
  }
];

const TheStudio = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.studio__header',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.studio__header',
            start: 'top 80%'
          }
        }
      );

      const items = gsap.utils.toArray<HTMLElement>('.studio-item');
      items.forEach((item, i) => {
        const isEven = i % 2 === 0;

        gsap.fromTo(
          item,
          { opacity: 0, x: isEven ? -40 : 40 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 80%'
            }
          }
        );

        const img = item.querySelector('.studio-item__image img');
        if (img) {
          gsap.fromTo(
            img,
            { scale: 1.1 },
            {
              scale: 1,
              duration: 1.2,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: item,
                start: 'top 75%'
              }
            }
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="studio section" id="the-studio" ref={sectionRef}>
      <div className="container">
        <div className="studio__header">
          <span className="label">The Studio</span>
          <h2>Objects of Quiet Beauty</h2>
          <p>
            Every detail in The Atelier — from the cup you drink from to the chair
            you sit in — is designed, handmade, and deeply considered.
          </p>
        </div>

        <div className="studio__items">
          {studioItems.map((item, i) => (
            <div
              key={i}
              className={`studio-item ${i % 2 === 0 ? 'studio-item--left' : 'studio-item--right'}`}
            >
              <div className="studio-item__image">
                <img src={item.image} alt={item.title} loading="lazy" />
              </div>
              <div className="studio-item__content">
                <span className="studio-item__number">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TheStudio;
