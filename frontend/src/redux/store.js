import { configureStore } from "@reduxjs/toolkit";
import authReducer from './authSlice'
import nationReducer from './nationSlice'

export default configureStore({
    reducer:{
        auth: authReducer,
        nations: nationReducer
    }
})