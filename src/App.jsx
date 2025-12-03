import { useDispatch, useSelector } from "react-redux";
import { setCategory, setSearchQuery } from "./store/productsSlice";
import { setCartOpen } from "./store/cardSlice";
import { selectFilteredProducts, selectCartStats } from "./utils/selectors";

// Import components
import Navbar from "./components/Navbar";
import CategoryFilter from "./components/CategoryFilter";
import ProductList from "./components/ProductList";
import CartSidebar from "./components/CartSidebar";

export default function App() {
  const dispatch = useDispatch();

  // Get state from Redux
  const products = useSelector(selectFilteredProducts);
  const cartStats = useSelector(selectCartStats);
  const wishlistCount = useSelector((state) => state.wishlist.items.length);
  const isCartOpen = useSelector((state) => state.cart.isOpen);
  const selectedCategory = useSelector(
    (state) => state.products.selectedCategory
  );
  const searchQuery = useSelector((state) => state.products.searchQuery);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar
        cartCount={cartStats.itemCount}
        wishlistCount={wishlistCount}
        onCartClick={() => dispatch(setCartOpen(true))}
        searchQuery={searchQuery}
        setSearchQuery={(query) => dispatch(setSearchQuery(query))}
      />

      <div className="max-w-7xl mx-auto p-6">
        <CategoryFilter
          selected={selectedCategory}
          onChange={(category) => dispatch(setCategory(category))}
        />

        {/* Products Grid */}
        {products.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <p className="text-gray-500 text-xl">No products found</p>
            <p className="text-gray-400 text-sm mt-2">
              Try searching or changing category
            </p>
          </div>
        ) : (
          <ProductList />
        )}
      </div>

      {/* Cart Sidebar */}
      {isCartOpen && <CartSidebar />}
    </div>
  );
}
