//redux imports
import { createSlice } from "@reduxjs/toolkit";

const initialState = { tabs: "1", searchResult: "" };

const tabsSlice = createSlice({
  name: "tabs",
  initialState,
  reducers: {
    tabsHandler: (state, action) => {
      state.tabs = action.payload;
    },
    searchHandler: (state, action) => {
      // console.log("action.payload", action.payload);
      state.searchInput = action.payload;
    },
  },
});

export const { tabsHandler, searchHandler } = tabsSlice.actions;

export default tabsSlice.reducer;
