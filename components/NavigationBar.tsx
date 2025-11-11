"use client";

import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import AnimatedCallButton from "./ui/AnimatedCallButton";
import { RxHamburgerMenu } from "react-icons/rx";

const NavigationBar = () => {
  return (
    <div
      className=" fixed flex flex-row justify-between items-center border rounded-full px-10 h-[70px]
    w-[95%] top-4 left-1/2 -translate-x-1/2 xl:w-[85%]"
    >
      <h1>Logo</h1>

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
      <div className="flex flex-row gap-4 items-center">
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
              (e.currentTarget.style.boxShadow = "inset 0 0 10px rgba(0,0,0,0)")
            }
          >
            Get in touch
          </button>
        </div>

        {/* Book a call button */}
        <AnimatedCallButton />

        {/* Burger Button */}
        <button className="flex lg:hidden text-[30px]">
          <RxHamburgerMenu />
        </button>
      </div>
    </div>
  );
};

export default NavigationBar;
