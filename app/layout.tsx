import type { Metadata } from "next";
import { Outfit, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavigationBar from "@/components/NavigationBar";
import SmoothScroll from "@/components/SmoothScroll";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import CustomCursor from "@/components/CustomCursor";
import ViewportRuler from "@/components/ViewportRuler";

export const metadata: Metadata = {
  title: "Vwindi | Teaching & Development Agency",
  description: "We build real-world products and grow developers through school partnerships and collaborative builds.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${geistMono.variable} antialiased selection:bg-[#dcfc04] selection:text-black`}
      >
        <ViewportRuler />
        <CustomCursor />
        <SmoothScroll>
          <NavigationBar />
          {children}
        </SmoothScroll>
        {/* Fixed Bottom Glassmorphism Fade */}
        <div 
          className="fixed bottom-0 left-0 w-full h-32 pointer-events-none z-40 backdrop-blur-md bg-white/40"
          style={{ maskImage: 'linear-gradient(to top, black 20%, transparent)', WebkitMaskImage: 'linear-gradient(to top, black 20%, transparent)' }}
        />
      </body>
    </html>
  );
}
