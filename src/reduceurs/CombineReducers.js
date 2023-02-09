import { configureStore } from "@reduxjs/toolkit";
import reducerLogin from "./auth/ReducerAuth";
import reducerUserId from "./user/ReducerUser";
import reducerListCollaborater from "./listCollaborater/ReducerListCollaborateur";

const store = configureStore({
    reducer:{
        reducerLogin: reducerLogin,
        reducerUserId: reducerUserId,
        reducerListCollaborater: reducerListCollaborater
    },
    middleware:(getDefaultMiddleware)=> 
        getDefaultMiddleware({
            serializableCheck: false,
        })
})

export default store;