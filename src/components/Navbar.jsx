export default function Navbar({
  cartCount,
  wishlistCount,
  onCartClick,
  searchQuery,
  setSearchQuery,
}) {
  return (
    <div className="bg-gradient-to-r from-slate-900 via-gray-500 to-slate-900 text-white p-4 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 flex-wrap">
        <div className="text-2xl font-bold">🛒 ShopCart</div>

        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="flex-1 max-w-md px-4 py-2 rounded-lg text-gray-200 focus:outline-none border border-white  focus:ring-2 focus:ring-white"
        />

        <div className="flex gap-4">
          <button
            onClick={onCartClick}
            className="relative px-4 py-2 bg-white text-slate-900 rounded-lg hover:bg-blue-50 transition font-semibold"
          >
            🛒 Cart
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>

          <button className="relative px-4 py-2 bg-white text-slate-900 rounded-lg hover:bg-purple-50 transition font-semibold">
            ❤️ Wishlist
            {wishlistCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center">
                {wishlistCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
