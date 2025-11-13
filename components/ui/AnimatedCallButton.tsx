"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const AnimatedCallButton = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative overflow-hidden bg-black text-white font-semibold p-2 rounded-full transition-all duration-300 border border-[#EAEAED] flex items-center justify-center w-[100px] h-[45px] cursor-pointer text-[14px]"
    >
      {/* Default Text */}
      <AnimatePresence mode="wait">
        {!hovered && (
          <motion.span
            key="book"
            initial={{ y: 0, opacity: 1 }}
            exit={{ y: -40, opacity: 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
            className="absolute w-[200px]"
          >
            Book a Call
          </motion.span>
        )}
      </AnimatePresence>

      {/* Hover State Content */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            key="hover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex items-center justify-center gap-3"
          >
            {/* Logo from left */}
            <motion.div
              initial={{ x: -40, opacity: 0, scale: 0.8 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              exit={{ x: -40, opacity: 0, scale: 0.8 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <Image
                src="/your-logo.svg"
                alt="Logo"
                width={20}
                height={20}
                className="rounded-full"
              />
            </motion.div>

            {/* Plus sign from bottom */}
            <motion.span
              initial={{ y: 40, opacity: 0, scale: 0.8 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 40, opacity: 0, scale: 0.8 }}
              transition={{ type: "spring", stiffness: 100, damping: 18 }}
              className="text-lg font-bold"
            >
              +
            </motion.span>

            {/* “You” from right */}
            <motion.span
              initial={{ x: 40, opacity: 0, scale: 0.8 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              exit={{ x: 40, opacity: 0, scale: 0.8 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="font-semibold"
            >
              You
            </motion.span>
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
};

export default AnimatedCallButton;
