// src/redux/reducer/search/slice.js
import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    query: "",
    filteredData: [],
    isSearching: false,
  },
  reducers: {
    setSearchQuery(state, action) {
      state.query = action.payload;
    },
    setFilteredData(state, action) {
      state.filteredData = action.payload;
    },
    setIsSearching(state, action) {
      state.isSearching = action.payload;
    },
    clearSearch(state) {
      state.query = "";
      state.filteredData = [];
      state.isSearching = false;
    },
  },
});

export const {
  setSearchQuery,
  setFilteredData,
  setIsSearching,
  clearSearch,
} = searchSlice.actions;

export const selectSearch = (state) => state.search;

export default searchSlice.reducer;
