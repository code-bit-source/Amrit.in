import { useEffect, useState } from "react";
import gsap from "gsap";

const PageLoad = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let value = 0;

    const interval = setInterval(() => {
      if (value > 100) {
        clearInterval(interval);

        // First slide loader up
        gsap.to(".loader-container", {
          y: "-100%",
          duration: 1.2,
          ease: "power4.inOut",
          onComplete: () => {
            // Then make bg transparent
            gsap.to(".loader-container", {
              backgroundColor: "transparent",
              duration: 0.5,
              onComplete: () => setIsLoading(false),
            });
          },
        });

        return;
      }

      setProgress(value);
      value++;
    }, 30); // adjust speed

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      {isLoading && (
        <div className="loader-container fixed inset-0 z-50 bg-black flex flex-col items-center justify-center gap-6">
          {/* Number */}
          <span className="text-6xl font-bold text-white font-[font1]">
            {progress}%
          </span>

          {/* Progress bar */}
          <div className="w-40 h-1 bg-red-600 overflow-hidden relative rounded mt-6">
            <div
              className="absolute left-0 top-0 h-full bg-white"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      )}

      {!isLoading && children}
    </div>
  );
};

export default PageLoad;
