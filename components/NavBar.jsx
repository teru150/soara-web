"use client";

import React, { useState, useEffect } from "react";
import NavLinks from "../components/NavLinks";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";
import Image from "next/image";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    let lastScrollY = 0;
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 10);
      const scrollingDown = scrollY > lastScrollY + 4;
      const scrollingUp = scrollY < lastScrollY - 4;
      if (scrollY < 60) {
        setIsHidden(false);
      } else if (scrollingDown) {
        setIsHidden(true);
      } else if (scrollingUp) {
        setIsHidden(false);
      }
      lastScrollY = scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDarkMode(mediaQuery.matches);

    const handleChange = (e) => setIsDarkMode(e.matches);
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <header
      className={`pointer-events-none fixed left-0 right-0 top-4 z-50 flex justify-center px-4 transition-transform duration-300 ${
        isHidden ? "-translate-y-20" : "translate-y-0"
      }`}
    >
      <div
        className={`soara-glass pointer-events-auto flex w-full max-w-screen-xl items-center justify-between rounded-2xl px-5 py-3 transition-all duration-300 ${
          isScrolled ? "shadow-soara" : ""
        }`}
      >
        <a
          href="/"
          className="flex items-center rounded-xl px-2 py-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#369bff]"
        >
          <div className="relative h-12 w-56 overflow-hidden">
            <Image
              src="/logos/soara_logo_yoko_transparent.png"
              alt="SOARA ロゴ"
              fill
              className="object-cover object-center"
              style={{ objectPosition: "center center" }}
              priority
            />
          </div>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          <NavLinks
            containerStyles="flex items-center gap-6 font-semibold"
            isScrolled={isScrolled}
          />
          <a
            href="/supporters"
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#369bff] to-[#0050a7] px-4 py-2 text-sm font-semibold text-white shadow-soara transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#369bff] whitespace-nowrap"
          >
            <span>支援する</span>
            <span aria-hidden>→</span>
          </a>
        </nav>

        <motion.button
          initial={{ rotate: 0 }}
          animate={{ rotate: isOpen ? 180 : 0 }}
          className="lg:hidden rounded-xl p-2 text-gray-700 hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#369bff]"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="メニューを開閉"
          aria-expanded={isOpen}
        >
          {isOpen ? <X /> : <Menu />}
        </motion.button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="pointer-events-auto fixed inset-0 bg-black/30 backdrop-blur-md lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsOpen(false)}
            />
            <motion.nav
              className="pointer-events-auto lg:hidden fixed inset-x-4 top-20 z-50 rounded-2xl bg-white p-6 shadow-2xl"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
            >
              <NavLinks
                containerStyles="flex flex-col gap-4 text-left"
                isScrolled
              />
              <a
                href="/supporters"
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#369bff] to-[#0050a7] px-4 py-3 text-white shadow-soara transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#369bff]"
              >
                支援する
                <span aria-hidden>→</span>
              </a>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
