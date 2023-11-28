import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  password: "",
};

export const userSlice = createSlice({
  name: "userRegisterReducer",
  initialState,
  reducers: {
    addUser: (state, action) => {
      const { name, email, password } = action.payload;
      // Actualizar el estado con los nuevos valores
      state.name = name;
      state.email = email;
      state.password = password;
    },
  },
});

export const { addUser } = userSlice.actions;

export default userSlice.reducer;
