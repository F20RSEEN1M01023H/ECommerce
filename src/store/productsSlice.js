import { createSlice } from "@reduxjs/toolkit";

// Products data
const PRODUCTS = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 99,
    category: "electronics",
    image: "🎧",
    rating: 4.5,
    stock: 15,
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 199,
    category: "electronics",
    image: "⌚",
    rating: 4.8,
    stock: 8,
  },
  {
    id: 3,
    name: "Laptop Stand",
    price: 49,
    category: "electronics",
    image: "💻",
    rating: 4.2,
    stock: 20,
  },
  {
    id: 4,
    name: "Mechanical Keyboard",
    price: 129,
    category: "electronics",
    image: "⌨️",
    rating: 4.7,
    stock: 12,
  },
  {
    id: 5,
    name: "Denim Jacket",
    price: 79,
    category: "fashion",
    image: "🧥",
    rating: 4.4,
    stock: 10,
  },
  {
    id: 6,
    name: "Running Shoes",
    price: 89,
    category: "fashion",
    image: "👟",
    rating: 4.6,
    stock: 15,
  },
  {
    id: 7,
    name: "Backpack",
    price: 59,
    category: "fashion",
    image: "🎒",
    rating: 4.3,
    stock: 18,
  },
  {
    id: 8,
    name: "Sunglasses",
    price: 39,
    category: "fashion",
    image: "🕶️",
    rating: 4.1,
    stock: 25,
  },
  {
    id: 9,
    name: "JavaScript Book",
    price: 45,
    category: "books",
    image: "📚",
    rating: 4.9,
    stock: 30,
  },
  {
    id: 10,
    name: "Design Patterns",
    price: 55,
    category: "books",
    image: "📖",
    rating: 4.7,
    stock: 20,
  },
  {
    id: 11,
    name: "React Handbook",
    price: 35,
    category: "books",
    image: "📘",
    rating: 4.8,
    stock: 25,
  },
  {
    id: 12,
    name: "Python Guide",
    price: 42,
    category: "books",
    image: "📕",
    rating: 4.6,
    stock: 22,
  },
];

const initialState = {
  items: PRODUCTS, // ⭐ Start with products already loaded!
  selectedCategory: "all",
  searchQuery: "",
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
});

export const { setCategory, setSearchQuery } = productsSlice.actions;
export default productsSlice.reducer;
