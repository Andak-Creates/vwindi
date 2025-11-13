"use client";

import Image from "next/image";

const page = () => {
  return (
    <div className="py-[70px] text-center">
      <main>
        <h1 className="text-[30px] text-center flex flex-col items-center justify-center w-[95%] leading-tight">
          <span>Treat yourself to a</span>

          <span className="flex flex-wrap items-center justify-center gap-2">
            Design
            <div className="relative h-10 w-10 inline-block">
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

      {/* about us */}
      <section className="mt-[150px]">
        <h2 className="flex flex-wrap items-center justify-center gap-2">
          Why Clients{" "}
          <div className="relative h-5 w-5 inline-block">
            <Image
              src="/plusSpan.png"
              alt="plus icon"
              fill
              className="object-contain"
            />
          </div>{" "}
          Vwindi
        </h2>
      </section>
    </div>
  );
};

export default page;
