import { configureStore } from "@reduxjs/toolkit";
import colorsReducer from "./features/colorsSlice";
import appReducer from "./features/appSlice";

export const store = configureStore({
  reducer: {
    colors: colorsReducer,
    app: appReducer,
  },
});
