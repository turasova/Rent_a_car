
import { createSlice } from '@reduxjs/toolkit';
import {  currentUserThunk, loginThunk, logoutThunk, signUpThunk } from 'service/auth';

const authInitialState = {
    isLoggedIn: false,
    error: '',
    token: '',
    user: {name:null, email: null},
}
const handlePending = (state) => {
	state.isLoading = true
	state.error = ''
}

const handleRejected = (state, { payload }) => {
	state.isLoading = false
	state.error = payload
}



const handleRegistration = (state,{payload}) => {
    state.token = payload.token
    state.user = payload.user
    state.isLoading = false
    state.isLoggedIn = true
     state.error =''
}

const handleLogin = (state,{payload}) => {
    state.token = payload.token
    state.user = payload.user
    state.isLoading = false
    state.isLoggedIn = true
    state.error =''


}

const handleLogout = (state) => {
    state.user = { name: null, email: null }
    state.token = null
    state.isLoggedIn = false
     state.error =''
}
 const handleCurrent = (state,{payload}) => {
     state.user = { ...payload }
     state.isLoggedIn = true
 }
 


 const authSlice = createSlice({
    name: 'auth',
    initialState:authInitialState,
    extraReducers: (builder) => {
        builder
            .addCase(signUpThunk.pending, handlePending)
            .addCase(signUpThunk.fulfilled, handleRegistration)
            .addCase(signUpThunk.rejected, handleRejected)
            .addCase(loginThunk.pending, handlePending)
            .addCase(loginThunk.fulfilled, handleLogin)
            .addCase(loginThunk.rejected, handleRejected)
            .addCase(logoutThunk.pending, handlePending)
            .addCase(logoutThunk.fulfilled, handleLogout)
            .addCase(logoutThunk.rejected, handleRejected)
            .addCase(currentUserThunk.pending, handlePending)
            .addCase(currentUserThunk.fulfilled, handleCurrent)
         		
    }
})

export const authReducer = authSlice.reducer