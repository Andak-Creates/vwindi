"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FiArrowUpRight, FiBookOpen, FiCode, FiCpu } from "react-icons/fi";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-0 md:pt-0 px-10 md:px-20 overflow-hidden bg-white text-center">
      {/* Windy Background Glow */}
      <div className="wind-glow top-0 left-1/4" />
      <div
        className="wind-glow bottom-0 right-1/4 opacity-50"
        style={{ animationDelay: "-10s" }}
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
        className="max-w-5xl z-10"
      >
        <div className="mb-5 inline-block bg-white/60 backdrop-blur-xl border border-black/5 px-6 py-2 rounded-full shadow-sm text-[10px] font-bold uppercase tracking-widest text-[#676767]">
          VWINDI AGENCY & ACADEMY
        </div>

        <h1 className="text-[9vw] md:text-[65px] font-bold leading-[1.01] tracking-tight text-[#111111] mb-8">
          Engineering that ships.
          <br />
          <span className="gradient-text">Education that endures.</span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg md:text-md text-[#676767] leading-relaxed mb-5 font-medium">
          A fullstack engineering agency and teaching institution. We build, We
          teach and We grow. We specialize in{" "}
          <span className="text-black font-bold">AI design</span>,{" "}
          <span className="text-black font-bold">web & mobile development</span>
          , and <span className="text-black font-bold">private tutoring</span>{" "}
          to empower the next generation.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/about"
            className="bg-black text-white px-8 py-2 rounded-full hover:bg-[#449AFA] transition-all transform hover:scale-105 shadow-xl"
          >
            Why VWINDI?
          </Link>
          <Link
            href={"/contact"}
            className="bg-white text-black border border-black/10 px-8 py-2 rounded-full shadow-sm hover:bg-gray-50 transition-all  hover:scale-105"
          >
            Start a project
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

const HowWeHelp = () => {
  const services = [
    {
      title: "AI-Powered Design",
      desc: "Leveraging the latest artificial intelligence tools to craft breathtaking, dynamic, and user-centric interfaces rapidly.",
      icon: <FiCpu className="text-4xl text-purple-500" />,
      gradient: "from-purple-500/20 to-transparent",
    },
    {
      title: "Web & Mobile Development",
      desc: "Fullstack engineering for scalable web platforms and mobile applications, built for performance and growth.",
      icon: <FiCode className="text-4xl text-blue-500" />,
      gradient: "from-blue-500/20 to-transparent",
    },
    {
      title: "Private Tech Tutoring",
      desc: "1-on-1 industry-led tutoring for individuals looking to master coding, design, and software engineering.",
      icon: <FiBookOpen className="text-4xl text-cyan-500" />,
      gradient: "from-cyan-500/20 to-transparent",
    },
  ];

  return (
    <section className="py-32 px-10 md:px-20 bg-[#fdfdfd] relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-sm font-bold uppercase tracking-widest text-[#676767] mb-4">
            Services
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            How We Help
          </h2>
          <p className="mt-4 text-[#676767] text-lg">
            Solutions designed to build, scale, and educate.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="glass-card rounded-[2.5rem] p-10 relative overflow-hidden group cursor-pointer"
            >
              <div
                className={`absolute top-0 left-0 w-full h-full bg-gradient-to-b ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
              />
              <div className="bg-white/80 w-20 h-20 rounded-2xl flex items-center justify-center mb-8 shadow-sm border border-black/5 relative z-10 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h4 className="text-2xl font-bold mb-4 relative z-10">
                {service.title}
              </h4>
              <p className="text-[#676767] leading-relaxed relative z-10">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Partners = () => {
  const partners = [
    { name: "EduLearn Academy", icon: "🎓" },
    { name: "FinTrack App", icon: "📈" },
    { name: "Global High School", icon: "🏫" },
    { name: "Acme Startup", icon: "🚀" },
    { name: "HealthSync Portal", icon: "⚕️" },
    { name: "TechCamp Institute", icon: "💻" },
  ];

  return (
    <section className="py-24 bg-white border-y border-black/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-10 md:px-20 mb-12">
        <h2 className="text-center text-[#111111] font-bold uppercase tracking-[0.2em] text-[10px] opacity-40">
          Who We Partner With
        </h2>
      </div>

      <div className="relative overflow-hidden flex whitespace-nowrap">
        <div className="animate-marquee-partners flex flex-none items-center">
          {[...partners, ...partners, ...partners].map((partner, i) => (
            <div
              key={i}
              className="flex items-center gap-3 text-3xl md:text-5xl font-bold tracking-tighter text-[#111111] opacity-30 hover:opacity-100 transition-opacity duration-500 cursor-default px-12 md:px-24"
            >
              <span className="text-4xl">{partner.icon}</span>
              {partner.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  return (
    <section className="py-32 px-10 md:px-20 bg-[#f9f9f9]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold text-[#111111] tracking-tight mb-4">
              Our Work
            </h2>
            <p className="max-w-md text-[#676767] text-lg font-medium">
              Transforming ideas into digital reality through robust engineering
              and stunning AI-driven design.
            </p>
          </div>
          <Link
            href={"/projects"}
            className="bg-black text-white px-8 py-4 rounded-full font-bold shadow-xl hover:scale-105 transition-transform flex items-center gap-2"
          >
            View All Projects <FiArrowUpRight />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {[
            {
              title: "EduTech Platform",
              desc: "A comprehensive learning management system tailored for interactive coding lessons.",
              img: "/heart.avif",
              tags: ["Web Dev", "Education", "React"],
            },
            {
              title: "Startup FinApp",
              desc: "Mobile-first financial dashboard built with modern React Native for iOS and Android.",
              img: "/heart.avif",
              tags: ["Mobile", "Fintech", "App"],
            },
            {
              title: "AI Design Audit",
              desc: "Complete visual overhaul of an enterprise SaaS tool utilizing AI-assisted UI/UX methodologies.",
              img: "/heart.avif",
              tags: ["Design", "AI", "SaaS"],
            },
            {
              title: "School Portal",
              desc: "A secure and fast portal for parents and students to track learning milestones.",
              img: "/heart.avif",
              tags: ["Web Dev", "Schools", "Fullstack"],
            },
          ].map((project, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="group cursor-pointer bg-white rounded-[2.5rem] p-4 shadow-sm border border-black/5"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] bg-gray-50 mb-8">
                <Image
                  src={project.img}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="px-4 pb-4">
                <h3 className="text-2xl font-bold text-[#111111] mb-2">
                  {project.title}
                </h3>
                <p className="text-[#676767] mb-6 line-clamp-2 font-medium">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] uppercase bg-gray-100 px-4 py-1.5 rounded-full text-black font-bold tracking-widest"
                    >
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

const MeetTheTeam = () => {
  return (
    <section className="py-32 px-10 md:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold uppercase tracking-widest text-[#676767] mb-4">
            The DNA
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight">
            Meet the Vwindi Team
          </h3>
          <p className="mt-4 text-[#676767] text-lg max-w-2xl mx-auto">
            Led by a solo fullstack visionary, supported by a network of
            part-time expert friends and instructors dedicated to development
            and teaching.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          <div className="glass-card border border-black/10 rounded-[2.5rem] p-8 w-full max-w-sm text-center">
            <div className="w-32 h-32 mx-auto bg-gradient-to-tr from-blue-400 to-purple-500 rounded-full mb-6 p-1">
              <div className="w-full h-full bg-white rounded-full flex items-center justify-center text-3xl">
                👨‍💻
              </div>
            </div>
            <h4 className="text-2xl font-bold mb-2">Founder & Lead Engineer</h4>
            <p className="text-[#676767] font-medium">
              Fullstack Dev & Educator
            </p>
          </div>
          <div className="glass-card border border-black/10 rounded-[2.5rem] p-8 w-full max-w-sm text-center opacity-70">
            <div className="w-32 h-32 mx-auto bg-gray-100 rounded-full mb-6 p-1 flex items-center justify-center text-3xl">
              🤝
            </div>
            <h4 className="text-2xl font-bold mb-2">Expert Instructors</h4>
            <p className="text-[#676767] font-medium">
              Part-time Specialists & Tutors
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const CTAForm = () => {
  return (
    <section className="py-32 px-10 md:px-20 bg-[#f9f9f9] relative overflow-hidden">
      <div className="wind-glow top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30" />
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-16 items-center relative z-10">
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Get a free <br /> project check-up
          </h2>
          <p className="text-xl text-[#676767] mb-8">
            Whether you need a new web app, AI design, or private tech tutoring,
            we&apos;re here to help you grow.
          </p>
          <div className="glass-card p-8 rounded-3xl inline-block text-left">
            <h4 className="font-bold mb-2 text-lg">Book a 30-min Intro Call</h4>
            <p className="text-[#676767] mb-4">
              Let&apos;s discuss your goals.
            </p>
            <button className="bg-black text-white w-full py-4 rounded-full font-bold">
              Find a Time
            </button>
          </div>
        </div>

        <div className="flex-1 w-full glass-card p-10 rounded-[3rem] shadow-xl border border-white/60">
          <form
            className="flex flex-col gap-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="text"
              placeholder="Full Name"
              className="w-full bg-white/50 border border-black/10 rounded-xl px-6 py-4 outline-none focus:border-blue-500"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-white/50 border border-black/10 rounded-xl px-6 py-4 outline-none focus:border-blue-500"
            />
            <select className="w-full bg-white/50 border border-black/10 rounded-xl px-6 py-4 outline-none focus:border-blue-500 text-[#676767]">
              <option value="">I am interested in...</option>
              <option value="dev">Web/Mobile Development</option>
              <option value="tutoring">Private Tech Tutoring</option>
              <option value="design">AI Design</option>
            </select>
            <textarea
              placeholder="Tell us more about your project or learning goals..."
              rows={4}
              className="w-full bg-white/50 border border-black/10 rounded-xl px-6 py-4 outline-none focus:border-blue-500 resize-none"
            ></textarea>
            <button className="bg-black text-white px-8 py-4 rounded-full font-bold hover:bg-[#449AFA] transition-colors mt-4">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

import Footer from "@/components/Footer";
import Link from "next/link";

const Page = () => {
  return (
    <main className="bg-white">
      <Hero />
      <Partners />
      <HowWeHelp />
      <Projects />
      <MeetTheTeam />
      <CTAForm />
      <Footer />
    </main>
  );
};

export default Page;
