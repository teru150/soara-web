"use client";

import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

/**
 * スクロールで表示されたときにアニメーションするセクションコンポーネント
 */
export default function AnimatedSection({ children, className = "", animationType = "up" }) {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.1 });

  const animationClass =
    animationType === "left" ? "animate-slide-left" :
    animationType === "right" ? "animate-slide-right" :
    "animate-on-scroll";

  return (
    <div
      ref={ref}
      className={`${animationClass} ${isIntersecting ? "is-visible" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
