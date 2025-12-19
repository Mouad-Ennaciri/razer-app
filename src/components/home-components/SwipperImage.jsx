import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import product1 from '../assets/images/razer-img/cursor-razer.png'
import product2 from '../assets/images/razer-img/pc-razer.png'
import product3 from '../assets/images/razer-img/razer-headphones-gray.png'
const images = [
  product1,
  product2,
  product3,
];

export default function SwipperImage() {
  const [active, setActive] = useState(1);
  const cardRefs = useRef([]);

  // entrance animation
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(cardRefs.current, {
        y: 30,
        opacity: 0,
        stagger: 0.08,
        duration: 0.8,
        ease: "power3.out",
      });
    });

    return () => ctx.revert();
  }, []);

  // active scale animation
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      cardRefs.current.forEach((el, idx) => {
        if (!el) return;

        gsap.to(el, {
          scale: idx === active ? 1.15 : 0.95,
          duration: 0.35,
          ease: "power2.out",
        });
      });
    });

    return () => ctx.revert();
  }, [active]);

  return (
    <div className="w-full flex items-center justify-center py-10">
      <div className="relative flex items-center justify-center gap-6 md:gap-8">
        {images.map((src, i) => {
          const isCenter = i === active;
          const isLeft = i < active;
          const isRight = i > active;

          return (
            <div
              key={i}
              ref={(el) => (cardRefs.current[i] = el)}
              onClick={() => setActive(i)}
              className={`relative cursor-pointer select-none
                transition-[transform] duration-500 ease-out
                ${isCenter ? "z-30" : "z-20"}
                ${isLeft ? "-translate-x-2 md:-translate-x-6 rotate-[-6deg] md:rotate-[-8deg]" : ""}
                ${isRight ? "translate-x-2 md:translate-x-6 rotate-[6deg] md:rotate-[8deg]" : ""}
              `}
            >
              <div
                className={`overflow-hidden rounded-2xl shadow-2xl backdrop-blur-[4px]
                  border border-transparent bg-gradient-to-b
                  from-[#0f1112]/60 to-[#000000]/30 p-1
                  transition-all duration-500 ease-out
                  ${isCenter
                    ? "ring-2 ring-[#00ff66] shadow-[0_10px_40px_rgba(0,255,102,0.08)]"
                    : "opacity-90"}
                `}
              >
                <img
                  src={src}
                  alt={`product-${i}`}
                  className={`block w-auto object-contain transition-all duration-500 ease-out
                    h-[90px] md:h-[110px]
                    ${isCenter ? "md:h-[140px]" : "md:h-[95px]"}
                  `}
                />
              </div>

              {isCenter && (
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2
                  text-xs md:text-sm px-3 py-1 rounded-full
                  bg-gradient-to-r from-[#0b0b0b]/60 to-[#0b0b0b]/40
                  border border-[#1f1f1f] text-[#cfeebb]
                  shadow-[0_6px_24px_rgba(0,255,102,0.06)]"
                >
                  Featured
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
