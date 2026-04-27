"use client";

import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import AnimatedCallButton from "./ui/AnimatedCallButton";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { FiCode, FiCpu, FiBookOpen } from "react-icons/fi";

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [activeMobileSubmenu, setActiveMobileSubmenu] = useState<string | null>(null);

  return (
    <>
      <nav
        className="fixed flex flex-row justify-between items-center rounded-full px-6 md:px-10 h-[70px]
    w-[95%] top-4 left-1/2 -translate-x-1/2 xl:w-[85%] backdrop-blur-md bg-white/60 border border-black/5 shadow-lg z-50"
      >
        <Link href="/">
          <h1 className="flex flex-row items-center gap-2 font-bold text-xl tracking-tighter text-[#111111] hover:opacity-70 transition-opacity cursor-pointer">
            VWINDI
          </h1>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="lg:flex flex-row lg:gap-8 md:gap-[5px] px-2.5 py-1 w-fit justify-center items-center hidden font-medium h-full">
          <Link className="text-[#676767] hover:text-black transition-colors duration-200" href={"/about"}>
            About Vwindi
          </Link>
          
          <div 
            className="relative flex items-center h-full"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <div className="flex flex-row items-center gap-2 text-[#676767] hover:text-black transition-colors duration-200 cursor-pointer">
              Services <IoIosArrowDown className={`transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
            </div>

            {/* Dropdown Menu */}
            <AnimatePresence>
              {isServicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 15, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="fixed top-[70px] left-1/2 -translate-x-1/2 w-[1000px] bg-white rounded-[2.5rem] shadow-2xl border border-black/5 p-8 flex gap-8 cursor-default"
                >
                  {/* Industries */}
                  <div className="flex-1">
                    <motion.h3 
                      initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}
                      className="text-sm font-medium text-[#676767] mb-4"
                    >
                      Industries:
                    </motion.h3>
                    <div className="flex gap-4">
                      {[
                        { title: "Enterprise", desc: "Transformation at scale", icon: "🏢", color: "from-blue-100 to-blue-50", href: "/services/enterprise" },
                        { title: "Startup", desc: "Disruption meets scalability", icon: "🚀", color: "from-purple-100 to-purple-50", href: "/services/startup" },
                        { title: "E-commerce", desc: "Performance & personalisation", icon: "🛍️", color: "from-cyan-100 to-cyan-50", href: "/services/ecommerce" }
                      ].map((item, i) => (
                        <Link href={item.href} key={i} className="flex-1 block group" onClick={() => setIsServicesOpen(false)}>
                          <motion.div 
                            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 + (i * 0.05) }}
                            whileHover={{ y: -5, scale: 1.02 }}
                            className="h-full bg-white rounded-3xl p-5 hover:shadow-xl transition-all cursor-pointer border border-black/5"
                          >
                            <div className={`h-24 bg-gradient-to-br ${item.color} rounded-2xl mb-4 flex items-center justify-center text-4xl group-hover:scale-110 transition-transform duration-500 shadow-inner`}>
                              {item.icon}
                            </div>
                            <h4 className="font-bold text-[#111111] text-lg">{item.title}</h4>
                            <p className="text-xs text-[#676767] mt-1 leading-relaxed">{item.desc}</p>
                          </motion.div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Expertise */}
                  <div className="w-[230px]">
                    <motion.h3 
                      initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}
                      className="text-sm font-medium text-[#676767] mb-4"
                    >
                      Expertise:
                    </motion.h3>
                    <div className="flex flex-col gap-3">
                      {[
                        { title: "AI Design", desc: "Expert Design Partners", icon: <FiCpu className="text-2xl" />, href: "/services/design" },
                        { title: "Web & Mobile Dev", desc: "Scalable & Composable", icon: <FiCode className="text-2xl" />, href: "/services/development" },
                        { title: "Private Tutoring", desc: "Empowering builders", icon: <FiBookOpen className="text-2xl" />, href: "/resources" }
                      ].map((item, i) => (
                        <Link href={item.href} key={i} className="block" onClick={() => setIsServicesOpen(false)}>
                          <motion.div 
                            initial="hidden" animate="visible" whileHover="hover"
                            variants={{
                              hidden: { opacity: 0, x: 20 },
                              visible: { opacity: 1, x: 0, transition: { delay: 0.25 + (i * 0.05) } },
                              hover: { backgroundColor: "rgba(0,0,0,0.02)" }
                            }}
                            className="flex items-center p-3 rounded-2xl cursor-pointer border border-transparent hover:border-black/5 transition-colors overflow-hidden"
                          >
                            <motion.div
                              variants={{
                                hidden: { width: 0, opacity: 0, marginRight: 0, x: -10 },
                                visible: { width: 0, opacity: 0, marginRight: 0, x: -10 },
                                hover: { width: 48, opacity: 1, marginRight: 12, x: 0 }
                              }}
                              transition={{ type: "tween", duration: 0.15, ease: "easeOut" }}
                              className="overflow-hidden flex-shrink-0"
                            >
                              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-black/60 shadow-sm border border-black/5">
                                {item.icon}
                              </div>
                            </motion.div>
                            <motion.div
                              variants={{
                                hidden: { x: 0 },
                                visible: { x: 0 },
                                hover: { x: 2 }
                              }}
                              transition={{ type: "tween", duration: 0.15, ease: "easeOut" }}
                            >
                              <h4 className="font-bold text-sm text-[#111111] whitespace-nowrap">{item.title}</h4>
                              <p className="text-xs text-[#676767] whitespace-nowrap">{item.desc}</p>
                            </motion.div>
                          </motion.div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href={"/projects"} className="text-[#676767] hover:text-black transition-colors duration-200">
            Projects
          </Link>
          <Link href={"/resources"} className="text-[#676767] hover:text-black transition-colors duration-200">
            Resources
          </Link>
        </div>

        {/* Navigation buttons */}
        <div className="flex flex-row gap-2 items-center">
          {/* Get in touch Button */}
          <Link href="/contact" className="hidden lg:flex">
            <button
              className="bg-white text-[#111111] px-6 py-2 rounded-full cursor-pointer border border-black/10 hover:bg-gray-50 transition-all duration-300 font-semibold text-sm h-[45px] flex items-center justify-center"
            >
              Get in touch
            </button>
          </Link>

          {/* Book a call button */}
          <AnimatedCallButton />

          {/* Burger Button */}
          <button
            onClick={() => setIsOpen(true)}
            className="flex lg:hidden text-[30px] text-black"
          >
            <RxHamburgerMenu />
          </button>
        </div>
      </nav>

      {/* Side navbar */}
      <div
        className={`fixed top-0 right-0 h-screen w-full sm:w-[500px]  backdrop-blur-xl bg-white/95 border-l border-black/5 shadow-2xl transform transition-transform duration-500 z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-8 right-14 text-[35px] text-black"
        >
          <FaTimes />
        </button>

        {/* Links */}
        <div
          className="flex flex-col items-start mt-[200px] gap-6
        text-black px-10"
        >
          <div className="flex flex-col gap-8 px-2.5 py-1 w-fit justify-center">
            <Link className="text-3xl font-bold hover:text-[#449AFA] transition-colors" href={"/about"} onClick={() => setIsOpen(false)}>
              About Vwindi
            </Link>
            <div className="flex flex-col gap-4">
              <button
                className="flex flex-row items-center justify-between w-full text-3xl font-bold hover:text-[#449AFA] transition-colors"
                onClick={() => setActiveMobileSubmenu(activeMobileSubmenu === 'services' ? null : 'services')}
              >
                Services <IoIosArrowDown className={`transition-transform ${activeMobileSubmenu === 'services' ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {activeMobileSubmenu === 'services' && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden pl-4 flex flex-col gap-4 border-l-2 border-black/5"
                  >
                    <p className="text-sm text-[#676767] font-medium uppercase tracking-widest mt-2">Industries</p>
                    <Link href="/services/enterprise" className="text-xl font-medium" onClick={() => setIsOpen(false)}>Enterprise</Link>
                    <Link href="/services/startup" className="text-xl font-medium" onClick={() => setIsOpen(false)}>Startup</Link>
                    <Link href="/services/ecommerce" className="text-xl font-medium" onClick={() => setIsOpen(false)}>E-commerce</Link>
                    
                    <p className="text-sm text-[#676767] font-medium uppercase tracking-widest mt-4">Expertise</p>
                    <Link href="/services/design" className="text-xl font-medium" onClick={() => setIsOpen(false)}>AI Design</Link>
                    <Link href="/services/development" className="text-xl font-medium" onClick={() => setIsOpen(false)}>Web & Mobile Dev</Link>
                    <Link href="/resources" className="text-xl font-medium" onClick={() => setIsOpen(false)}>Private Tutoring</Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <Link href={"/projects"} className="text-3xl font-bold hover:text-[#449AFA] transition-colors" onClick={() => setIsOpen(false)}>
              Projects
            </Link>
            <Link href={"/resources"} className="text-3xl font-bold hover:text-[#449AFA] transition-colors" onClick={() => setIsOpen(false)}>
              Resources
            </Link>
          </div>

          {/* Get in touch Button */}
          <div className="flex w-full mt-10">
            <Link href="/contact" className="w-full" onClick={() => setIsOpen(false)}>
              <button
                className="bg-[#111111] text-white w-full py-4 rounded-full text-xl font-bold cursor-pointer transition-transform hover:scale-105 shadow-xl"
              >
                Get in touch
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Overlay when sidebar is open */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed bg-black z-10 md:hidden"
        />
      )}
    </>
  );
};

export default NavigationBar;
