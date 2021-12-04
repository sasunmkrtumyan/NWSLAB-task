import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "../features/categories/categorySlice";
import catsReducer from "../features/cats/catSlice";

export const store = configureStore({
  reducer: {
    category: categoryReducer,
    cats: catsReducer,
  },
});
