import { createSelector } from "@reduxjs/toolkit";

// ⭐ MEMOIZED SELECTOR - Only recalculates when cart changes
export const selectCartStats = createSelector(
  [(state) => state.cart.items],
  (items) => {
    const subtotal = items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    const tax = subtotal * 0.1; // 10% tax
    const shipping = subtotal > 100 ? 0 : 10;
    const total = subtotal + tax + shipping;

    return {
      subtotal,
      tax,
      shipping,
      total,
      itemCount: items.length,
      totalItems: items.reduce((sum, item) => sum + item.quantity, 0),
    };
  }
);

// ⭐ FILTERED PRODUCTS SELECTOR
export const selectFilteredProducts = createSelector(
  [
    (state) => state.products.items,
    (state) => state.products.selectedCategory,
    (state) => state.products.searchQuery,
  ],
  (products, category, query) => {
    return products.filter((product) => {
      const matchesCategory =
        category === "all" || product.category === category;
      const matchesSearch = product.name
        .toLowerCase()
        .includes(query.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }
);
