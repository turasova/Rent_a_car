import { createSlice } from "@reduxjs/toolkit";

const initialState = { value:''}

 export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        filterSet(state, action) {
            state.value= action.payload;
        }
    }
})

export const getFilter = state => state.filter.value;

export const { filterSet } = filterSlice.actions;
