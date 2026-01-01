'use client';

import Lenis from 'lenis';
import { useEffect, type ReactNode } from 'react';

type LenisProviderProps = {
  children: ReactNode;
};

export function LenisProvider({ children }: LenisProviderProps) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.3,
      smoothWheel: true,
      wheelMultiplier: 0.9,
      easing: (t) => 1 - Math.pow(1 - t, 3),
    });

    let animationFrame: number;

    const loop = (time: number) => {
      lenis.raf(time);
      animationFrame = requestAnimationFrame(loop);
    };

    animationFrame = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(animationFrame);
      lenis.destroy();
    };
  }, []);

  return children;
}
