import {createSlice } from "@reduxjs/toolkit";
import { addContactThunk, deleteContactThunk, getContactsThunk } from "service/getContactApi";



const handlePending = (state) => {
	state.isLoading = true
	state.error = ''
}

const handleRejected = (state, { payload }) => {
	state.isLoading = false
	state.error = payload
}
const handleFulfilled = (state) => {
	state.isLoading = false
}

const contactInitialState = {
    contacts: [],
    isLoading: false,
    error: null,
    
};

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState: contactInitialState,
    extraReducers: builder => {
        builder
            .addCase(getContactsThunk.fulfilled, (state, { payload }) => {
                state.contacts =payload
            })
             .addCase(addContactThunk.fulfilled, (state, { payload }) => {
                state.contacts.unshift(payload)
            })
             .addCase(deleteContactThunk.fulfilled,  (state, { payload }) => {
                state.contacts = state.contacts.filter(contact => contact.id !== payload.id)
            })
            .addMatcher((action) => action.type.endsWith('/pending'), handlePending)
            .addMatcher((action) => action.type.endsWith('/rejected'), handleRejected)
            .addMatcher((action)=> action.type.endsWith('/fulfilled'), handleFulfilled)
    }
})

export const getContactValue = state => state.contacts.contacts;
export const getIsLoading = state => state.contacts.isLoading;


