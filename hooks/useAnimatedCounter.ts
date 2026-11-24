'use client';

import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface UseAnimatedCounterProps {
  end: number;
  duration?: number;
  decimals?: number;
}

export function useAnimatedCounter({ end, duration = 2000, decimals = 0 }: UseAnimatedCounterProps) {
  // null until the animation starts, so the server HTML carries the real value
  const [count, setCount] = useState<number | null>(null);
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  useEffect(() => {
    if (!inView) return;

    let startTime: number | null = null;
    const startValue = 0;
    const endValue = end;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // Easing function (ease-out cubic)
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      const currentCount = startValue + (endValue - startValue) * easeOutCubic;

      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [inView, end, duration]);

  const value = count ?? end;
  const formattedCount = decimals > 0
    ? value.toFixed(decimals)
    : Math.floor(value).toLocaleString('en-US');

  return { ref, count: formattedCount };
}
