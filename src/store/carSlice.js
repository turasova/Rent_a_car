import { createSlice } from '@reduxjs/toolkit';
import {
  addFavoriteCar,
  deleteFavoriteCar,
  getAllCarsThunk,
  getCarsThunk,
  getFilterThunk,
} from './thunks';
//import { addFavorites } from './filterSlice';

const handlePending = state => {
  state.isLoading = true;
  state.error = '';
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};
// const handleFulfilled = state => {
//   state.isLoading = false;
// };

const carInitialState = {
  cars: [],
  filteredCars: [],
  favorites: [],
  isLoading: false,
  error: null,
};

// const carsSlice = createSlice({
//   name: 'cars',
//   initialState: carInitialState,
//   reducers: {
//     addFavorites: (state, { payload }) => {
//       const addFavoritesCar = state.cars.find(car => car._id === payload._id);
//       if (addFavoritesCar) {
//         state.favorites.push(addFavoritesCar);
//       }
//     },
//     deleteFavorites: (state, { payload }) => {
//       const indexDelete = state.favorites.findIndex(
//         car => car._id === payload._id
//       );
//       if (indexDelete !== -1) {
//         state.favorites.splice(indexDelete, 1);
//       }
//     },
//     setFilter(state, { payload }) {
//       state.filter = payload;
//     },
//     resetFilter: state => {
//       state.filter = null;
//     },
//   },
//   extraReducers: builder => {
//     builder
//       .addCase(getCarsThunk.fulfilled, handleFulfilled)
//       .addMatcher(action => action.type.endsWith('/pending'), handlePending)
//       .addMatcher(action => action.type.endsWith('/rejected'), handleRejected);
//   },
// });
const carsSlice = createSlice({
  name: 'cars',
  initialState: carInitialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getCarsThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.cars = payload;
        state.filteredCars = [];
      })
      .addCase(getCarsThunk.pending, handlePending)
      .addCase(getCarsThunk.rejected, handleRejected)

      .addCase(getAllCarsThunk.fulfilled, (state, { payload }) => {
        state.cars = payload;
      })
      .addCase(getAllCarsThunk.pending, handlePending)
      .addCase(getAllCarsThunk.rejected, handleRejected)

      .addCase(getFilterThunk.fulfilled, (state, { payload }) => {
        state.filteredCars = payload;
      })
      .addCase(getFilterThunk.pending, handlePending)
      .addCase(getFilterThunk.rejected, handleRejected)

      .addCase(addFavoriteCar.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.favorites = [...state.favorites, ...payload];
      })
      .addCase(addFavoriteCar.pending, handlePending)
      .addCase(addFavoriteCar.rejected, handleRejected)

      .addCase(deleteFavoriteCar.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.favorites = payload;
      })
      .addCase(deleteFavoriteCar.pending, handlePending)
      .addCase(deleteFavoriteCar.rejected, handleRejected);

    // .addMatcher(action => action.type.endsWith('/pending'), handlePending)
    // .addMatcher(action => action.type.endsWith('/rejected'), handleRejected)
    // .addMatcher(
    //   action => action.type.endsWith('/fulfilled'),
    //   handleFulfilled
    // );
  },
});

// const carsSlice = createSlice({
//   name: 'cars',
//   initialState: carInitialState,
//   extraReducers: builder => {
//     builder
//       .addCase(getCarsThunk.fulfilled, (state, { payload }) => {
//         state.cars = payload;
//         state.filteredCars = [];
//       })
//       .addCase(getLocationThunk.fulfilled, (state, { payload }) => {
//         state.filteredCars = payload;
//       })
//       .addCase(addFavoriteCar.fulfilled, (state, { payload }) => {
//         state.favorites = [...state.favorites, ...payload];
//       })
//       .addCase(deleteFavoriteCar.fulfilled, (state, { payload }) => {
//         state.favorites = payload;
//       })

//       .addMatcher(action => action.type.endsWith('/pending'), handlePending)
//       .addMatcher(action => action.type.endsWith('/rejected'), handleRejected)
//       .addMatcher(
//         action => action.type.endsWith('/fulfilled'),
//         handleFulfilled
//       );
//   },
// });
//export const { addFavorites, deleteFavorites, setFilter, resetFilter } =
// carsSlice.actions;

export const carsReducer = carsSlice.reducer;
export const getIsLoading = state => state.cars.isLoading;
