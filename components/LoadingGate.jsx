"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import LoadingOverlay from "./LoadingOverlay";

const MIN_LOADING_MS = 1500;
const EXIT_ANIMATION_MS = 520;
const MAX_LOADING_MS = 10000;

export default function LoadingGate() {
  const pathname = usePathname();
  const [active, setActive] = useState(false);
  const [exiting, setExiting] = useState(false);
  const startRef = useRef(0);
  const pendingRef = useRef(false);
  const maxTimeoutRef = useRef(null);
  const hideTimeoutRef = useRef(null);
  const exitTimeoutRef = useRef(null);

  const showLoading = () => {
    if (active) return;
    startRef.current = Date.now();
    pendingRef.current = true;
    setExiting(false);
    setActive(true);
    if (maxTimeoutRef.current) {
      clearTimeout(maxTimeoutRef.current);
    }
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
      hideTimeoutRef.current = null;
    }
    if (exitTimeoutRef.current) {
      clearTimeout(exitTimeoutRef.current);
      exitTimeoutRef.current = null;
    }
    maxTimeoutRef.current = setTimeout(() => {
      pendingRef.current = false;
      setActive(false);
      setExiting(false);
    }, MAX_LOADING_MS);
  };

  const startExit = () => {
    setActive(false);
    setExiting(true);
    if (exitTimeoutRef.current) {
      clearTimeout(exitTimeoutRef.current);
    }
    exitTimeoutRef.current = setTimeout(() => {
      setExiting(false);
      pendingRef.current = false;
    }, EXIT_ANIMATION_MS);
  };

  const hideLoading = () => {
    const elapsed = Date.now() - startRef.current;
    const remaining = Math.max(0, MIN_LOADING_MS - elapsed);
    if (maxTimeoutRef.current) {
      clearTimeout(maxTimeoutRef.current);
      maxTimeoutRef.current = null;
    }
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
    }
    hideTimeoutRef.current = window.setTimeout(() => {
      startExit();
    }, remaining);
  };

  useEffect(() => {
    if (!pendingRef.current) return;
    hideLoading();
  }, [pathname]);

  useEffect(() => {
    const onClick = (event) => {
      if (event.defaultPrevented) return;
      const target = event.target?.closest?.("a");
      if (!target) return;
      const href = target.getAttribute("href");
      if (!href || href.startsWith("#")) return;
      if (target.getAttribute("target") === "_blank") return;
      if (target.hasAttribute("download")) return;
      if (href.startsWith("mailto:") || href.startsWith("tel:")) return;
      if (target.dataset.noLoading === "true") return;
      if (href.startsWith("http") && !href.startsWith(window.location.origin)) {
        return;
      }
      showLoading();
    };

    const onManual = (event) => {
      if (event?.detail?.skip) return;
      const duration = Math.max(MIN_LOADING_MS, event?.detail?.durationMs || 0);
      if (active) return;
      showLoading();
      hideTimeoutRef.current = window.setTimeout(() => {
        startExit();
      }, duration);
    };

    document.addEventListener("click", onClick, true);
    window.addEventListener("soara:show-loading", onManual);
    return () => {
      document.removeEventListener("click", onClick, true);
      window.removeEventListener("soara:show-loading", onManual);
    };
  }, [active]);

  useEffect(() => {
    return () => {
      if (maxTimeoutRef.current) clearTimeout(maxTimeoutRef.current);
      if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
      if (exitTimeoutRef.current) clearTimeout(exitTimeoutRef.current);
    };
  }, []);

  return active || exiting ? <LoadingOverlay exiting={exiting} /> : null;
}
