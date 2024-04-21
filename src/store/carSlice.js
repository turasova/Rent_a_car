import { createSlice } from '@reduxjs/toolkit';
import {
  addFavoriteCar,
  deleteFavoriteCar,
  getCarsThunk,
  getLocationThunk,
} from './thunks';

const handlePending = state => {
  state.isLoading = true;
  state.error = '';
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};
const handleFulfilled = state => {
  state.isLoading = false;
};

const carInitialState = {
  cars: [],
  filteredCars: [],
  favorites: [],
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
        state.filteredCars = [];
      })
      .addCase(getLocationThunk.fulfilled, (state, { payload }) => {
        state.filteredCars = payload;
      })
      .addCase(addFavoriteCar.fulfilled, (state, { payload }) => {
        state.favorites = [...state.favotites, ...payload];
      })
      .addCase(deleteFavoriteCar.fulfilled, (state, { payload }) => {
        state.favorites = payload;
      })

      .addMatcher(action => action.type.endsWith('/pending'), handlePending)
      .addMatcher(action => action.type.endsWith('/rejected'), handleRejected)
      .addMatcher(
        action => action.type.endsWith('/fulfilled'),
        handleFulfilled
      );
  },
});

export const carsReducer = carsSlice.reducer;
export const getIsLoading = state => state.cars.isLoading;
