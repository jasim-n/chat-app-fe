import { configureStore } from "@reduxjs/toolkit";
import  userloggedReducer  from "../features/user/user";

export const store=configureStore({
    reducer:{
        logged:userloggedReducer,
    },
})