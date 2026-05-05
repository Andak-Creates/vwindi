"use client";

import { motion } from "framer-motion";
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";
import Footer from "@/components/Footer";

import { FaXTwitter, FaLinkedinIn } from "react-icons/fa6";

export default function BookPage() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        theme: "light",
        styles: { branding: { brandColor: "#000000" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <main className="bg-white min-h-screen">
      <section className="pt-32 pb-20 px-10 md:px-20 text-center relative overflow-hidden">
        <div className="wind-glow top-0 left-1/2 -translate-x-1/2 opacity-30" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="mb-5 inline-block bg-white/60 backdrop-blur-xl border border-black/5 px-6 py-2 rounded-full shadow-sm text-[10px] font-bold uppercase tracking-widest text-[#676767]">
            VWINDI INTRODUCTION
          </div>
          <h1 className="text-5xl md:text-[65px] font-bold leading-[1.01] tracking-tight text-[#111111] mb-8">
            Book a 🗓️ <span className="text-[#449AFA]">30-min</span> call
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-md text-[#676767] leading-relaxed font-medium">
            Let&apos;s jump on a quick intro call. We&apos;ll break down your
            project, and present exactly how we can{" "}
            <span className="text-black font-bold">help you.</span>
          </p>
        </motion.div>

        {/* Cal.com Embed Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="max-w-5xl mx-auto glass-card border border-black/5 rounded-[2.5rem] overflow-hidden shadow-2xl bg-white/50 relative z-10"
        >
          <Cal
            calLink="vwindi/30min"
            style={{ width: "100%", height: "700px", overflow: "scroll" }}
            config={{ layout: "month_view" }}
          />
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
