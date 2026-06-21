import { gsap } from 'gsap';

interface CursorPosition {
  x: number;
  y: number;
}

export const initCursorAnimation = (
  cursorEl: HTMLElement,
  dotEl: HTMLElement
) => {
  const pos: CursorPosition = { x: 0, y: 0 };
  const mouse: CursorPosition = { x: 0, y: 0 };
  const speed = 0.15;

  const onMouseMove = (e: MouseEvent) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  };

  const onMouseDown = () => {
    gsap.to(cursorEl, { scale: 0.85, duration: 0.15 });
  };

  const onMouseUp = () => {
    gsap.to(cursorEl, { scale: 1, duration: 0.15 });
  };

  const onMouseEnterInteractive = () => {
    gsap.to(cursorEl, {
      width: 72,
      height: 72,
      borderColor: 'rgba(162, 123, 92, 0.3)',
      duration: 0.4,
      ease: 'power3.out'
    });
    gsap.to(dotEl, { scale: 0, duration: 0.2 });
  };

  const onMouseLeaveInteractive = () => {
    gsap.to(cursorEl, {
      width: 12,
      height: 12,
      borderColor: '#A27B5C',
      duration: 0.4,
      ease: 'power3.out'
    });
    gsap.to(dotEl, { scale: 1, duration: 0.2 });
  };

  const render = () => {
    pos.x += (mouse.x - pos.x) * speed;
    pos.y += (mouse.y - pos.y) * speed;

    gsap.set(cursorEl, { x: pos.x - 6, y: pos.y - 6 });
    gsap.set(dotEl, { x: mouse.x - 2, y: mouse.y - 2 });

    requestAnimationFrame(render);
  };

  // Attach events
  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mousedown', onMouseDown);
  document.addEventListener('mouseup', onMouseUp);

  const interactives = document.querySelectorAll(
    'a, button, input, select, textarea, .btn, [data-cursor-hover]'
  );
  interactives.forEach((el) => {
    el.addEventListener('mouseenter', onMouseEnterInteractive);
    el.addEventListener('mouseleave', onMouseLeaveInteractive);
  });

  render();

  // Cleanup
  return () => {
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mousedown', onMouseDown);
    document.removeEventListener('mouseup', onMouseUp);
    interactives.forEach((el) => {
      el.removeEventListener('mouseenter', onMouseEnterInteractive);
      el.removeEventListener('mouseleave', onMouseLeaveInteractive);
    });
  };
};
