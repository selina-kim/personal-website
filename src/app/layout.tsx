import type { Metadata } from "next";
import Header from "@/components/Header";
import { Inter, JetBrains_Mono } from "next/font/google";

import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "selina kim",
  description:
    "selina kim. software developer and computer science student based in canada.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jetBrainsMono.variable} antialiased`}
      >
        <div className="relative mx-auto min-h-screen max-w-2xl px-6 py-10 font-mono">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
