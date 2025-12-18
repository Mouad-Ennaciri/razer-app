import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCart } from "../utils/cart";
import CartItem from "../components/CartItem";
import OrderSummary from "../components/OrderSummary";

export default function Cart() {
  const [cart, setCart] = useState(() => getCart());


  useEffect(() => {
    const refresh = () => setCart(getCart());
    window.addEventListener("cart-updated", refresh);
    window.addEventListener("storage", refresh);
    return () => {
      window.removeEventListener("cart-updated", refresh);
      window.removeEventListener("storage", refresh);
    };
  }, []);

  const isEmpty = cart.length === 0;

  return (
    <section className="relative min-h-screen px-20 py-16 text-white bg-black">

      <Link
        to="/"
        className="inline-flex items-center mb-10 transition-all text-lime-500 hover:underline hover:underline-offset-4 decoration-2"
      >
        ← Back to Home
      </Link>

      <div className="flex flex-col items-center">
        <h1 className="mb-10 text-4xl font-bold">
          Your <span className="text-lime-500">Cart</span>
        </h1>

        {/* Card */}
        <div className="relative w-full max-w-120 overflow-hidden rounded-[26px] border border-white/15 bg-zinc-900/35 backdrop-blur-xl shadow-[0_30px_70px_-40px_rgba(0,0,0,0.9)]">
          {/* Inner tint overlays */}
          <div className="absolute inset-0 pointer-events-none bg-linear-to-br from-orange-500/10 via-zinc-900/40 to-sky-500/10" />
          <div className="absolute inset-0 pointer-events-none bg-linear-to-b from-white/5 via-transparent to-black/25 opacity-60" />

          <div className="relative p-8">
            {/* Items List */}
            <div className="space-y-6">
              {isEmpty ? (
                <div className="py-10 text-center">
                  <p className="mb-6 text-zinc-400">Your cart is feeling a bit light.</p>
                  <Link
                    to="/products"
                    className="inline-flex px-8 py-3 font-semibold text-black transition rounded-full bg-lime-500 hover:scale-105"
                  >
                    Browse Products
                  </Link>
                </div>
              ) : (
                cart.map((item) => <CartItem key={item.id} item={item} />)
              )}
            </div>

            {/* Checkout Section */}
            {!isEmpty && (
              <>
                <div className="w-full h-px my-8 bg-white/10" />
                <OrderSummary cart={cart} />

                <Link
                  to="/checkout"
                  className="mt-8 block w-full rounded-full bg-lime-400 px-6 py-4 text-center font-semibold text-black shadow-[0_20px_40px_-25px_rgba(163,230,53,0.6)] transition hover:brightness-110 active:scale-[0.98]"
                >
                  Proceed to Checkout
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}