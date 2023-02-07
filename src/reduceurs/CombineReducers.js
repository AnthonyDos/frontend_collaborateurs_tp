import { configureStore } from "@reduxjs/toolkit";
import reducerLogin from "./auth/ReducerAuth";

const store = configureStore({
    reducer:{
        reducerLogin: reducerLogin
    },
    middleware:(getDefaultMiddleware)=> 
        getDefaultMiddleware({
            serializableCheck: false,
        })
})

export default store;