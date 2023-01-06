import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  colors: [],
  colorsPages: "",
  isColorsLoading: false,
  isHttpError: false,
  httpErrorStatus: "",
};

const url = "https://reqres.in/api/products/?per_page=12";

export const getAllColors = createAsyncThunk(
  "colors/getAllColors",
  async (color, thunkAPI) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        return thunkAPI.rejectWithValue(response.status);
      }
      const data = await response.json();

      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      console.log(error);
    }
  }
);

const colorsSlice = createSlice({
  name: "colors",
  initialState,
  reducers: {},
  extraReducers: {
    [getAllColors.pending]: (state, action) => {
      state.isColorsLoading = true;
    },
    [getAllColors.fulfilled]: (state, action) => {
      state.colors = action.payload;

      const colorsPerPage = 5;
      const numberOfPages = Math.ceil(state.colors.length / colorsPerPage);

      const colorsPages = Array.from({ length: numberOfPages }, (_, index) => {
        const start = index * colorsPerPage;
        return state.colors.slice(start, start + colorsPerPage);
      });

      state.colorsPages = colorsPages;
      state.isColorsLoading = false;
    },
    [getAllColors.rejected]: (state, action) => {
      state.isHttpError = true;
      state.httpErrorStatus = action.payload;
      state.isColorsLoading = false;
    },
  },
});

export default colorsSlice.reducer;
