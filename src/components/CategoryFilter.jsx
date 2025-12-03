export default function CategoryFilter({ selected, onChange }) {
  const categories = [
    { id: "all", name: "All Products", icon: "🏪" },
    { id: "electronics", name: "Electronics", icon: "💻" },
    { id: "fashion", name: "Fashion", icon: "👔" },
    { id: "books", name: "Books", icon: "📚" },
  ];

  return (
    <div className="bg-white shadow-md p-4 mb-6 rounded-lg">
      <div className="max-w-7xl mx-auto flex gap-3 overflow-x-auto">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => onChange(cat.id)}
            className={`px-6 py-3 rounded-lg font-semibold whitespace-nowrap transition ${
              selected === cat.id
                ? "bg-blue-500 text-white shadow-lg"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {cat.icon} {cat.name}
          </button>
        ))}
      </div>
    </div>
  );
}
