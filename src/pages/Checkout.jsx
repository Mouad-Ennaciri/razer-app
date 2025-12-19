import { Link, useNavigate } from "react-router-dom";
import { clearCart } from "../utils/cart";

export default function Checkout() {
  const navigate = useNavigate();

  const handleBack = (e) => {
    e.preventDefault();
    if (window.history.length > 1) navigate(-1);
    else navigate("/cart");
  };

  const submitOrder = (e) => {
    e.preventDefault();
    clearCart();
    navigate("/success");
  };

  return (
    <section className="relative min-h-screen px-20 py-16 text-white bg-black">
      {/* Background glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute rounded-full -left-24 -top-24 h-80 w-80 bg-orange-400/10 blur-3xl" />
        <div className="absolute rounded-full -bottom-28 -right-28 h-96 w-96 bg-lime-400/10 blur-3xl" />
      </div>

      {/* Back Button (Outside the card for consistency) */}
      <button
        onClick={handleBack}
        className="inline-flex items-center mb-10 transition-all text-lime-500 hover:underline hover:underline-offset-4 decoration-2"
      >
        ← Back to Cart
      </button>

      <div className="flex flex-col items-center">
        <h1 className="mb-10 text-4xl font-bold">
          Confirm <span className="text-lime-500">Order</span>
        </h1>

        {/* Card */}
        <div className="relative w-full max-w-120 overflow-hidden rounded-[26px] border border-white/15 bg-zinc-900/35 backdrop-blur-xl shadow-[0_30px_70px_-40px_rgba(0,0,0,0.9)]">
          {/* Inner tints */}
          <div className="absolute inset-0 pointer-events-none bg-linear-to-br from-white/5 via-zinc-900/40 to-lime-500/10" />
          <div className="absolute inset-0 pointer-events-none bg-linear-to-b from-white/5 via-transparent to-black/25 opacity-60" />

          <form onSubmit={submitOrder} className="relative p-8">
            {/* Section: Shipping */}
            <div className="space-y-4">
              <p className="text-sm font-semibold tracking-wider uppercase text-white/85">
                Shipping Details
              </p>
              <Input placeholder="Full Name" required />
              <Input placeholder="Email Address" type="email" required />

              <div className="grid grid-cols-2 gap-4">
                <Input placeholder="City" required />
                <Input placeholder="State/Province" required />
              </div>
            </div>

            {/* Section: Payment */}
            <div className="mt-8 space-y-4">
              <p className="text-sm font-semibold tracking-wider uppercase text-white/85">
                Payment Method
              </p>
              <Select defaultValue="credit">
                <option value="credit" className="text-white bg-zinc-900">
                  💳 Credit Card
                </option>
                <option value="paypal" className="text-white bg-zinc-900">
                  🅿️ PayPal
                </option>
                <option value="cod" className="text-white bg-zinc-900">
                  💵 Cash on Delivery
                </option>
              </Select>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="mt-10 w-full rounded-full bg-lime-400 px-6 py-4 text-center text-lg font-semibold text-black shadow-[0_20px_40px_-25px_rgba(163,230,53,0.6)] transition hover:brightness-110 active:scale-[0.98]"
            >
              Place Order
            </button>

            {/* Terms with your new Underline Style */}
            <div className="mt-6 text-xs text-center text-white/40">
              By placing your order, you agree to our{" "}
              <Link
                to="/terms"
                className="text-white/60 hover:text-lime-500 hover:underline hover:underline-offset-2 decoration-1"
              >
                terms & conditions
              </Link>
              .
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

/* ---------- UI Helpers ---------- */

function Input(props) {
  return (
    <input
      {...props}
      className="w-full px-4 py-3 text-sm text-white transition border outline-none rounded-xl border-white/10 bg-white/5 placeholder-white/30 focus:border-lime-400/60 focus:ring-1 focus:ring-lime-400/20"
    />
  );
}

function Select({ children, ...props }) {
  return (
    <div className="relative">
      <select
        {...props}
        className="w-full px-4 py-3 text-sm text-white transition border outline-none appearance-none rounded-xl border-white/10 bg-white/5 focus:border-lime-400/60 focus:ring-1 focus:ring-lime-400/20"
      >
        {children}
      </select>
      {/* Custom Arrow Icon because appearance-none hides the default one */}
      <div className="absolute inset-y-0 flex items-center pointer-events-none right-4 text-white/40">
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </div>
  );
}
