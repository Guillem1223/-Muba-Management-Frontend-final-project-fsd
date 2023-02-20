import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  nombre_user: "",
  email: "",
  password: "",
  telefono: "",
  role: "",
};

export const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    setNombre_user: (state, action) => {
      state.nombre_user = action.payload;
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
    setRole: (state, action) => {
      state.role = action.payload;
    },
  },
});

export const { setNombre_user, setEmail, setPassword, setTelefono, setRole } =
  registerSlice.actions;

export default registerSlice.reducer;
