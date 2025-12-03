import { useDispatch } from "react-redux";
import { updateQuantity, removeFromCart } from "../store/cardSlice";

export default function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md mb-3">
      <div className="text-5xl">{item.image}</div>

      <div className="flex-1">
        <h3 className="font-bold text-gray-800">{item.name}</h3>
        <p className="text-blue-600 font-semibold">${item.price}</p>
      </div>

      {/* Quantity Controls */}
      <div className="flex items-center gap-2">
        <button
          onClick={() =>
            dispatch(
              updateQuantity({ id: item.id, quantity: item.quantity - 1 })
            )
          }
          className="w-8 h-8 bg-gray-200 rounded-lg hover:bg-gray-300 font-bold"
        >
          -
        </button>
        <span className="w-12 text-center font-bold">{item.quantity}</span>
        <button
          onClick={() =>
            dispatch(
              updateQuantity({ id: item.id, quantity: item.quantity + 1 })
            )
          }
          className="w-8 h-8 bg-gray-200 rounded-lg hover:bg-gray-300 font-bold"
        >
          +
        </button>
      </div>

      {/* Total Price */}
      <div className="font-bold text-lg text-gray-800">
        ${(item.price * item.quantity).toFixed(2)}
      </div>

      {/* Delete Button */}
      <button
        onClick={() => dispatch(removeFromCart(item.id))}
        className="text-red-500 hover:text-red-700 text-xl"
      >
        🗑️
      </button>
    </div>
  );
}
