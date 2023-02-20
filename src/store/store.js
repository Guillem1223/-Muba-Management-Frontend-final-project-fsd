import { configureStore } from "@reduxjs/toolkit";
import registerSlice from "./slices/register/registerSlice";

export const store = configureStore({
  reducer: {
    register: registerSlice,
  },
});
