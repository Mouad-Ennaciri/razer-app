import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <div className="relative w-full group">
      {/* Bottom neon base (outside the card) */}
      <div className="pointer-events-none absolute -bottom-6 left-1/2 h-10 w-[88%] -translate-x-1/2 rounded-3xl bg-lime-400/70 blur-[10px] transition-opacity duration-300 group-hover:opacity-100 opacity-90" />
      <div className="pointer-events-none absolute -bottom-7 left-1/2 h-12 w-[92%] -translate-x-1/2 rounded-3xl bg-lime-500/35 blur-[18px] transition-all duration-300 group-hover:blur-[22px] group-hover:opacity-100 opacity-80" />

      {/* Card (responsive aspect like the reference image) */}
      <div
        className="
          relative aspect-255/319 w-full overflow-hidden rounded-[26px]
          border border-white/10 bg-zinc-900/35 backdrop-blur-xl
          shadow-[0_18px_40px_-18px_rgba(0,0,0,0.85)]
          transition-all duration-300
          group-hover:-translate-y-0.5
          group-hover:border-lime-500/80
          group-hover:shadow-[0_22px_55px_-22px_rgba(163,230,53,0.25)]
        "
      >
        {/* Glass highlight */}
        <div className="absolute inset-0 transition-opacity duration-300 pointer-events-none bg-linear-to-br from-white/20 via-white/5 to-transparent opacity-40 group-hover:opacity-55" />

        {/* Vignette */}
        <div className="absolute inset-0 pointer-events-none bg-linear-to-b from-black/10 via-black/10 to-black/35" />

        {/* Bottom lime fog inside the card */}
        <div className="pointer-events-none absolute -bottom-10 left-1/2 h-24 w-[120%] -translate-x-1/2 rounded-full bg-lime-500/45 blur-2xl transition-all duration-300 group-hover:bg-lime-500/55 group-hover:blur-[28px]" />

        <div className="pointer-events-none absolute inset-0 rounded-[26px] ring-1 ring-white/10" />

        {/* Image */}
        <div className="relative px-4 pt-6">
          <img
            src={product.image}
            alt={product.name}
            className="
              mx-auto h-[55%] w-full object-contain
              drop-shadow-[0_22px_30px_rgba(0,0,0,0.55)]
              transition-transform duration-300
              group-hover:-translate-y-1
            "
          />
        </div>

        {/* Bottom-left text */}
        <div className="absolute bottom-6 left-6">
          <h3 className="text-[28px] font-semibold leading-none text-white">
            {product.name}
          </h3>
          <p className="mt-2 text-[24px] font-semibold leading-none text-white/95">
            ${product.price}
          </p>
        </div>

        {/* CTA bottom-right (fixed centering) */}
        <Link
          to={`/products/${product.id}`}
          aria-label={`View ${product.name}`}
          className="
            group/cta absolute bottom-6 right-6
            h-11 w-11 hover:w-44
            overflow-hidden rounded-full
            bg-lime-400 text-black
            transition-all duration-300
            shadow-[0_10px_25px_-12px_rgba(163,230,53,0.9)]
            ring-1 ring-white/15
          "
        >
          {/* Icon layer: ABSOLUTE = always perfectly centered */}
          <span className="absolute inset-0 grid transition-opacity duration-300 place-items-center group-hover/cta:opacity-0">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M10 7l5 5-5 5"
                stroke="currentColor"
                strokeWidth="2.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>

          {/* Text layer: DOES NOT affect centering/layout while hidden */}
          <span className="absolute inset-y-0 flex items-center pr-6 font-semibold transition-opacity duration-300 opacity-0 left-11 whitespace-nowrap group-hover/cta:opacity-100">
            View Product
          </span>
        </Link>
      </div>
    </div>
  );
}
