"use client";

import { motion } from "framer-motion";
import Footer from "@/components/Footer";

const Hero = () => {
  return (
    <section className="relative pt-48 pb-20 px-20 overflow-hidden bg-white text-center">
      <div className="wind-glow top-0 left-1/4 opacity-40" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto z-10 relative"
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-[#111111] mb-6">
          What&apos;s the deal <br /> with <span className="gradient-text">Vwindi?</span>
        </h1>
        <p className="text-xl text-[#676767] max-w-2xl mx-auto font-medium">
          A unique blend of high-end engineering and passionate tech education. 
          We exist to build the tools of tomorrow while teaching the builders of the future.
        </p>
      </motion.div>
    </section>
  );
};

const DNA = () => {
  return (
    <section className="py-32 px-20 bg-[#fdfdfd] relative">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-24 tracking-tight">Vwindi&apos;s DNA</h2>
        
        <div className="relative border-l border-black/10 ml-6 md:ml-1/2 space-y-24">
          {[
            {
              title: "The Beginning",
              desc: "Founded as a solo endeavor by a fullstack visionary with a passion for beautiful code and teaching others.",
            },
            {
              title: "Our Core Focus",
              desc: "We prioritize AI-driven design and scalable web/mobile development, completely skipping marketing fluff to focus purely on building and tutoring.",
            },
            {
              title: "The Ultimate Goal",
              desc: "To be the go-to agency for startups and schools, providing both the software they need and the education their students deserve.",
            }
          ].map((item, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative pl-12"
            >
              <div className="absolute -left-[9px] top-2 w-4 h-4 bg-white border-[3px] border-[#449AFA] rounded-full" />
              <div className="glass-card p-8 rounded-3xl relative top-[-10px]">
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-[#676767] leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Team = () => {
  return (
    <section className="py-32 px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Meet the Team</h2>
          <p className="text-lg text-[#676767] max-w-2xl mx-auto">
            A tight-knit crew of passionate developers and part-time instructors.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="glass-card border border-black/10 rounded-[2rem] p-6 text-center group cursor-pointer hover:-translate-y-2 transition-transform">
            <div className="w-24 h-24 mx-auto bg-gradient-to-tr from-blue-400 to-purple-500 rounded-full mb-4 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">👨‍💻</div>
            <h4 className="font-bold text-xl mb-1">Founder</h4>
            <p className="text-sm text-[#676767]">Lead Engineer</p>
          </div>
          {[1, 2, 3].map((_, i) => (
            <div key={i} className="glass-card border border-black/10 rounded-[2rem] p-6 text-center opacity-70 group cursor-pointer hover:-translate-y-2 transition-transform">
              <div className="w-24 h-24 mx-auto bg-gray-100 rounded-full mb-4 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">🤝</div>
              <h4 className="font-bold text-xl mb-1">Expert Friend</h4>
              <p className="text-sm text-[#676767]">Part-time Tutor/Dev</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function AboutPage() {
  return (
    <main className="bg-white">
      <Hero />
      <DNA />
      <Team />
      <Footer />
    </main>
  );
}
