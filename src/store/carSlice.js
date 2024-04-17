import { createSlice } from '@reduxjs/toolkit';
import { getCarsThunk } from './thunks';

const handlePending = state => {
  state.isLoading = true;
  state.error = '';
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload.message;
};
const handleFulfilled = state => {
  state.isLoading = false;
};

const carInitialState = {
  cars: [],
  isLoading: false,
  error: null,
};

const carsSlice = createSlice({
  name: 'cars',
  initialState: carInitialState,
  extraReducers: builder => {
    builder
      .addCase(getCarsThunk.fulfilled, (state, { payload }) => {
        state.cars = payload;
      })
      //   .addCase(addContactThunk.fulfilled, (state, { payload }) => {
      //     state.advert.unshift(payload);
      //   })
      //   .addCase(deleteContactThunk.fulfilled, (state, { payload }) => {
      //     state.advert = state.advert.filter(car => car.id !== payload.id);
      //   })
      .addMatcher(action => action.type.endsWith('/pending'), handlePending)
      .addMatcher(action => action.type.endsWith('/rejected'), handleRejected)
      .addMatcher(
        action => action.type.endsWith('/fulfilled'),
        handleFulfilled
      );
  },
});

export const carsReducer = carsSlice.reducer;
