"use client";

import React, { useState, useEffect } from "react";
import NavLinks from "../components/NavLinks";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState();
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewport = window.innerHeight;
      setIsScrolled(scrollY > viewport * 0.8);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="w-full justify-center items-center">
        <div className={`flex translate-x-[15vw] justify-between items-center px-8 py-3.5 mt-5 h-auto w-[70vw] fixed top-0 z-50 backdrop-blur-md border border-[2px] rounded-full transition-all duration-300 ${
          isScrolled 
            ? 'border-gray-300/30 bg-white/90 text-black' 
            : 'border-gray-500/15 bg-white/15 text-white'
        }`}>
          <header className="">
            <h1 className="font-extrabold text-[20px]">
              <a href="/">{t('brand')}</a>
            </h1>
          </header>
          <nav>
            <NavLinks
              containerStyles={
                "hidden xl:block flex space-x-8 font-semibold justify-between items-center"
              }
              isScrolled={isScrolled}
            />
          </nav>
          <motion.button
            initial={{rotate: 0}}
            animate={{rotate: isOpen ? 180 : 0}}
            className="xl:hidden relative fixed z-50"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </motion.button>
        </div>
      </div>
      <AnimatePresence mode="wait">
        {isOpen && (
            <>
                <motion.div
                    className="xl:hidden fixed inset-0 backdrop-blur-2xl bg-white/20 z-45 min-w-screen min-h-screen bg-black/30"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{delay: 0.05, duration: 0.25, ease: "circInOut"}}
                    exit={{opacity: 0}}
                />
                <motion.nav 
                    className="xl:hidden w-full flex justify-center items-center z-50 fixed top-[200px]"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{delay: 0.05, duration: 0.25, ease: "circInOut"}}
                    exit={{opacity: 0}}
                >
                    <NavLinks containerStyles={"flex flex-col justify-between space-y-6"} isScrolled={isScrolled}/>
                </motion.nav>
            </>
        )}
      </AnimatePresence>
    </>
  );
}
