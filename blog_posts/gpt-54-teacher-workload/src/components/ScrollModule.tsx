import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface ScrollModuleProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const ScrollModule: React.FC<ScrollModuleProps> = ({
  children,
  className = '',
  delay = 0,
}) => {
  const { ref, isVisible, prefersReducedMotion } = useScrollReveal({
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`${
        prefersReducedMotion
          ? 'opacity-100 translate-y-0'
          : `transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`
      } ${className}`}
      style={{
        transitionDelay: prefersReducedMotion ? '0ms' : isVisible ? `${delay}ms` : '0ms',
      }}
    >
      {children}
    </div>
  );
};

export default ScrollModule;
