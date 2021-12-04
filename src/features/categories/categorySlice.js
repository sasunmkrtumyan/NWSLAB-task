import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchCategoriesFunction } from "./categoryAPI";

const initialState = {
  value: null,
  status: "idle",
  selectedCategory: null,
};

export const fetchCategories = createAsyncThunk(
  "category/fetchCategories",
  async () => {
    const response = await fetchCategoriesFunction();
    return response.data;
  }
);

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    selectCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCategories.fulfilled, (state, actions) => {
        state.status = "idle";
        state.value = actions.payload;
      });
  },
});

export const { selectCategory } = categorySlice.actions;

export default categorySlice.reducer;
