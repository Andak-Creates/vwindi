"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-32 bg-white border-t border-black/5 overflow-hidden">
      {/* Huge Marquee Text - Full Width */}
      <div className="w-full mb-20 relative overflow-hidden flex whitespace-nowrap">
        <div className="animate-marquee-footer flex flex-none items-center">
          {[1, 2, 3, 4, 5, 6].map((_, i) => (
            <h2
              key={i}
              className="text-[30vw] md:text-[25vw] font-black tracking-tighter text-[#111111]/5 leading-none select-none px-8"
            >
              VWINDI
            </h2>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-10 md:px-20 flex flex-col items-center text-center">
        <div className="w-full pt-12 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[#676767] uppercase text-xs font-bold tracking-[0.2em]">
          <p>© 2026 VWINDI AGENCY. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <Link href="/about" className="hover:text-black cursor-pointer">
              About
            </Link>
            <Link href="#" className="hover:text-black cursor-pointer">
              Services
            </Link>
            <Link href="/projects" className="hover:text-black cursor-pointer">
              Projects
            </Link>
            <Link href="/resources" className="hover:text-black cursor-pointer">
              Resources
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
