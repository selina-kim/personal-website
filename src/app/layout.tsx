import type { Metadata } from "next";
import Header from "@/components/Header";
import { Inter, JetBrains_Mono } from "next/font/google";

import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "selina kim",
  description:
    "selina kim. software developer and computer science student based in canada.",
};

export const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jetBrainsMono.variable} antialiased`}
      >
        <div className="mx-auto max-w-xs font-mono md:max-w-2xl">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
