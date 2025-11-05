"use client";

import { useCountUp } from "../hooks/useCountUp";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

/**
 * カウントアップアニメーションするコンポーネント
 */
export default function CountUpNumber({ end, duration = 2000, className = "", suffix = "" }) {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.5 });
  const count = useCountUp(end, duration, isIntersecting);

  return (
    <span ref={ref} className={className}>
      {count}{suffix}
    </span>
  );
}
