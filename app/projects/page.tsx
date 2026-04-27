"use client";

import { motion } from "framer-motion";
import Footer from "@/components/Footer";

const WorkHero = () => {
  return (
    <section className="relative pt-48 pb-20 px-20 overflow-hidden bg-[#fdfdfd] text-center border-b border-black/5">
      <div className="wind-glow top-0 right-1/4 opacity-30" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto z-10 relative"
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-[#111111] mb-6">
          Our Projects
        </h1>
        <p className="text-xl text-[#676767] max-w-2xl mx-auto font-medium">
          Discover how we enhance our clients&apos; digital presence through scalable web apps and AI-driven interfaces.
        </p>
      </motion.div>
    </section>
  );
};

const ProjectGrid = () => {
  const projects = [
    { title: "EduTech Platform", desc: "A comprehensive learning management system tailored for interactive coding lessons.", tags: ["Web Dev", "Education", "React"] },
    { title: "Startup FinApp", desc: "Mobile-first financial dashboard built with modern React Native for iOS and Android.", tags: ["Mobile", "Fintech", "App"] },
    { title: "AI Design Audit", desc: "Complete visual overhaul of an enterprise SaaS tool utilizing AI-assisted UI/UX methodologies.", tags: ["Design", "AI", "SaaS"] },
    { title: "School Portal", desc: "A secure and fast portal for parents and students to track learning milestones.", tags: ["Web Dev", "Schools", "Fullstack"] },
    { title: "Real Estate Hub", desc: "A robust property listing and management tool with heavy map integrations.", tags: ["Web", "Real Estate"] },
    { title: "Healthcare Sync", desc: "HIPAA-compliant patient data portal for rapid communication.", tags: ["Web", "Healthcare"] }
  ];

  return (
    <section className="py-32 px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="group cursor-pointer bg-white rounded-[2.5rem] p-4 shadow-sm border border-black/5"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] bg-gray-50 mb-8 flex items-center justify-center">
                 <div className="text-6xl group-hover:scale-125 transition-transform duration-700 opacity-20">🚀</div>
              </div>
              <div className="px-4 pb-4">
                <h3 className="text-2xl font-bold text-[#111111] mb-2">{project.title}</h3>
                <p className="text-[#676767] mb-6 line-clamp-2 font-medium">{project.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] uppercase bg-gray-100 px-4 py-1.5 rounded-full text-black font-bold tracking-widest">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ExploreServices = () => {
  return (
    <section className="py-32 px-20 bg-[#fdfdfd] border-t border-black/5">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Explore our services</h2>
        <p className="text-lg text-[#676767] mb-16">The tools and expertise we offer to build your success.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {['AI Design', 'Development', 'Tutoring'].map((service, i) => (
            <div key={i} className="glass-card border border-black/10 rounded-3xl p-10 hover:shadow-xl transition-shadow cursor-pointer">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-blue-500/10 flex items-center justify-center text-2xl mb-6">✨</div>
              <h4 className="font-bold text-xl">{service}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function WorkPage() {
  return (
    <main className="bg-white">
      <WorkHero />
      <ProjectGrid />
      <ExploreServices />
      <Footer />
    </main>
  );
}
