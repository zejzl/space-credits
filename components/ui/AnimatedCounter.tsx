'use client';

import { useAnimatedCounter } from '@/hooks/useAnimatedCounter';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  decimals?: number;
  suffix?: string;
  prefix?: string;
}

export default function AnimatedCounter({
  end,
  duration = 2000,
  decimals = 0,
  suffix = '',
  prefix = ''
}: AnimatedCounterProps) {
  const { ref, count } = useAnimatedCounter({ end, duration, decimals });

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  );
}
