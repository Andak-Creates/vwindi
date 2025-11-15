"use client";

import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import AnimatedCallButton from "./ui/AnimatedCallButton";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import Lottie from "lottie-react";
import Wave from "@/public/animations/wave-animation.json";

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav
        className=" fixed flex flex-row justify-between items-center rounded-full px-6 md:px-10 h-[70px]
    w-[95%] top-4 left-1/2 -translate-x-1/2 xl:w-[85%] backdrop-blur-lg shadow-md z-50"
      >
        <h1 className="flex flex-row items-center gap-2 font-semibold">
          <Lottie animationData={Wave} loop className="w-10 h-10" /> Vwindi
        </h1>

        {/* Desktop Navigation Links */}
        <div className="lg:flex flex-row lg:gap-8 md:gap-[5px] px-2.5 py-1 w-fit justify-center hidden">
          <Link className="linkBtn" href={""}>
            About Us
          </Link>
          <Link href={""} className="flex flex-row items-center gap-2 linkBtn">
            Services <IoIosArrowDown />{" "}
          </Link>
          <Link href={""} className="linkBtn">
            Projects
          </Link>
          <Link href={""} className="linkBtn">
            Resources
          </Link>
        </div>

        {/* Navigation buttons */}
        <div className="flex flex-row gap-2 items-center">
          {/* Get in touch Button */}
          <div className="hidden lg:flex bg-white p-px rounded-full shadow-md group h-fit font-semibold">
            <button
              className="bg-[#FFFFFF]  p-2 rounded-full cursor-pointer"
              style={{
                boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0)",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.boxShadow =
                  "inset 0 0 10px rgba(0,0,0,0.15)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.boxShadow =
                  "inset 0 0 10px rgba(0,0,0,0)")
              }
            >
              Get in touch
            </button>
          </div>

          {/* Book a call button */}
          <AnimatedCallButton />

          {/* Burger Button */}
          <button
            onClick={() => setIsOpen(true)}
            className="flex lg:hidden text-[30px]"
          >
            <RxHamburgerMenu />
          </button>
        </div>
      </nav>

      {/* Side navbar */}
      <div
        className={`fixed top-0 right-0 h-screen w-full sm:w-[500px]  backdrop-blur-lg shadow-lg transform transition-transform duration-300 z-5000 ${
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
        text-black px-6"
        >
          <div className="flex flex-col gap-8 px-2.5 py-1 w-fit justify-center">
            <Link className="linkBtn" href={""}>
              About Us
            </Link>
            <Link
              href={""}
              className="flex flex-row items-center gap-2 linkBtn"
            >
              Services <IoIosArrowDown />{" "}
            </Link>
            <Link href={""} className="linkBtn">
              Projects
            </Link>
            <Link href={""} className="linkBtn">
              Resources
            </Link>
          </div>

          {/* Get in touch Button */}
          <div className=" flex bg-white w-full text-center p-px rounded-full shadow-md group h-fit font-semibold">
            <button
              className="bg-[#FFFFFF]  p-2 rounded-full cursor-pointer w-full text-center"
              style={{
                boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0)",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.boxShadow =
                  "inset 0 0 10px rgba(0,0,0,0.15)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.boxShadow =
                  "inset 0 0 10px rgba(0,0,0,0)")
              }
            >
              Get in touch
            </button>
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
