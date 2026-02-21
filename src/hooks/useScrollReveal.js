import { useEffect, useRef } from 'react';

export const useScrollReveal = (options = { threshold: 0.1, duration: 400 }) => {
    const ref = useRef(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        // Support reduced motion
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) return;

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0) scale(1)';
                observer.unobserve(entry.target);
            }
        }, options);

        // Initial State Setting (GPU Safe properties only)
        element.style.opacity = '0';
        element.style.transform = 'translateY(15px) scale(0.98)';
        element.style.transition = `opacity ${options.duration}ms cubic-bezier(0.4, 0, 0.2, 1), transform ${options.duration}ms cubic-bezier(0.4, 0, 0.2, 1)`;

        // Force reflow
        void element.offsetWidth;

        observer.observe(element);

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, [options.duration, options.threshold]);

    return ref;
};
