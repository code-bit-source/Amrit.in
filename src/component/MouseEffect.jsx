import { useEffect, useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";

const MouseEffect = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [inner, setInner] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });

      // noticeable but controlled inner movement
      setInner({
        x: Math.max(Math.min(e.movementX, 6), -6),
        y: Math.max(Math.min(e.movementY, 6), -6),
      });
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div
      style={{
        left: pos.x,
        top: pos.y,
      }}
      className="
        fixed hidden md:flex z-[9999] pointer-events-none
        -translate-x-1/2 -translate-y-1/2
        w-8 h-8 rounded-full
        bg-black/80  
        shadow-[0_0_30px_rgba(0,0,0,0.6)]
        transition-transform duration-100 ease-out
      "
    >
      <div
        style={{
          transform: `translate(${inner.x}px, ${inner.y}px)`,
        }}
        className="
          flex   items-center justify-center
          w-full h-full
          text-white text-sm font-medium
          tracking-wide
          transition-transform duration-150 ease-out
        "
      >
        {/* <span className="leading-none font-light uppercase cursor-alias">Hire Me</span> */}
        <FiArrowUpRight className="mt-1 text-lg" />
      </div>
    </div>
  );
};

export default MouseEffect;
