import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const StackCard = () => {
  const cardRefs = useRef([]);

  useEffect(() => {
    cardRefs.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: index * 50, scale: 1 - index * 0.05 },
        {
          y: 0,
          scale: 1,
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
            end: "center center",
            scrub: true,
          },
        }
      );
    });
  }, []);

  return (
    <div className="flex flex-col items-center space-y-4 mt-20">
      {[1, 2, 3, 4].map((_, index) => (
        <div
          key={index}
          ref={(el) => (cardRefs.current[index] = el)}
          className="p-6 bg-white shadow-lg rounded-xl w-64 text-center transform transition-all text-black h-20"
          style={{
            position: "absolute",
            top: `${index * 50}px`,
            zIndex: 10 - index,
          }}
        >
          Card {index + 1}
        </div>
      ))}
    </div>
  );
};

export default StackCard;
