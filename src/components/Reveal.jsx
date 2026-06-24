import { useEffect, useRef, useState } from 'react';
import styles from '../css/Reveal.module.css';

/**
 * Fades + lifts its children into view once they scroll into the viewport.
 * Uses IntersectionObserver; respects prefers-reduced-motion (the CSS keeps
 * content fully visible when motion is reduced).
 */
export default function Reveal(props) {
  const { children, as: Tag = 'div', delay = 0, className = '' } = props;
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          obs.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`${styles.reveal} ${shown ? styles.shown : ''} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
