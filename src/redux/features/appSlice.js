import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentPage: "",
  tableView: "list",
  searchQuery: "",
  isModal: false,
  isColorModal: false,
  isError: false,
  colorModalData: "",
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
      console.log(state.currentPage);
    },
    changeTableView: (state, action) => {
      state.tableView = action.payload;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    setIsModal: (state, action) => {
      state.isModal = action.payload;
    },
    setIsColorModal: (state, action) => {
      state.isColorModal = action.payload;
    },
    setIsError: (state, action) => {
      state.isError = action.payload;
    },
    setColorModalData: (state, action) => {
      state.colorModalData = action.payload;
    },
  },
});

export const {
  setCurrentPage,
  changeTableView,
  setSearchQuery,
  setIsModal,
  setIsColorModal,
  setIsError,
  setColorModalData,
} = appSlice.actions;

export default appSlice.reducer;
