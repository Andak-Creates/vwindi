"use client";

import { motion } from "framer-motion";

export const ServiceHero = ({ badge, title, subtitle, stats }: { badge: string, title: React.ReactNode, subtitle: string, stats: { value: string, label: string }[] }) => {
  return (
    <section className="relative pt-48 pb-20 px-20 overflow-hidden bg-[#fdfdfd] text-center border-b border-black/5">
      <div className="wind-glow top-0 left-1/2 -translate-x-1/2 opacity-20" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-5xl mx-auto z-10 relative"
      >
        <div className="mb-6 inline-block bg-white/60 backdrop-blur-xl border border-black/5 px-6 py-2 rounded-full shadow-sm text-sm font-bold uppercase tracking-widest text-[#676767]">
          {badge}
        </div>
        <h1 className="text-4xl md:text-7xl font-bold tracking-tight text-[#111111] mb-6 leading-tight">
          {title}
        </h1>
        <p className="text-xl text-[#676767] max-w-2xl mx-auto font-medium mb-20">
          {subtitle}
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + (i * 0.1) }}
              className="bg-white rounded-3xl p-6 border border-black/5 shadow-sm"
            >
              <h3 className="text-4xl font-black text-[#111111] mb-2">{stat.value}</h3>
              <p className="text-xs text-[#676767] font-bold uppercase tracking-widest">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export const SectionHeader = ({ title, desc }: { title: string, desc: string }) => (
  <div className="max-w-7xl mx-auto px-20 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
    <h2 className="text-4xl md:text-5xl font-bold tracking-tight max-w-xl">{title}</h2>
    <p className="text-[#676767] font-medium max-w-md">{desc}</p>
  </div>
);

export const FeatureCardDark = ({ icon, title, desc, colSpan = 1 }: { icon: string, title: string, desc: string, colSpan?: number }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className={`bg-[#fafaf5] text-[#111] rounded-[2.5rem] p-8 overflow-hidden relative group border border-black/5 shadow-sm ${colSpan === 2 ? 'md:col-span-2' : ''}`}
  >
    <div className="absolute top-0 right-0 w-64 h-64 bg-black/5 rounded-full blur-3xl group-hover:bg-black/10 transition-colors" />
    <div className="h-40 bg-white rounded-[2rem] mb-8 flex items-center justify-center text-6xl shadow-inner border border-black/5 relative z-10 group-hover:scale-105 transition-transform duration-500">
      {icon}
    </div>
    <div className="relative z-10">
      <h3 className="text-2xl font-bold mb-3">{title}</h3>
      <p className="text-[#676767] font-medium leading-relaxed">{desc}</p>
    </div>
  </motion.div>
);

export const FeatureCardLight = ({ icon, title, desc, colSpan = 1 }: { icon: string, title: string, desc: string, colSpan?: number }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className={`bg-white rounded-[2.5rem] p-8 overflow-hidden border border-black/5 shadow-sm group ${colSpan === 2 ? 'md:col-span-2' : ''}`}
  >
    <div className="h-40 bg-gray-50 rounded-[2rem] mb-8 flex items-center justify-center text-6xl shadow-inner border border-black/5 group-hover:scale-105 transition-transform duration-500">
      {icon}
    </div>
    <div>
      <h3 className="text-2xl font-bold mb-3 text-[#111]">{title}</h3>
      <p className="text-[#676767] font-medium leading-relaxed">{desc}</p>
    </div>
  </motion.div>
);

export const RelatedProjects = ({ projects }: { projects: { title: string, desc: string, img: string }[] }) => (
  <section className="py-32 px-20 bg-[#f9f9f9] border-t border-black/5">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold tracking-tight mb-12">Related Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, i) => (
          <div key={i} className="group cursor-pointer">
            <div className="aspect-[16/10] bg-gray-200 rounded-[2rem] overflow-hidden mb-6 relative shadow-sm border border-black/5">
               <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-purple-100 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-700">
                  {project.img}
               </div>
            </div>
            <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
            <p className="text-[#676767] font-medium">{project.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
