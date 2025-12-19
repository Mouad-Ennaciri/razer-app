import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Success() {
  const container = useRef();
  const [orderNumber] = useState(
    () => Math.floor(Math.random() * 90000) + 10000
  );

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      // 1. The main card fades in and scales up slightly
      tl.from(".success-card", {
        opacity: 0,
        y: 40,
        scale: 0.95,
        duration: 1,
      })
        // 2. The 🎉 icon pops in with a bounce
        .from(
          ".success-icon",
          {
            scale: 0,
            rotation: -20,
            duration: 0.8,
            ease: "back.out(2)",
          },
          "-=0.6"
        )
        // 3. The text elements slide up one by one
        .from(
          ".success-text-group > *",
          {
            opacity: 0,
            y: 20,
            duration: 0.7,
            stagger: 0.1,
          },
          "-=0.5"
        )
        // 4. Finally, the buttons fade in
        .from(
          ".success-buttons",
          {
            opacity: 0,
            y: 10,
            duration: 0.5,
          },
          "-=0.3"
        );
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      className="relative flex items-center justify-center min-h-screen px-4 py-16 text-white bg-black"
    >
      {/* Background glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute rounded-full -left-24 -top-24 h-80 w-80 bg-lime-500/10 blur-3xl" />
        <div className="absolute rounded-full -bottom-28 -right-28 h-96 w-96 bg-sky-500/10 blur-3xl" />
      </div>

      <div className="success-card relative w-full max-w-105 overflow-hidden rounded-[26px] border border-white/15 bg-zinc-900/35 p-8 text-center backdrop-blur-xl shadow-[0_30px_70px_-40px_rgba(0,0,0,0.9)]">
        {/* Success Icon */}
        <div className="flex items-center justify-center w-20 h-20 mx-auto mb-6 text-4xl rounded-full success-icon bg-lime-500/10 ring-1 ring-lime-500/20">
          🎉
        </div>

        <div className="success-text-group">
          <h1 className="mb-2 text-3xl font-bold text-white">
            Order <span className="text-lime-500">Successful</span>
          </h1>

          <p className="text-sm text-zinc-400">
            Order ID: <span className="text-white">#{orderNumber}</span>
          </p>

          <div className="w-full h-px my-8 bg-white/10" />

          <p className="mb-8 leading-relaxed text-zinc-400">
            Thank you for your purchase! We've sent a confirmation email with
            your tracking details.
          </p>
        </div>

        <div className="space-y-4 success-buttons">
          <Link
            to="/"
            className="block w-full rounded-full bg-lime-400 px-6 py-4 font-semibold text-black shadow-[0_20px_40px_-25px_rgba(163,230,53,0.5)] transition hover:brightness-110 active:scale-95"
          >
            Continue Shopping
          </Link>

          <Link
            to="/products"
            className="inline-block text-sm transition-all text-zinc-500 hover:text-lime-500 hover:underline hover:underline-offset-4 decoration-1"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}
