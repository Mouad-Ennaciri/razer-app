import { useRef } from "react";
import {RiCloseLargeLine} from "@remixicon/react"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function ThreeDSignIn({className,closed,onSetClosed}) {
  const cardRef = useRef(null);
  
  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -(y - centerY) / 15;
    const rotateY = (x - centerX) / 15;

    card.style.transform = `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      translateY(-8px)
    `;
  };

  const resetTransform = () => {
    cardRef.current.style.transform = `
      perspective(1000px)
      rotateX(0deg)
      rotateY(0deg)
      translateY(0)
    `;
  };

  function closeSignIn(){
    onSetClosed(false);
  }
  
  useGSAP(()=>{
      gsap.to("#card", {
    keyframes: [
      { y: 100 },
      { y: -20 },
      { y: 20 },
      { y: -10 },
      { y: 10 },
      { y: 0 }
    ],
    duration: 0.7,
    ease: "none"
  });

  },[closed])
  return (
    <div className={` transition-all duration-300 h-screen backdrop-blur-[10px] top-0 z-90 top-10% fixed flex items-center justify-center w-full ${closed?'visible opacity-[1]':'invisible opacity-0'}`}>
    <button className="absolute top-[30px] right-[35px] rounded-full bg-green-500/20 text-white  p-1.5 shadow-[0px_0px_10px_white] hover:text-[gray] cursor-pointer z-1000" onClick={closeSignIn}><RiCloseLargeLine/></button>
    <div id='card' className={`flex items-center justify-center ${className}`}>
      
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="w-[600px] h-[600px] bg-green-500/20 blur-[160px] rounded-full" />
      </div>

      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={resetTransform}
        className="relative w-[420px] rounded-2xl p-8
        bg-white/1 backdrop-blur-2xl
        border border-green-400/40
        shadow-[0_0_40px_rgba(0,255,140,0.35)]
        transition-transform duration-200"
      >

        <div className="pointer-events-none absolute inset-0 rounded-2xl
          shadow-[inset_0_0_30px_rgba(0,255,140,0.2)]" />

        <h2 className="text-white text-2xl font-semibold mb-6">
          Welcome Back
        </h2>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Email or Username"
            className="w-full px-4 py-3 rounded-lg
            bg-white/5 border border-white/20
            text-white placeholder-white/50
            focus:outline-none focus:border-green-400"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-lg
            bg-white/5 border border-white/20
            text-white placeholder-white/50
            focus:outline-none focus:border-green-400"
          />
        </div>

        <button
          className="mt-6 w-full py-3 rounded-full
          bg-green-400 text-black font-bold
          hover:bg-green-300 transition cursor-pointer"
        >
          LOG IN
        </button>

        <div className="mt-4 flex justify-between text-sm text-white/60">
          <span className="cursor-pointer hover:text-white">
            Forgot password?
          </span>
          <span className="cursor-pointer hover:text-white">
            Create account
          </span>
        </div>
      </div>
    </div>
  </div>
  );
}
