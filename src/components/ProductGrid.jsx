import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ProductCard from "./ProductCard";

export function ProductGrid({ products }) {
  const container = useRef();

  useGSAP(() => {
    // 1. We use .to instead of .from
    // 2. We use autoAlpha (handles both opacity and visibility)
    gsap.to(".product-card-wrapper", {
      y: 0,
      autoAlpha: 1, 
      duration: 0.8,
      stagger: 0.15, 
      ease: "power4.out",
      // We force the starting point here
      startAt: { y: 40, autoAlpha: 0 }
    });
  }, { scope: container, dependencies: [products] });

  return (
    <div ref={container} className="grid grid-cols-1 gap-6 mt-20 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((p) => (
        /* The "invisible" class is the secret sauce here */
        <div key={p.id} className="invisible product-card-wrapper">
          <ProductCard product={p} />
        </div>
      ))}
    </div>
  );
}