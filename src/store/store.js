import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./productsSlice";
import cartReducer from "./cardSlice";
import wishlistReducer from "./wishlistSlice";

// Custom middleware to save cart to localStorage
const localStorageMiddleware = (store) => (next) => (action) => {
  const result = next(action);

  // Save cart to localStorage after every action
  if (action.type?.startsWith("cart/")) {
    const cart = store.getState().cart.items;
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  return result;
};

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});
