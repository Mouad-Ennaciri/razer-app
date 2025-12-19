import { addToCart, decreaseQty } from "../utils/cart";

export default function CartItem({ item }) {
  const rowTotal = (item.price * item.qty).toFixed(2);

  return (
    <div className="flex items-center gap-4 group">
      {/* Thumbnail */}
      <div className="overflow-hidden h-14 w-14 rounded-2xl bg-white/10 ring-1 ring-white/10">
        <img
          src={item.image}
          alt={item.name}
          className="object-contain w-full h-full p-2"
          loading="lazy"
        />
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <p className="text-lg font-semibold truncate text-white/95">
          {item.name}
        </p>

        <div className="mt-0.5 text-sm text-white/60">
          ${Number(item.price).toFixed(2)}
        </div>

        <div className="mt-0.5 text-sm text-white/50">Quantity {item.qty}</div>

        {/* Qty controls (hidden by default to keep design clean) */}
        <div className="flex items-center gap-2 mt-2 transition opacity-0 group-hover:opacity-100">
          <button
            onClick={() => decreaseQty(item.id)}
            className="grid text-white transition rounded-full h-7 w-7 place-items-center bg-white/5 ring-1 ring-white/10 hover:bg-red-500"
            aria-label="Decrease quantity"
          >
            −
          </button>

          <span className="w-6 text-sm text-center text-white/80">
            {item.qty}
          </span>

          <button
            onClick={() => addToCart(item)}
            className="grid text-white transition rounded-full h-7 w-7 place-items-center bg-white/5 ring-1 ring-white/10 hover:bg-lime-400 hover:text-black"
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>
      </div>

      {/* Price on right */}
      <div className="text-right">
        <p className="text-xl font-semibold text-white/95">${rowTotal}</p>
      </div>
    </div>
  );
}
