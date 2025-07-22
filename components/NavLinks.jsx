"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function NavLinks({ containerStyles }) {
  const pathName = usePathname();

  const links = [
    {
      filePath: "/",
      fileName: "home",
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
            <motion.span
              className={`relative z-10 font-bold text-[17px] ${
                isActive ? `font-extrabold` : `font-bold opacity-75`
              }`}
            >
              {fileLink.fileName}
            </motion.span>
          </Link>
        );
      })}
    </ul>
  );
}