import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./silces/CartSlice";

export const store = configureStore({
    reducer : {
        cart : CartSlice,
    }
})