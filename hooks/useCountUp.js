import { useState, useEffect } from 'react';

/**
 * カウントアップアニメーション用のカスタムフック
 * @param {number} end - 最終的な数値
 * @param {number} duration - アニメーションの長さ（ミリ秒）
 * @param {boolean} start - アニメーションを開始するかどうか
 * @returns {number} - 現在のカウント値
 */
export function useCountUp(end, duration = 2000, start = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime;
    let animationFrame;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // イージング関数（easeOutQuart）
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(end * easeOutQuart));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration, start]);

  return count;
}
