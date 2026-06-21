import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './Loader.scss';

interface LoaderProps {
  onComplete: () => void;
}

const Loader = ({ onComplete }: LoaderProps) => {
  const loaderRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<SVGSVGElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(loaderRef.current, {
          yPercent: -100,
          duration: 0.8,
          ease: 'power3.inOut',
          onComplete
        });
      }
    });

    // Animate logo path
    const logoPaths = logoRef.current?.querySelectorAll('.logo-path');
    if (logoPaths) {
      tl.fromTo(
        logoPaths,
        { strokeDashoffset: 1000 },
        { strokeDashoffset: 0, duration: 2, stagger: 0.2, ease: 'power2.inOut' }
      );
    }

    // Animate text
    tl.fromTo(
      textRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
      '-=1.2'
    );

    // Progress bar
    tl.fromTo(
      progressRef.current,
      { scaleX: 0 },
      { scaleX: 1, duration: 2.5, ease: 'power1.inOut' },
      0
    );

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div className="loader" ref={loaderRef}>
      <div className="loader__content">
        <svg
          ref={logoRef}
          className="loader__logo"
          viewBox="0 0 200 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="logo-path"
            d="M10 60 Q50 10 100 40 T190 30"
            stroke="#2C241F"
            strokeWidth="1.5"
            fill="none"
            strokeDasharray="1000"
            strokeDashoffset="1000"
          />
          <text x="50" y="50" className="loader__logo-text" fill="#2C241F">
            THE ATELIER
          </text>
        </svg>

        <div ref={textRef} className="loader__tagline">
          <span>Parisian Artisan Cafe</span>
        </div>

        <div className="loader__progress">
          <div ref={progressRef} className="loader__progress-bar" />
        </div>

        {/* Coffee aroma particles */}
        <div className="loader__particles">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="loader__particle"
              style={{
                left: `${15 + i * 10}%`,
                animationDelay: `${i * 0.3}s`,
                '--drift': `${(i % 2 === 0 ? 1 : -1) * (5 + i * 2)}px`
              } as React.CSSProperties}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Loader;
