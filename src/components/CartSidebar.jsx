import { useDispatch, useSelector } from "react-redux";
import { setCartOpen } from "../store/cardSlice";
import { selectCartStats } from "../utils/selectors";
import CartItem from "./CartItem";

export default function CartSidebar() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);
  const cartStats = useSelector(selectCartStats);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
      <div className="bg-white w-full max-w-2xl h-full overflow-y-auto p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Shopping Cart</h2>
          <button
            onClick={() => dispatch(setCartOpen(false))}
            className="text-3xl hover:text-gray-600"
          >
            ×
          </button>
        </div>

        {/* Empty State */}
        {cart.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🛒</div>
            <p className="text-gray-500">Your cart is empty</p>
          </div>
        ) : (
          <>
            {/* Cart Items */}
            <div className="mb-6">
              {cart.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>

            {/* Cart Summary */}
            <div className="border-t pt-4 space-y-2">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal:</span>
                <span>${cartStats.subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Tax (10%):</span>
                <span>${cartStats.tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Shipping:</span>
                <span>
                  {cartStats.shipping === 0 ? "FREE" : `$${cartStats.shipping}`}
                </span>
              </div>
              <div className="flex justify-between text-2xl font-bold text-gray-800 pt-2 border-t">
                <span>Total:</span>
                <span>${cartStats.total.toFixed(2)}</span>
              </div>

              {/* Checkout Button */}
              <button className="w-full bg-linear-to-r from-slate-900 to-gray-500 text-white py-3 rounded-lg font-bold text-lg hover:shadow-lg transition mt-4">
                Proceed to Checkout 🚀
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
