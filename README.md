# ShopCart - A Modern E-Commerce App with React & Redux

![ShopCart Screenshot](/src/assets/screencapture-localhost-5173-2025-12-07-09_53_32.png)

---

![ShopCart Screenshot](/src/assets/screencapture-localhost-5173-2025-12-07-09_51_59.png)

---

## Overview

ShopCart is a responsive e-commerce application built with React and Redux Toolkit. It simulates an online shopping experience with product browsing, searching, cart management, and wishlist functionality. Data is static (hardcoded products) for simplicity, with cart persistence via localStorage. Ideal for learning state management, selectors, and UI components in React.

This project demonstrates clean code architecture, performance optimizations, and user-friendly design. No backend required – fully frontend-focused.

## Features

- **Product Catalog**: Displays 36+ products in categories (Electronics, Fashion, Books) with details like name, price, rating, stock, and emoji images.
- **Search & Filtering**: Real-time search by product name and category filters. Uses memoized selectors for efficient re-renders.
- **Wishlist**: Add/remove products with a toggle button. Live count in navbar.
- **Shopping Cart**:
  - Add products (increments quantity if already added).
  - Update quantity (+/- buttons).
  - Remove items or clear entire cart.
  - Persists to localStorage via custom Redux middleware.
- **Cart Summary**: Calculates subtotal, 10% tax, shipping (free if subtotal > $100, else $10), and total. Memoized for performance.
- **UI/UX Enhancements**:
  - Responsive layout with grid for products.
  - Navbar with search bar, cart/wishlist counters.
  - Sidebar cart modal.
  - Empty states for no products or empty cart.
  - Out-of-stock handling (disabled add button).
- **Performance**: Redux Toolkit slices, reducers, and createSelector for memoization – recalculates only on relevant state changes.

---

## Tech Stack

- **Frontend**: React (v18+)
- **State Management**: Redux Toolkit, React-Redux
- **Styling**: Tailwind CSS (inferred from class names; configure as needed)
- **Persistence**: LocalStorage
- **Other**: No external APIs – static data for demo.

## 📁 Project Structure

shopcart-ecommerce/
├── src/
│ ├── components/
│ │ ├── Navbar.jsx # Top navigation bar
│ │ ├── CategoryFilter.jsx # Category selection buttons
│ │ ├── ProductList.jsx # Product grid container
│ │ ├── ProductCard.jsx # Individual product display
│ │ ├── CartSidebar.jsx # Sliding cart panel
│ │ └── CartItem.jsx # Cart item component
│ ├── store/
│ │ ├── store.js # Redux store configuration
│ │ ├── productsSlice.js # Products state & data
│ │ ├── cardSlice.js # Cart state management
│ │ └── wishlistSlice.js # Wishlist state management
│ ├── utils/
│ │ └── selectors.js # Memoized Redux selectors
│ ├── App.jsx # Main app component
│ ├── main.jsx # App entry point
│ └── index.css # Global styles
├── package.json
└── README.md

---

## 👤 Author

- Engr.Muhammad Hammad Ashraf
