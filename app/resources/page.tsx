"use client";

import { motion } from "framer-motion";
import Footer from "@/components/Footer";

const Showreel = () => {
  return (
    <section className="relative pt-32 pb-20 px-10 md:px-20 overflow-hidden bg-white text-center">
      <div className="wind-glow top-1/4 left-1/2 -translate-x-1/2 opacity-20" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-5xl mx-auto z-10 relative"
      >
        <div className="mb-5 inline-block bg-white/60 backdrop-blur-xl border border-black/5 px-6 py-2 rounded-full shadow-sm text-[10px] font-bold uppercase tracking-widest text-[#676767]">
          Vwindi Tutoring
        </div>
        <h1 className="text-5xl md:text-[55px] font-bold leading-[1.01] tracking-tight text-[#111111] mb-12">
          Learn from the builders.
        </h1>
        
        {/* Huge Video/Showreel Placeholder */}
        <div className="w-full aspect-video glass-card border border-black/10 rounded-[3rem] relative overflow-hidden flex items-center justify-center group cursor-pointer shadow-2xl">
           <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-purple-500/10" />
           <div className="w-24 h-24 bg-black text-white rounded-full flex items-center justify-center pl-2 group-hover:scale-110 transition-transform shadow-xl relative z-10">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
           </div>
           <div className="absolute bottom-10 left-10 text-left z-10 bg-white/80 backdrop-blur-md px-6 py-4 rounded-2xl">
              <h3 className="font-bold text-xl">Intro to Fullstack Development</h3>
              <p className="text-[#676767]">Watch our methodology.</p>
           </div>
        </div>
      </motion.div>
    </section>
  );
};

const ResourcesGrid = () => {
  const articles = [
    { title: "Why React Native is perfect for MVP Startups", read: "5 min", type: "Article" },
    { title: "Understanding AI-driven UI/UX Design", read: "8 min", type: "Guide" },
    { title: "Building Scalable Architecture in 2026", read: "12 min", type: "Case Study" },
    { title: "The Transition from Developer to Tech Founder", read: "6 min", type: "Opinion" }
  ];

  return (
    <section className="py-32 px-10 md:px-20 bg-[#f9f9f9] border-t border-black/5">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold tracking-tight mb-16">Latest Insights & Resources</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.map((article, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="glass-card border border-black/10 rounded-3xl p-8 hover:shadow-lg transition-all cursor-pointer flex flex-col justify-between h-[250px]"
            >
              <div>
                <span className="inline-block px-3 py-1 bg-black/5 text-xs font-bold uppercase tracking-widest rounded-full mb-4">
                  {article.type}
                </span>
                <h3 className="text-2xl font-bold">{article.title}</h3>
              </div>
              <div className="flex items-center text-sm text-[#676767] font-medium">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                {article.read} read
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function TutoringPage() {
  return (
    <main className="bg-white">
      <Showreel />
      <ResourcesGrid />
      <Footer />
    </main>
  );
}
