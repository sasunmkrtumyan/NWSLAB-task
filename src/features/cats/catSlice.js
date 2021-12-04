import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchCatsFunction } from "./catAPI";

const initialState = {
  value: null,
  status: "idle",
};

export const fetchCats = createAsyncThunk(
  "category/fetchCats",
  async ({ id, limit }) => {
    const response = await fetchCatsFunction({ id, limit });
    return response.data;
  }
);

export const catsSlice = createSlice({
  name: "cats",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCats.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCats.fulfilled, (state, actions) => {
        state.status = "idle";
        state.value = actions.payload;
      });
  },
});

export default catsSlice.reducer;
