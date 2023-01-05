import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  colors: [],
  colorsPages: "",
  isColorsLoading: false,
  isError: false,
  httpErrorStatus: "",
};

const url = "https://reqres.in/api/products";

export const getFirstPageColors = createAsyncThunk(
  "colors/getFirstPageColors",
  async (color, thunkAPI) => {
    try {
      const response = await fetch(`${url}?page=1`);
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

export const getSecondPageColors = createAsyncThunk(
  "colors/getSecondPageColors",
  async (color, thunkAPI) => {
    try {
      const response = await fetch(`${url}?page=2`);
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
    [getFirstPageColors.pending]: (state, action) => {
      state.isColorsLoading = true;
    },
    [getFirstPageColors.fulfilled]: (state, action) => {
      state.colors = action.payload;
    },
    [getSecondPageColors.fulfilled]: (state, action) => {
      const currentState = current(state);
      state.colors = [...currentState.colors, ...action.payload];

      const colorsPerPage = 5;
      const numberOfPages = Math.ceil(state.colors.length / colorsPerPage);

      const colorsPages = Array.from({ length: numberOfPages }, (_, index) => {
        const start = index * colorsPerPage;
        return state.colors.slice(start, start + colorsPerPage);
      });

      state.colorsPages = colorsPages;
      state.isColorsLoading = false;
    },
    [getFirstPageColors.rejected]: (state, action) => {
      state.isError = true;
      state.httpErrorStatus = action.payload;
      state.isColorsLoading = false;
    },
    [getSecondPageColors.rejected]: (state, action) => {
      state.isError = true;
      state.httpErrorStatus = action.payload;
      state.isColorsLoading = false;
    },
  },
});

export default colorsSlice.reducer;
