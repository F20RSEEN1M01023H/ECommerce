import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/cardSlice";
import { toggleWishlist } from "../store/wishlistSlice";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();
  const [showAdded, setShowAdded] = useState(false);

  // Check if product is in wishlist
  const isInWishlist = useSelector((state) =>
    state.wishlist.items.some((item) => item.id === product.id)
  );

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    setShowAdded(true);
    setTimeout(() => setShowAdded(false), 1000);
  };

  const handleToggleWishlist = () => {
    dispatch(toggleWishlist(product));
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
      {/* Product Image */}
      <div className="relative">
        <div className="text-8xl flex items-center justify-center h-48 bg-gradient-to-br from-gray-50 to-gray-100">
          {product.image}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={handleToggleWishlist}
          className={`absolute top-3 right-3 text-2xl transition ${
            isInWishlist ? "text-red-500" : "text-gray-300 hover:text-red-500"
          }`}
        >
          {isInWishlist ? "❤️" : "🤍"}
        </button>

        {/* Rating Badge */}
        <div className="absolute top-3 left-3 bg-yellow-400 text-yellow-900 px-2 py-1 rounded-md text-sm font-bold">
          ⭐ {product.rating}
        </div>
      </div>

      {/* Product Details */}
      <div className="p-4">
        <h3 className="font-bold text-lg text-gray-800 mb-2 truncate">
          {product.name}
        </h3>

        <div className="flex items-center justify-between mb-3">
          <span className="text-2xl font-bold text-slate-600">
            ${product.price}
          </span>
          <span className="text-sm text-gray-500">
            {product.stock} in stock
          </span>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          disabled={product.stock === 0}
          className={`w-full py-2 rounded-lg font-semibold transition ${
            product.stock === 0
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : showAdded
              ? "bg-yellow-500 text-white"
              : "bg-slate-800 text-white hover:bg-slate-900"
          }`}
        >
          {showAdded
            ? "✓ Added!"
            : product.stock === 0
            ? "Out of Stock"
            : "🛒 Add to Cart"}
        </button>
      </div>
    </div>
  );
}
