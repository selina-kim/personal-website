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
      <div className="mb-10 flex justify-between">
        <div className="flex flex-col justify-center gap-y-3">
          <Link href="/" className="w-full text-2xl font-extrabold">
            selina kim :D
          </Link>
          <Links />
        </div>
        <div className="bg-accent/25 h-25 w-25 shrink-0 rounded-lg p-2">
          <div className="h-full w-full">
            <Image
              unoptimized
              src="/kirby.gif"
              alt="Kirby Gif"
              width={0}
              height={0}
              className="-ml-0.5 h-full w-full"
            />
          </div>
        </div>
      </div>
      <nav className="mb-10 flex justify-center gap-x-6 border-y py-1.5 text-sm">
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
