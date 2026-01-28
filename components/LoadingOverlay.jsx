"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { createPortal } from "react-dom";

export default function LoadingOverlay({ exiting = false }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    document.documentElement.classList.add("is-loading");
    return () => {
      document.documentElement.classList.remove("is-loading");
    };
  }, []);

  if (!mounted) return null;

  return createPortal(
    <div
      className={`loading-overlay fixed inset-0 z-[200] flex min-h-screen w-screen items-center justify-center loading-surface ${exiting ? "is-exiting" : ""}`}
      role="status"
      aria-live="polite"
      aria-busy="true"
    >
      <div className="absolute inset-0 soara-grid opacity-35" aria-hidden />
      <div className="relative mx-6 flex w-full max-w-screen-sm flex-col items-center text-center">
        <Image
          src="/logos/soara_logo_yoko_transparent.png"
          alt="SOARA ロゴ"
          width={320}
          height={72}
          priority
          className="drop-shadow-[0_14px_30px_rgba(54,155,255,0.2)]"
        />
        <p className="mt-6 text-xl font-semibold text-gray-800 sm:text-2xl">
          Loading...
        </p>
        <p className="mt-2 text-sm text-gray-500">
          ページを読み込み中です
        </p>
        <div className="mt-8 flex items-center justify-center gap-2" aria-hidden>
          <span className="loading-dot bg-[#369bff]" />
          <span className="loading-dot bg-[#1a8cff]" />
          <span className="loading-dot bg-[#0050a7]" />
        </div>
      </div>
    </div>,
    document.body,
  );
}
