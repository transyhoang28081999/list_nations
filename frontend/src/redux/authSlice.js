import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        login: {
            currentUser: null,
            isLoading: false,
            error: false
        },
        register: {
            isLoading: false,
            error: false,
            success: false
        },
        logout: {
            isLoading: false,
            error: false
        }
    },
    reducers: {
        loginStart: state => {
            state.login.isLoading = true
        },
        loginSuccess: (state, action) => {
            state.login.isLoading = false
            state.login.currentUser = action.payload
            state.login.error = false
        },
        loginFailed: state => {
            state.login.isLoading = false
            state.login.error = true
        },
        registerStart: state => {
            state.register.isLoading = true
        },
        registerSuccess: state => {
            state.register.isLoading = false
            state.register.error = false
            state.register.success = true
        },
        registerFailed: state => {
            state.register.isLoading = false
            state.register.error = true
            state.register.success = false
        },
        logoutStart: state => {
            state.logout.isLoading = true
        },
        logoutSuccess: state => {
            state.logout.isLoading = false
            state.login.currentUser = null
            state.logout.error = false
        },
        logoutFailed: state => {
            state.logout.isLoading = false
            state.logout.error = true
        }
    }
})

export const {
    loginStart,
    loginSuccess,
    loginFailed,
    registerStart,
    registerSuccess,
    registerFailed,
    logoutStart,
    logoutSuccess,
    logoutFailed
} = authSlice.actions;

export default authSlice.reducer;