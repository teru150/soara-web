"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useLanguage } from "../contexts/LanguageContext";

export default function NavLinks({ containerStyles, isScrolled }) {
  const pathName = usePathname();
  const { t } = useLanguage();

  const links = [
    {
      filePath: "/",
      fileName: "home",
    },
    {
      filePath: "/about",
      fileName: "about",
    },
    {
      filePath: "/supporters",
      fileName: "supporters",
    },
    {
      filePath: "/blog",
      fileName: "blog",
    },
    {
      filePath: "/birdman",
      fileName: "birdman",
    },
    {
      filePath: "/aircraft",
      fileName: "aircraft",
    },
    {
      filePath: "/members",
      fileName: "members",
    },
    {
      filePath: "/contacts",
      fileName: "contacts",
    },
  ];

  return (
    <ul className={containerStyles}>
      {links.map((fileLink, index) => {
        const isActive =
          fileLink.filePath === "/"
            ? pathName === "/"
            : pathName.startsWith(fileLink.filePath);

        return (
          <Link key={index} href={fileLink.filePath} className="group relative">
            <motion.button
              className={`relative z-10 rounded-lg px-2 py-1 text-sm capitalize transition-colors duration-200 ${
                isActive
                  ? "text-[#0050a7]"
                  : isScrolled
                    ? "text-gray-700 hover:text-gray-900"
                    : "text-white hover:text-gray-200"
              }`}
              initial={{ y: 0 }}
              whileHover={{
                y: -3,
              }}
              whileTap={{
                y: -2,
              }}
              transition={{
                duration: 0.2,
                ease: "easeInOut",
              }}
              aria-current={isActive ? "page" : undefined}
            >
              {t(`nav.${fileLink.fileName}`)}
              <span
                className={`absolute inset-x-1 -bottom-1 h-0.5 rounded-full transition-all duration-200 ${
                  isActive
                    ? "bg-[#369bff] opacity-100"
                    : "bg-[#369bff]/0 opacity-0 group-hover:opacity-50"
                }`}
              />
            </motion.button>
          </Link>
        );
      })}
    </ul>
  );
}
