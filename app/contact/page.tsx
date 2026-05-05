"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { FiMail, FiPhone, FiMapPin, FiChevronRight, FiCalendar } from "react-icons/fi";
import Link from "next/link";
import NavigationBar from "@/components/NavigationBar";
import Footer from "@/components/Footer";

const ContactPage = () => {
  const [activeTab, setActiveTab] = useState("Project");
  const tabs = ["Project", "Careers", "Partnership", "Press"];

  return (
    <main className="bg-[#FFFFFF] min-h-screen">
      <NavigationBar />
      
      {/* Contact Hero Section */}
      <section className="pt-32 pb-20 px-10 md:px-20 max-w-7xl mx-auto">
        <div className="flex flex-col-reverse lg:flex-row gap-12 items-start">
          
          {/* Left Column: Form */}
          <div className="flex-1 w-full">
            <div className="mb-8">
              <span className="text-[#676767] font-medium text-sm">Contact Us</span>
              <div className="flex items-center gap-4 mt-2">
                <div className="relative w-12 h-12 mix-blend-multiply">
                   <Image 
                    src="/contact/paper_plane_cutout.png" 
                    alt="Paper Plane" 
                    fill
                    sizes="48px"
                    className="object-contain"
                   />
                </div>
                <h1 className="text-5xl md:text-[55px] font-bold tracking-tight text-[#111111] leading-[1.01]">
                  Take a <span className="text-[#449AFA]">Seat</span>
                </h1>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex flex-wrap gap-2 mb-10">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                    activeTab === tab
                      ? "bg-[#111111] text-white shadow-lg"
                      : "bg-[#F5F5F7] text-[#676767] hover:bg-[#EAEAED]"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Form */}
            <form className="space-y-6 max-w-lg" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-sm font-bold text-[#111111] ml-1">Name</label>
                <input
                  type="text"
                  placeholder="Evan Hartley"
                  className="w-full bg-white border border-black/5 rounded-2xl px-6 py-4 outline-none focus:border-[#449AFA] transition-colors shadow-sm"
                />
              </div>

              {/* Dynamic Fields */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-6"
                >
                  {activeTab === "Project" && (
                    <>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-[#111111] ml-1">Company</label>
                        <input
                          type="text"
                          placeholder="Hartley, Hartley & Hartley"
                          className="w-full bg-white border border-black/5 rounded-2xl px-6 py-4 outline-none focus:border-[#449AFA] transition-colors shadow-sm"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-[#111111] ml-1">Email</label>
                        <input
                          type="email"
                          placeholder="evan@hartley.com"
                          className="w-full bg-white border border-black/5 rounded-2xl px-6 py-4 outline-none focus:border-[#449AFA] transition-colors shadow-sm"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-[#111111] ml-1">What can we help you with?</label>
                        <textarea
                          placeholder="Tell us about your goals..."
                          rows={4}
                          className="w-full bg-white border border-black/5 rounded-2xl px-6 py-4 outline-none focus:border-[#449AFA] transition-colors shadow-sm resize-none"
                        />
                      </div>
                    </>
                  )}

                  {activeTab === "Careers" && (
                    <>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-[#111111] ml-1">Email</label>
                        <input
                          type="email"
                          placeholder="evan@hartley.com"
                          className="w-full bg-white border border-black/5 rounded-2xl px-6 py-4 outline-none focus:border-[#449AFA] transition-colors shadow-sm"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-[#111111] ml-1">Role looking to apply for</label>
                        <select
                          className="w-full bg-white border border-black/5 rounded-2xl px-6 py-4 outline-none focus:border-[#449AFA] transition-colors shadow-sm text-[#676767] appearance-none"
                        >
                          <option value="">Select a role...</option>
                          <option value="fullstack">Fullstack Developer</option>
                          <option value="frontend">Frontend Engineer</option>
                          <option value="backend">Backend Engineer</option>
                          <option value="design">UI/UX Designer</option>
                          <option value="ai">AI / Machine Learning Engineer</option>
                          <option value="intern">Internship</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-[#111111] ml-1">Portfolio or LinkedIn</label>
                        <input
                          type="text"
                          placeholder="https://..."
                          className="w-full bg-white border border-black/5 rounded-2xl px-6 py-4 outline-none focus:border-[#449AFA] transition-colors shadow-sm"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-[#111111] ml-1">Why do you want to join Vwindi?</label>
                        <textarea
                          placeholder="Tell us about your passion..."
                          rows={4}
                          className="w-full bg-white border border-black/5 rounded-2xl px-6 py-4 outline-none focus:border-[#449AFA] transition-colors shadow-sm resize-none"
                        />
                      </div>
                    </>
                  )}

                  {activeTab === "Partnership" && (
                    <>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-[#111111] ml-1">Company</label>
                        <input
                          type="text"
                          placeholder="Your Company Name"
                          className="w-full bg-white border border-black/5 rounded-2xl px-6 py-4 outline-none focus:border-[#449AFA] transition-colors shadow-sm"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-[#111111] ml-1">Email</label>
                        <input
                          type="email"
                          placeholder="evan@hartley.com"
                          className="w-full bg-white border border-black/5 rounded-2xl px-6 py-4 outline-none focus:border-[#449AFA] transition-colors shadow-sm"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-[#111111] ml-1">How can we partner?</label>
                        <textarea
                          placeholder="Tell us about your proposal..."
                          rows={4}
                          className="w-full bg-white border border-black/5 rounded-2xl px-6 py-4 outline-none focus:border-[#449AFA] transition-colors shadow-sm resize-none"
                        />
                      </div>
                    </>
                  )}

                  {activeTab === "Press" && (
                    <>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-[#111111] ml-1">Publication / Organization</label>
                        <input
                          type="text"
                          placeholder="The Daily News"
                          className="w-full bg-white border border-black/5 rounded-2xl px-6 py-4 outline-none focus:border-[#449AFA] transition-colors shadow-sm"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-[#111111] ml-1">Email</label>
                        <input
                          type="email"
                          placeholder="evan@hartley.com"
                          className="w-full bg-white border border-black/5 rounded-2xl px-6 py-4 outline-none focus:border-[#449AFA] transition-colors shadow-sm"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-[#111111] ml-1">Inquiry Details</label>
                        <textarea
                          placeholder="What would you like to know?"
                          rows={4}
                          className="w-full bg-white border border-black/5 rounded-2xl px-6 py-4 outline-none focus:border-[#449AFA] transition-colors shadow-sm resize-none"
                        />
                      </div>
                    </>
                  )}
                </motion.div>
              </AnimatePresence>

              <button className="bg-[#111111] text-white w-full py-4 rounded-2xl font-bold hover:scale-[1.02] transition-transform shadow-xl">
                Send Now!
              </button>
            </form>
          </div>

          {/* Right Column: Visuals & Booking */}
          <div className="flex-1 w-full lg:sticky lg:top-32">
            <div className="relative">
              {/* Booking Card */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gradient-to-br from-[#449AFA]/20 via-[#a855f7]/20 to-[#06b6d4]/20 p-8 rounded-[2.5rem] border border-white/40 shadow-2xl backdrop-blur-xl relative z-10 overflow-hidden max-w-sm mx-auto lg:mx-0"
              >
                 {/* Glass Reflection */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />
                
                {/* Absolutely Positioned Emoji */}
                <motion.div 
                  animate={{ 
                    rotate: [0, 20, 0],
                    y: [0, -5, 0]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute top-6 right-6 text-4xl select-none"
                >
                  👋
                </motion.div>

                <div className="flex flex-col gap-8">
                   <div className="pr-12">
                     <h2 className="text-3xl font-bold text-[#111111] leading-tight">
                       Book a <span className="text-[#449AFA]">30-min</span> Introduction Call
                     </h2>
                   </div>
                   
                   <Link href="/book" className="w-full">
                     <button className="w-full bg-[#111111] text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-3 group">
                       <FiCalendar className="group-hover:rotate-12 transition-transform" />
                       Book a Call
                     </button>
                   </Link>
                </div>
              </motion.div>

              {/* 3D Asset Decoration */}
              <div className="mt-12 relative h-[500px] w-full mix-blend-multiply scale-110">
                 <Image 
                  src="/contact/armchair_lamp_cutout.png" 
                  alt="Modern Armchair and Lamp" 
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain"
                  priority
                 />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get in touch section */}
      <section className="py-24 bg-[#F9F9F9]">
        <div className="max-w-7xl mx-auto px-10 md:px-20 text-center">
          <h2 className="text-5xl font-bold mb-16 tracking-tight">Get in touch</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Message Us */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-black/5 flex flex-col items-center group cursor-pointer"
            >
              <div className="w-20 h-20 bg-[#449AFA]/10 rounded-3xl flex items-center justify-center mb-8 relative group-hover:scale-110 transition-transform">
                <FiMail className="text-3xl text-[#449AFA]" />
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#449AFA] rounded-full border-4 border-white shadow-sm" />
              </div>
              <h3 className="text-xl font-bold mb-6">Message Us</h3>
              <div className="w-full bg-[#F5F5F7] p-4 rounded-2xl flex items-center justify-between group-hover:bg-[#EAEAED] transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center border border-black/5">
                    <FiMail className="text-[#676767]" />
                  </div>
                  <span className="font-semibold text-sm">hello@vwindi.com</span>
                </div>
                <FiChevronRight className="text-[#676767]" />
              </div>
            </motion.div>

            {/* Call Us */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-black/5 flex flex-col items-center group cursor-pointer"
            >
              <div className="w-20 h-20 bg-[#a855f7]/10 rounded-3xl flex items-center justify-center mb-8 relative group-hover:scale-110 transition-transform">
                <FiPhone className="text-3xl text-[#a855f7]" />
              </div>
              <h3 className="text-xl font-bold mb-6">Call Us</h3>
              <div className="w-full bg-[#F5F5F7] p-4 rounded-2xl flex items-center justify-between group-hover:bg-[#EAEAED] transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center border border-black/5">
                    <FiPhone className="text-[#676767]" />
                  </div>
                  <span className="font-semibold text-sm">020 4538 0234</span>
                </div>
                <FiChevronRight className="text-[#676767]" />
              </div>
            </motion.div>

            {/* Address */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-black/5 flex flex-col items-center group cursor-pointer"
            >
              <div className="w-20 h-20 bg-[#06b6d4]/10 rounded-3xl flex items-center justify-center mb-8 relative group-hover:scale-110 transition-transform">
                <FiMapPin className="text-3xl text-[#06b6d4]" />
              </div>
              <h3 className="text-xl font-bold mb-6">Address</h3>
              <div className="w-full bg-[#F5F5F7] p-4 rounded-2xl flex items-center justify-between group-hover:bg-[#EAEAED] transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center border border-black/5">
                    <FiMapPin className="text-[#676767]" />
                  </div>
                  <span className="font-semibold text-sm">London SE16</span>
                </div>
                <FiChevronRight className="text-[#676767]" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ContactPage;
