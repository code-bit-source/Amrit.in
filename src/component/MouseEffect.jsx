import { useEffect, useState } from "react";

const MouseEffect = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveHandler = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", moveHandler);
    return () => window.removeEventListener("mousemove", moveHandler);
  }, []);

  return (
    <div
      style={{
        left: `${pos.x}px`,
        top: `${pos.y}px`,
      }}
      className="fixed hidden md:block z-[9999] pointer-events-none 
                 w-8 h-8 rounded-full 
                 bg-black/50 border border-red-500/50 
                 shadow-[0_0_30px_8px_rgba(239,68,68,0.2)]
                 -translate-x-1/2 -translate-y-1/2 
                 transition-transform duration-75 ease-out"
    ></div>
  );
};

export default MouseEffect;
