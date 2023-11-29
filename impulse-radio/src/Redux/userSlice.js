import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  password: "",
  valueLogin : false,
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

    loginUser : (state , action)=>{
      console.log("El valor del logon es el reducer es " , action.payload)
      const value = action.payload;
      state.valueLogin = value;
    }
  },
});

export const { registerUser , loginUser} = userSliceRegister.actions;

export default userSliceRegister.reducer;
