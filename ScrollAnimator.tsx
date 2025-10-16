import React, { useRef, useEffect, useState, ReactNode } from 'react';

// FIX: Add explicit prop types to fix multiple TypeScript errors.
type ScrollAnimatorProps = {
    children: ReactNode;
    animation?: string;
    delay?: string;
    className?: string;
};

const ScrollAnimator = ({ children, animation = 'fade-in-up', delay = '0s', className = '' }: ScrollAnimatorProps) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); // Animate only once
                }
            },
            { threshold: 0.1 }
        );

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    const style = {
        animationDelay: delay,
        // Add other dynamic styles if needed
    };

    return (
        <div
            ref={ref}
            className={`scroll-animate ${animation} ${isVisible ? 'visible' : ''} ${className}`}
            style={style}
        >
            {children}
        </div>
    );
};

export default ScrollAnimator;
