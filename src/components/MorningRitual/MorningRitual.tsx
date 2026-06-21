import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './MorningRitual.scss';

gsap.registerPlugin(ScrollTrigger);

interface RitualStage {
  time: string;
  title: string;
  description: string;
  image: string;
}

const stages: RitualStage[] = [
  {
    time: '4:00 AM',
    title: 'Before Sunrise',
    description:
      'The oven wakes before the city. Flour, butter, and water are measured with the precision of a perfumer blending notes. The dough begins its first fold.',
    image: '/images/ritual-01.jpg'
  },
  {
    time: '5:30 AM',
    title: 'The First Rise',
    description:
      'In the quiet of dawn, croissants rest under linen cloths. Temperature and humidity are read like weather charts. Every degree matters.',
    image: '/images/ritual-02.jpg'
  },
  {
    time: '6:30 AM',
    title: 'Coffee is Brewed',
    description:
      'Single-origin beans from Ethiopia and Colombia are dialed in. Grind size adjusted by microns. The first shot pulls like liquid silk.',
    image: '/images/ritual-03.jpg'
  },
  {
    time: '7:00 AM',
    title: 'The Ovens Sing',
    description:
      'Heat transforms dough into golden architecture. Twenty-two layers of butter and pastry separate into shattering, caramelized crust.',
    image: '/images/ritual-04.jpg'
  },
  {
    time: '7:30 AM',
    title: 'Opening Doors',
    description:
      'The bell chimes. A waft of warm viennoiserie meets the first customer. The ritual is complete — and begins again tomorrow.',
    image: '/images/ritual-05.jpg'
  }
];

const MorningRitual = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section header
      gsap.fromTo(
        '.morning-ritual__header',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.morning-ritual__header',
            start: 'top 80%'
          }
        }
      );

      // Timeline stages
      const stageEls = gsap.utils.toArray<HTMLElement>('.ritual-stage');
      stageEls.forEach((stage, i) => {
        const isEven = i % 2 === 0;

        gsap.fromTo(
          stage,
          { opacity: 0, x: isEven ? -60 : 60 },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: stage,
              start: 'top 80%'
            }
          }
        );

        // Image reveal
        const img = stage.querySelector('.ritual-stage__image');
        if (img) {
          gsap.fromTo(
            img,
            { scale: 1.15, opacity: 0 },
            {
              scale: 1,
              opacity: 1,
              duration: 1.2,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: stage,
                start: 'top 75%'
              }
            }
          );
        }
      });

      // Timeline line progress
      gsap.fromTo(
        '.morning-ritual__timeline-line',
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: '.morning-ritual__timeline',
            start: 'top 60%',
            end: 'bottom 40%',
            scrub: 1
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="morning-ritual section" id="morning-ritual" ref={sectionRef}>
      <div className="container">
        <div className="morning-ritual__header">
          <span className="label">The Process</span>
          <h2>Morning Ritual</h2>
          <p className="morning-ritual__subtitle">
            From darkness to dawn, every detail is orchestrated before the first sip is served.
          </p>
        </div>

        <div className="morning-ritual__timeline">
          <div className="morning-ritual__timeline-line" />

          {stages.map((stage, i) => (
            <div
              key={i}
              className={`ritual-stage ${i % 2 === 0 ? 'ritual-stage--left' : 'ritual-stage--right'}`}
            >
              <div className="ritual-stage__dot">
                <span className="ritual-stage__time">{stage.time}</span>
              </div>

              <div className="ritual-stage__content">
                <div className="ritual-stage__image">
                  <img src={stage.image} alt={stage.title} loading="lazy" />
                </div>
                <div className="ritual-stage__text">
                  <h3>{stage.title}</h3>
                  <p>{stage.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MorningRitual;
