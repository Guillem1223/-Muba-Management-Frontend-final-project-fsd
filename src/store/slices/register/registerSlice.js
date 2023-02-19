import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  password: "",
  telefono: "",
};

export const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setTelefono: (state, action) => {
      state.telefono = action.payload;
    },
  },
});

export const { setName, setEmail, setPassword, setTelefono } =
  registerSlice.actions;

export default registerSlice.reducer;
