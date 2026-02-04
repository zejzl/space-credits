'use client';

import { motion, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  variants?: Variants;
  className?: string;
  delay?: number;
  threshold?: number;
  triggerOnce?: boolean;
}

export default function ScrollReveal({
  children,
  variants,
  className = '',
  delay = 0,
  threshold = 0.1,
  triggerOnce = true
}: ScrollRevealProps) {
  const [ref, inView] = useInView({
    threshold,
    triggerOnce
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
      className={className}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </motion.div>
  );
}
