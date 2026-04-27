"use client";

import { useEffect, useState } from "react";

const ViewportRuler = () => {
  const [pageHeight, setPageHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      const footer = document.querySelector("footer");
      if (footer) {
        const rect = footer.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        setPageHeight(rect.bottom + scrollTop - 128); // Subtracting 128px (py-32) to stop at footer content
      } else {
        setPageHeight(document.body.scrollHeight);
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    
    // Also update when content changes
    const observer = new MutationObserver(updateHeight);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("resize", updateHeight);
      observer.disconnect();
    };
  }, []);

  const renderRuler = (side: "left" | "right") => {
    const ticks = [];
    const step = 50;
    const totalSteps = Math.ceil(pageHeight / step);

    for (let i = 0; i <= totalSteps; i++) {
      const pos = i * step;
      ticks.push(
        <div 
          key={i} 
          className="absolute flex items-center gap-2"
          style={{ top: `${pos}px` }}
        >
          <div className={`w-2 h-[1px] bg-black/10 ${side === "right" ? "order-2" : ""}`} />
          <span className="text-[10px] font-mono text-black/20 select-none">
            {pos}
          </span>
        </div>
      );
    }
    return ticks;
  };

  return (
    <div className="absolute inset-0 pointer-events-none z-40 overflow-hidden bg-transparent" style={{ height: `${pageHeight}px` }}>
      {/* Left Ruler */}
      <div className="absolute left-4 top-0 h-full w-12 bg-transparent">
        {renderRuler("left")}
      </div>
      
      {/* Right Ruler */}
      <div className="absolute right-4 top-0 h-full w-12 flex flex-col items-end bg-transparent">
        {renderRuler("right")}
      </div>
    </div>
  );
};

export default ViewportRuler;
