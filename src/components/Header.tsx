"use client";

import Link from "next/link";
import Links from "./Links";
import { usePathname } from "next/navigation";
import Image from "next/image";

export const Header = () => {
  const pathname = usePathname();
  const selectedSection = pathname !== "/" ? pathname : "/about";

  const sections = [
    { path: "/about", displayName: "abt/" },
    { path: "/experience", displayName: "exp/" },
    { path: "/projects", displayName: "proj/" },
  ];

  return (
    <>
      <div className="flex justify-between py-10">
        <div className="flex flex-col justify-center gap-y-3">
          <Link href="/" className="w-full text-2xl font-extrabold">
            selina kim :D
          </Link>
          <Links />
        </div>
        <div className="h-25 w-25 shrink-0">
          <Image
            src="/kirby.gif"
            unoptimized
            alt="Kirby Gif"
            width={0}
            height={0}
            className="h-full w-full"
          />
        </div>
      </div>
      <nav className="mb-10 flex justify-center gap-x-6 border-t-2 border-b-2 py-1.5">
        {sections.map((section) => {
          const isSelected = selectedSection === section.path;
          return (
            <Link
              href={section.path}
              key={section.displayName}
              className={isSelected ? "font-medium" : "text-current/25"}
            >
              {section.displayName}
            </Link>
          );
        })}
      </nav>
    </>
  );
};

export default Header;
