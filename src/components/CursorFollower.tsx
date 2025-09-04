'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const CursorFollower = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const mainElement = document.querySelector('main');
    const cursor = cursorRef.current;

    if (!mainElement || !cursor) return;

    const onMouseMove = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
        ease: 'power3.out',
      });
    };

    mainElement.addEventListener('mousemove', onMouseMove);

    return () => {
      mainElement.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <div ref={cursorRef} className="Cursor">
      <span></span>
    </div>
  );
};

export default CursorFollower;
