import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: JSON.parse(localStorage.getItem("isLoggedIn")) || false,
};

const appSlice = createSlice({
  name: "appAuth",
  initialState,
  reducers: {
    login(state) {
          localStorage.setItem('isLoggedIn',JSON.stringify(true))
          return {...state,isLoggedIn:true}
    },
    logout(state) {
      localStorage.setItem("isLoggedIn", JSON.stringify(false));
      return { ...state, isLoggedIn: false };
    },
  },
});

export const { login,logout } = appSlice.actions;
// export const { logout } = appSlice.actions;
export default appSlice.reducer;
