export default function OrderSummary({ cart }) {
  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
  const itemCount = cart.reduce((sum, i) => sum + i.qty, 0);

  return (
    <div>
      <div className="flex items-end justify-between">
        <span className="text-2xl font-semibold text-white/95">Total</span>
        <span className="text-2xl font-semibold text-white/95">
          ${total.toFixed(2)}
        </span>
      </div>

      <div className="mt-1 text-sm text-white/55">
        Total items: {itemCount}
      </div>
       </div>
  );
}