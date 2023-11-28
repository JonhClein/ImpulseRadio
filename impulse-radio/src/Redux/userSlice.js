import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  password: "",
};

export const userSliceRegister = createSlice({
  name: "userRegisterReducer",
  initialState,
  reducers: {
    registerUser: (state, action) => {
      const { name, email, password } = action.payload;
      console.log("la informacion del recuer de UserSLICE ES  " , name , email, password)
      // Actualizar el estado con los nuevos valores
      state.name = name;
      state.email = email;
      state.password = password;
    },
  },
});

export const { registerUser } = userSliceRegister.actions;

export default userSliceRegister.reducer;
