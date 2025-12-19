import person from "../../assets/images/person-nbg.png";
import cirled from "../../assets/images/razer-controller.png";
import Slider from "../../Slider.jsx";
// import headphonesGray from "../assets/images/razer-headphones-gray.png";
import { RiArrowRightSLine, RiArrowLeftSLine } from "@remixicon/react";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

function HeroPart1() {
  return (
    <div className="flex flex-col gap-y-4 items-center justify-center">
      <RazerText />
      <Slider />
    </div>
  );
}
function RazerText() {
  const glow1Ref = useRef(null);
  const glow2Ref = useRef(null);
  const glow3Ref = useRef(null);
  const glow4Ref = useRef(null);
  const border1Ref = useRef(null);
  const border2Ref = useRef(null);
  const border3Ref = useRef(null);
  const razerTextRef = useRef(null);
  const bottomTextRef = useRef(null);
  const circledRef = useRef(null);
  const personRef = useRef(null);

  useEffect(() => {
    gsap.from(glow1Ref.current, {
      left: "-400px",
      top: "-300px",
      opacity: 0,
      duration: 1.5,
      ease: "power3.out",
    });

    gsap.from(glow2Ref.current, {
      left: "-200px",
      top: "600px",
      opacity: 0,
      duration: 1.5,
      ease: "power3.out",
      delay: 0.1,
    });

    gsap.from(glow3Ref.current, {
      right: "-400px",
      bottom: "-600px",
      opacity: 0,
      duration: 1.5,
      ease: "power3.out",
      delay: 0.2,
    });

    gsap.from(glow4Ref.current, {
      left: "-400px",
      bottom: "-600px",
      opacity: 0,
      duration: 1.5,
      ease: "power3.out",
      delay: 0.3,
    });

    gsap.from(border1Ref.current, {
      scale: 0,
      opacity: 0,
      duration: 1.2,
      ease: "back.out(1.7)",
      delay: 0.4,
    });

    gsap.from(border2Ref.current, {
      scale: 0,
      opacity: 0,
      duration: 1.2,
      ease: "back.out(1.7)",
      delay: 0.5,
    });

    gsap.from(border3Ref.current, {
      scale: 0,
      opacity: 0,
      duration: 1.2,
      ease: "back.out(1.7)",
      delay: 0.6,
    });

    gsap.from(razerTextRef.current, {
      y: -200,
      opacity: 0,
      duration: 1.3,
      ease: "power3.out",
      delay: 0.7,
    });

    gsap.from(bottomTextRef.current, {
      x: -300,
      opacity: 0,
      duration: 1.3,
      ease: "power3.out",
      delay: 0.8,
    });

    gsap.from(circledRef.current, {
      x: 300,
      rotation: 360,
      opacity: 0,
      duration: 1.4,
      ease: "power3.out",
      delay: 0.9,
    });

    gsap.from(personRef.current, {
      x: -400,
      scale: 0.5,
      opacity: 0,
      duration: 1.5,
      ease: "power3.out",
      delay: 1,
    });
  }, []);

  return (
    <div>
      <div
        ref={glow1Ref}
        className="absolute  w-100 h-100 bg-[rgba(253,64,12,0.8)] rounded-full blur-[200px] left-[-150px] -top-20"
      ></div>
      <div
        ref={glow2Ref}
        className="absolute w-260 h-100 bg-[#131313] rounded-full blur-[50px] left-[140px] top-[280px] z-10"
      ></div>
      <div
        ref={glow3Ref}
        className="absolute z-20 w-100 h-100 bg-[rgba(0,136,255,0.2)] rounded-full blur-[50px] right-[-150px] bottom-[-300px]"
      ></div>
      <div
        ref={glow4Ref}
        className="absolute pointer-events-none z-20 w-100 h-100 bg-[rgba(0,255,38,0.2)] rounded-full blur-[50px] left-[-150px] bottom-[-350px]"
      ></div>
      <div className="relative flex justify-center">
        <div className="absolute"></div>
        <div className="absolute"></div>
        <div
          ref={border1Ref}
          className="absolute  border border-[#b4e4b4] px-[545px] py-[225px] rounded-[220px] top-4"
        ></div>

        <div
          ref={border2Ref}
          className="absolute border border-[#b4e4b4] px-[490px] py-[180px] rounded-[180px] top-[63px]"
        ></div>

        <div
          ref={border3Ref}
          className="absolute border border-[#b4e4b4] px-[435px] py-[135px] rounded-[140px] top-[110px]"
        ></div>

        <span
          ref={razerTextRef}
          style={{ fontFamily: "Monoton" }}
          className="z-30 text-[170px] absolute top-[115px] text-[#b7de64]"
        >
          RAZER
        </span>
        <span
          ref={bottomTextRef}
          className="absolute top-[310px] left-[-120px] text-[#b7de64] z-50 text-5xl leading-[90px]"
        >
          You Need To <span className="block text-8xl">Explore</span>
        </span>
        <img
          ref={circledRef}
          src={cirled}
          className="absolute h-[140px] z-60 top-[60%] right-[1%] rotate-x-6"
        />
        <img
          ref={personRef}
          src={person}
          className="z-50 h-[540px] mt-[30%] ml-[20%]"
        />
      </div>
    </div>
  );
}

export default HeroPart1;
