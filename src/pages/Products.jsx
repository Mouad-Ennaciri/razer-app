import { useState } from "react";
import { products } from "../data/products";
import { ProductGrid } from "../components/ProductGrid";
import { CategoryTabs } from "../components/CategoryTabs";
import { Link } from "react-router-dom";

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("Mice");

  const filtered = products.filter((p) => p.category === activeCategory);

  return (
    <section
      className="min-h-screen px-20 py-16 bg-black bg-top bg-no-repeat bg-cover"
      style={{ backgroundImage: "url('/images/products-bg.png')" }}
    >
      <h1 className="mb-6 text-4xl font-bold text-center text-white">
        Featured <span className="text-lime-500">Products</span>
      </h1>

      <CategoryTabs active={activeCategory} onChange={setActiveCategory} />

      {/* FEATURED ONLY */}
      <ProductGrid products={filtered.slice(0, 4)} />

      <div className="flex justify-center mt-16">
        <Link
          to="/all-products"
          className="px-10 py-3 font-semibold text-black transition rounded-full bg-lime-500 hover:scale-105"
        >
          View More
        </Link>
      </div>
    </section>
  );
}
