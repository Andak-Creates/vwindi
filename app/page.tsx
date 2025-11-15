"use client";

import Icon from "@/components/svg/Icon";
import TestimonialCard, { Testimonial } from "@/components/ui/TestimonialCard";
import Image from "next/image";
import { useRef, useState } from "react";

const testimonials: Testimonial[] = [
  {
    logo: "/acs.svg",
    text: "What's particularly impressive is their ability to think beyond just the immediate project, sharing knowledge that benefits our company.",
    authorImage: "/silas.png",
    name: "Amaka Andak",
    role: "Marketing Manager, ACS",
  },
  {
    logo: "/wpengine.svg",
    text: "They were one of the first to work with headless platforms—and they've done it exceptionally well.",
    authorImage: "/kelsey.png",
    name: "Kelsey Oliver",
    role: "Marketing Manager, WPEngine",
  },
  {
    logo: "/amplifidor.svg",
    text: "The team is highly responsive, attentive, and collaborative. They ask insightful questions and act like part of our team.",
    authorImage: "/faisal.png",
    name: "Faisal Alqahtani",
    role: "CEO, Amplifidor",
  },
  {
    logo: "/amplifidor.svg",
    text: "The team is highly responsive, attentive, and collaborative. They ask insightful questions and act like part of our team.",
    authorImage: "/faisal.png",
    name: "Faisal Alqahtani",
    role: "CEO, Amplifidor",
  },
];

const Page = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const scrollLeft = scrollRef.current.scrollLeft;
    const cardWidth = scrollRef.current.scrollWidth / testimonials.length;
    const index = Math.round(scrollLeft / cardWidth);
    setActiveIndex(index);
  };

  const scrollToIndex = (index: number) => {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.scrollWidth / testimonials.length;
    scrollRef.current.scrollTo({
      left: cardWidth * index,
      behavior: "smooth",
    });
  };

  return (
    <div className="py-[70px] text-center">
      <main>
        <h1
          className="text-[30px] text-center flex 
        md:text-[50px] lg:text-[65px]
        flex-col items-center justify-center w-[95%] leading-tight"
        >
          <span>Treat yourself to a</span>

          <span className="flex flex-wrap items-center justify-center gap-2">
            Design
            <div className="relative h-10 w-10 md:h-16 md:w-16 inline-block">
              <Image
                src="/plusSpan.png"
                alt="plus icon"
                fill
                className="object-contain"
              />
            </div>
            Development
          </span>

          <span
            style={{
              textShadow:
                "0 0 5px rgba(138, 43, 226, 0.7), 0 0 2px rgba(255, 105, 180, 0.6)",
            }}
            className="relative inline-block bg-linear-to-r from-pink-400 via-blue-500 to-blue-500 bg-clip-text text-transparent font-medium tracking-wider"
          >
            partnership
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 259 19"
              className="absolute left-0 -bottom-2 w-full"
            >
              <defs>
                <linearGradient
                  id="underline-gradient"
                  x1="-62.084"
                  x2="178.932"
                  y1="-27.922"
                  y2="204.601"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#8BD8FC" />
                  <stop offset="0.333" stopColor="#449AFA" />
                  <stop offset="0.667" stopColor="#7D6BF9" />
                  <stop offset="1" stopColor="#CC6BF9" />
                </linearGradient>
              </defs>
              <path
                stroke="url(#underline-gradient)"
                strokeLinecap="round"
                strokeWidth="3"
                d="M2 14.766C83-3.107 229.5 37.236 257 2"
              />
            </svg>
          </span>
        </h1>

        <p className="mt-[50px] text-[#464646]">
          Full-suite development design && education partners. We're the all in
          one solution for{" "}
          <span className="p-1 bg-gray-300 rounded-lg text-black">
            enterprises
          </span>
          ,{" "}
          <span className="p-1 bg-gray-300 rounded-lg text-black">schools</span>{" "}
          &&{" "}
          <span className="p-1 bg-gray-300 rounded-lg text-black">
            startups
          </span>
        </p>

        {/* Buttons */}
        <div className="mt-[50px] flex flex-row gap-3 items-center justify-center">
          <button className="px-5 py-3 border-[0.5] border-[#cecece] hover:bg-[#ebebeb] rounded-full cursor-pointer">
            Why Vwindi?
          </button>
          <button className="px-5 py-3 bg-white shadow-md rounded-full cursor-pointer">
            Start a project
          </button>
        </div>
      </main>

      {/* Testimonial section */}
      <section className="mt-[150px]">
        <h2 className="flex flex-wrap items-center justify-center gap-2 text-[30px] font-medium">
          Why Clients{" "}
          <div className="relative h-10 w-10 md:h-16 md:w-16 inline-block">
            <Image
              src="/heart.avif"
              alt="plus icon"
              fill
              className="object-contain"
            />
            <span
              className="px-4 py-1 bg-white rounded-full shadow-md text-[15px]
            absolute -top-6 left-2 -rotate-6 -z-1"
            >
              Love!
            </span>
          </div>{" "}
          <span className="relative">
            Vwindi{" "}
            <Icon className="text-green-500 w-12 h-auto absolute -top-4 -right-7" />
          </span>
        </h2>

        <div className="w-full py-10">
          <div className="max-w-6xl mx-auto px-6 py-2 bg-[#c5c5c5] md:bg-transparent rounded-full md:rounded-lg relative">
            <div
              className="hidden md:flex absolute top-1/2 left-1/2 -translate-1/2 w-[400px] 
            h-[400px] bg-[#c5c5c5] rounded-full"
            ></div>
            <div
              ref={scrollRef}
              onScroll={handleScroll}
              className="flex gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide md:grid md:grid-cols-2 md:overflow-visible"
            >
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className="shrink-0 w-full md:w-auto md:shrink snap-center"
                >
                  <TestimonialCard {...t} />
                </div>
              ))}
            </div>
          </div>

          {/* Scroll indicators */}
          <div className="flex justify-center gap-2 mt-6 md:hidden">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToIndex(i)}
                className={`h-2 rounded-full transition-all ${
                  activeIndex === i ? "w-8 bg-gray-800" : "w-2 bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Projects section */}
      <section className="mt-[50px] bg-white rounded-2xl px-2.5 py-10 text-left shadow-lg">
        <div>
          <h2 className="text-[35px] font-semibold text-left">Our Projects</h2>
          <p className="mt-3">
            The Vwindi Hall Of Fame: Featuring Brands and Projects of all shapes
            and sizes.
          </p>

          <button
            className="bg-linear-to-tr from-black to-[#838383] font-semibold shadow-md
           text-white px-6 py-3 rounded-full mt-5 cursor-pointer"
          >
            View All Projects
          </button>
        </div>

        {/* Projects */}
        <div className="mt-[50px]">
          {/* Project Card */}
          <div>
            <div className="relative h-[250px] w-full border rounded-4xl overflow-hidden">
              <Image src={"/heart.avif"} alt="" fill className="object-cover" />
            </div>
            <div className="py-1 px-4 mt-3">
              <h3 className="text-[20px] font-semibold">Decked Out</h3>
              <p>
                Decked Out is a modern, interactive card-game app featuring
                multiple fun, social and spicy game modes. Designed to elevate
                parties, dates, hangouts, and group experiences...
              </p>

              {/* Tags */}
              <div className="flex flex-row flex-wrap gap-4 mt-5">
                <small className="px-4 py-1 bg-yellow-50">
                  Mobile Development
                </small>
                <small className="px-4 py-1 bg-yellow-50">UI/UX Design</small>
                <small className="px-4 py-1 bg-yellow-50">Entertainment</small>
                <small className="px-4 py-1 bg-yellow-50">Naij</small>
                {/* country */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
