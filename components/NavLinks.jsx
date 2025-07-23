"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useLanguage } from "../contexts/LanguageContext";

export default function NavLinks({ containerStyles }) {
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
      filePath: "/sponsors",
      fileName: "sponsors",
    },
    {
      filePath: "/notifications",
      fileName: "notifications",
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
        const isActive = fileLink.filePath === pathName;

        return (
          <Link
            key={index}
            href={fileLink.filePath}
            className="relative text-lg"
          >
            <motion.button
              className={`relative z-10 font-bold text-[17px] capitalize ${
                isActive ? `font-extrabold` : `font-bold opacity-75`
              }`}
              initial={{y: 0}}
              whileHover={{
                y: -3
              }}
              whileTap={{
                y: -2
              }}
              transition={{
                duration: 0.2,
                ease: "easeInOut",
              }}
            >
              {t(`nav.${fileLink.fileName}`)}
            </motion.button>
          </Link>
        );
      })}
    </ul>
  );
}