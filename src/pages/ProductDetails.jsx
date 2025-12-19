import { useEffect, useMemo, useState, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { products } from "../data/products";
import { addToCart, getCart } from "../utils/cart";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function ProductDetails() {
  const { id } = useParams();
  const container = useRef();

  // 1. Find product (memoized)
  const product = useMemo(() => {
    return products.find((p) => p.id === Number(id));
  }, [id]);

  // 2. State
  const [inCart, setInCart] = useState(false);

  // 3. GSAP Animations & Parallax
  useGSAP(
    () => {
      if (!product) return;

      // --- ENTRANCE TIMELINE ---
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.from(".back-link", { x: -20, opacity: 0, duration: 0.8 })
        .from(".detail-card", { scale: 0.9, opacity: 0, duration: 1 }, "-=0.4")
        .from(
          ".detail-info > *",
          { y: 30, opacity: 0, duration: 0.8, stagger: 0.1 },
          "-=0.6"
        );

      // --- PARALLAX MOUSE EFFECT ---
      const card = container.current.querySelector(".detail-card");
      const img = container.current.querySelector(".detail-card img");

      if (card && img) {
        const handleMouseMove = (e) => {
          const { clientX, clientY } = e;
          const { left, top, width, height } = card.getBoundingClientRect();

          // Calculate mouse position relative to center (-0.5 to 0.5)
          const xPos = (clientX - left) / width - 0.5;
          const yPos = (clientY - top) / height - 0.5;

          // Apply 3D Effect
          gsap.to(img, {
            x: xPos * 40,
            y: yPos * 40,
            rotationY: xPos * 15,
            rotationX: -yPos * 15,
            duration: 0.6,
            ease: "power2.out",
          });
        };

        const resetImage = () => {
          gsap.to(img, {
            x: 0,
            y: 0,
            rotationX: 0,
            rotationY: 0,
            duration: 1.2,
            ease: "elastic.out(1, 0.75)",
          });
        };

        card.addEventListener("mousemove", handleMouseMove);
        card.addEventListener("mouseleave", resetImage);

        // Cleanup listeners inside the hook
        return () => {
          card.removeEventListener("mousemove", handleMouseMove);
          card.removeEventListener("mouseleave", resetImage);
        };
      }
    },
    { scope: container, dependencies: [id] }
  );

  // 4. Sync inCart state
  useEffect(() => {
    if (!product) return;

    const sync = () => {
      const exists = getCart().some((i) => i.id === product.id);
      setInCart(exists);
    };

    sync();
    window.addEventListener("cart-updated", sync);
    window.addEventListener("storage", sync);

    return () => {
      window.removeEventListener("cart-updated", sync);
      window.removeEventListener("storage", sync);
    };
  }, [product]);

  // 5. Handlers
  const handleAddToCart = () => {
    if (!product) return;
    addToCart(product);
    setInCart(true);
    window.dispatchEvent(
      new CustomEvent("toast", { detail: { message: `${product.name} added` } })
    );
  };

  // 6. Early return
  if (!product) {
    return (
      <section className="flex items-center justify-center min-h-screen font-sans text-white bg-black">
        <div className="text-center">
          <p className="mb-4 text-zinc-500">Product not found</p>
          <Link to="/products" className="text-lime-500 hover:underline">
            Back to Products
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={container}
      className="min-h-screen px-24 py-16 text-white bg-black"
    >
      {/* Back Button */}
      <Link
        to="/all-products"
        className="inline-flex items-center mb-10 transition-all back-link text-lime-500 hover:underline hover:underline-offset-4 decoration-2"
      >
        ← Back to Products
      </Link>

      <div className="grid items-center grid-cols-2 gap-16">
        {/* Left Side: Image Card with 3D Perspective */}
        <div
          className="relative flex items-center justify-center p-12 overflow-hidden border shadow-2xl detail-card rounded-3xl border-zinc-700 bg-zinc-900/80 backdrop-blur"
          style={{ perspective: "1000px" }}
        >
          <img
            src={product.image}
            alt={product.name}
            className="object-contain w-full h-105 pointer-events-none drop-shadow-[0_30px_50px_rgba(0,0,0,0.7)]"
            style={{ transformStyle: "preserve-3d" }}
          />
        </div>

        {/* Right Side: Details */}
        <div className="detail-info">
          <h1 className="mb-4 text-5xl font-bold tracking-tight">
            {product.name}
          </h1>

          <p className="max-w-md mb-8 text-lg leading-relaxed text-zinc-400">
            Next-gen architecture featuring ultra-low latency and
            hyper-responsive feedback loops. Built for the most demanding
            virtual environments.
          </p>

          <div className="mb-10 text-4xl font-bold text-lime-500">
            ${product.price}
          </div>

          <div className="flex items-center gap-6">
            {inCart ? (
              <Link
                to="/cart"
                className="inline-flex items-center justify-center rounded-full bg-zinc-800 px-12 py-4 font-semibold text-white ring-1 ring-lime-500/50 transition-all hover:scale-105 hover:bg-zinc-700 hover:shadow-[0_0_30px_rgba(163,230,53,0.2)]"
              >
                View in Cart
              </Link>
            ) : (
              <button
                onClick={handleAddToCart}
                className="rounded-full bg-lime-500 px-12 py-4 font-semibold text-black transition-all hover:scale-105 hover:shadow-[0_15px_35px_rgba(163,230,53,0.4)]"
              >
                Add to Cart
              </button>
            )}
          </div>

          {/* Feature Badges */}
          <div className="grid grid-cols-2 gap-4 pt-10 mt-12 border-t border-white/10">
            <div className="flex items-center gap-2 text-sm text-zinc-500">
              <span className="text-lg text-lime-500">✦</span> 2-Year Warranty
            </div>
            <div className="flex items-center gap-2 text-sm text-zinc-500">
              <span className="text-lg text-lime-500">✦</span> Global Shipping
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
