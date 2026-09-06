"use client";

import { useMediaQuery } from "@reactuses/core";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { slide as Menu } from "react-burger-menu";

const paths = [
  ["/", "Home"],
  // ["/shows", "Shows"],
  // ["/news", "News"],
  ["/about", "About Althomare"],
  ["/contact", "Contact Us"],
];

export default function Header() {
  const pathname = usePathname();
  const links = paths.map((v) => (
    <Link
      key={v[0]}
      href={v[0]}
      className={
        "p-6 hover:bg-[#aaaaaa40] w-max " +
        (pathname === v[0] ? "text-blue-400" : "")
      }
    >
      {v[1]}
    </Link>
  ));

  const isMobile = useMediaQuery("(min-width: 650px)");

  return (
    <header className="w-full flex justify-start border-b border-b-gray-500">
      {/* logo */}
      <Link className="p-6 bg-orange-950 text-white font-bold" href="/">
        ALTHOMARE
      </Link>

      {/* navigation */}
      {isMobile ? (
        <nav className="flex content-center text-gray-800 font-bold">
          {links}
        </nav>
      ) : (
        <div className="absolute w-full">
          <Menu right>{links}</Menu>
        </div>
      )}
    </header>
  );
}
