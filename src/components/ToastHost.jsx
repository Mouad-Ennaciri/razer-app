import { useEffect, useRef, useState } from "react";

export default function ToastHost() {
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    const onToast = (e) => {
      const msg = e?.detail?.message || "Added to cart";
      setMessage(msg);
      setOpen(true);

      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => setOpen(false), 1600);
    };

    window.addEventListener("toast", onToast);

    return () => {
      window.removeEventListener("toast", onToast);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <div className="fixed pointer-events-none right-10 top-20 z-9999">
      <div
        className={[
          "rounded-xl border border-white/10 bg-zinc-950/80 px-4 py-3 text-sm text-white shadow-lg backdrop-blur",
          "transition-all duration-300",
          open ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0",
        ].join(" ")}
      >
        <span className="text-lime-400">✓</span> {message}
      </div>
    </div>
  );
}
