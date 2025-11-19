import { useEffect, useState, useRef } from 'react';

/**
 * Intersection Observer を使用して要素が画面に表示されたかを検知するカスタムフック
 * @param {Object} options - Intersection Observer のオプション
 * @returns {[React.RefObject, boolean]} - [ref, isIntersecting]
 */
export function useIntersectionObserver(options = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      {
        threshold: 0.1,
        ...options,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [options]);

  return [ref, isIntersecting];
}
