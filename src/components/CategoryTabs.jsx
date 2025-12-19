export function CategoryTabs({ active, onChange }) {
  const categories = ["Mice", "Keyboards", "Controllers"];

  return (
    <div className="flex justify-center gap-4 mb-10">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={`px-5 py-2 rounded-full border transition text-sm font-medium
${
  active === cat
    ? "bg-lime-500 text-black border-lime-500"
    : "bg-zinc-900 text-zinc-300 border-zinc-700 hover:border-lime-500"
}`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
