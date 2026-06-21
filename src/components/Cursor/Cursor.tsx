import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './Cursor.scss';

const Cursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check for touch device
    if ('ontouchstart' in window) {
      document.body.style.cursor = 'auto';
      return;
    }

    const cursor = cursorRef.current;
    const dot = cursorDotRef.current;
    if (!cursor || !dot) return;

    const pos = { x: 0, y: 0 };
    const mouse = { x: 0, y: 0 };
    const speed = 0.15;

    const onMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const onMouseDown = () => {
      gsap.to(cursor, { scale: 0.85, duration: 0.15 });
    };

    const onMouseUp = () => {
      gsap.to(cursor, { scale: 1, duration: 0.15 });
    };

    // Hover states
    const onMouseEnterInteractive = () => {
      gsap.to(cursor, {
        width: 72,
        height: 72,
        borderColor: 'rgba(162, 123, 92, 0.3)',
        duration: 0.4,
        ease: 'power3.out'
      });
      gsap.to(dot, { scale: 0, duration: 0.2 });
    };

    const onMouseLeaveInteractive = () => {
      gsap.to(cursor, {
        width: 12,
        height: 12,
        borderColor: '#A27B5C',
        duration: 0.4,
        ease: 'power3.out'
      });
      gsap.to(dot, { scale: 1, duration: 0.2 });
    };

    // Animation loop
    const render = () => {
      pos.x += (mouse.x - pos.x) * speed;
      pos.y += (mouse.y - pos.y) * speed;

      gsap.set(cursor, { x: pos.x - 6, y: pos.y - 6 });
      gsap.set(dot, { x: mouse.x - 2, y: mouse.y - 2 });

      requestAnimationFrame(render);
    };

    // Attach events
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseup', onMouseUp);

    // Find interactive elements
    const interactives = document.querySelectorAll(
      'a, button, input, select, textarea, .btn, [data-cursor-hover]'
    );
    interactives.forEach((el) => {
      el.addEventListener('mouseenter', onMouseEnterInteractive);
      el.addEventListener('mouseleave', onMouseLeaveInteractive);
    });

    render();

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
      interactives.forEach((el) => {
        el.removeEventListener('mouseenter', onMouseEnterInteractive);
        el.removeEventListener('mouseleave', onMouseLeaveInteractive);
      });
    };
  }, []);

  // Don't render on touch devices
  if (typeof window !== 'undefined' && 'ontouchstart' in window) {
    return null;
  }

  return (
    <>
      <div ref={cursorRef} className="custom-cursor" />
      <div ref={cursorDotRef} className="custom-cursor__dot" />
    </>
  );
};

export default Cursor;
