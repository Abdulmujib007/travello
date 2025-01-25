import { configureStore } from "@reduxjs/toolkit";
import appSlice from './helper/appSlice'

export const store = configureStore({
    reducer:{
     appAuth : appSlice
    }
})