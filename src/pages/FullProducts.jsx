import { useState } from "react";
import { products } from "../data/products";
import { ProductGrid } from "../components/ProductGrid";
import { CategoryTabs } from "../components/CategoryTabs";
import { Link } from "react-router-dom";

export default function FullProducts() {
  const [activeCategory, setActiveCategory] = useState("Mice");

  const filtered = products.filter((p) => p.category === activeCategory);

  return (
    <section className="min-h-screen px-20 py-16 text-white bg-black">
      {/* Updated Link with hover effects */}
      <Link
        to="/"
        className="inline-block mb-6 transition-all text-lime-500 hover:underline hover:underline-offset-4 decoration-2"
      >
        ← Back to Home
      </Link>

      <h1 className="mb-6 text-4xl font-bold text-center">
        All <span className="text-lime-500">Products</span>
      </h1>

      <CategoryTabs active={activeCategory} onChange={setActiveCategory} />
      <ProductGrid products={filtered} />
    </section>
  );
}
