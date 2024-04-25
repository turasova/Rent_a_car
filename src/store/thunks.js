import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  fetchAllCars,
  fetchCars,
  fetchCarsFilter,
  fetchCarsId,
} from 'service/getCarsApi';

export const getAllCarsThunk = createAsyncThunk(
  'cars/getAllCars',
  async (_, thunkApi) => {
    try {
      const data = await fetchAllCars();
      console.log(data);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const getCarsThunk = createAsyncThunk(
  'cars/getCars',
  async ({ page, limit }, thunkApi) => {
    try {
      const data = await fetchCars({ page, limit });
      console.log(data);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
export const getFilterThunk = createAsyncThunk(
  'cars/getFilter',
  async ({ filter }, thunkApi) => {
    try {
      if (filter.length !== 0) {
        const data = await fetchCarsFilter({ filter });
        console.log(data);
        return data;
      } else {
        return [];
      }
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

// export const getLocationThunk = createAsyncThunk(
//   'advert/getLocationCars',
//   async ({ location }, thunkApi) => {
//     try {
//       const data = await fetchCarsLocation({ location });
//       console.log(data);
//       return data;
//     } catch (error) {
//       return thunkApi.rejectWithValue(error.message);
//     }
//   }
// );

export const addFavoriteCar = createAsyncThunk(
  'cars/addFavorite',
  async ({ _id }, thunkAPI) => {
    try {
      const data = await fetchCarsId({ _id });
      console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteFavoriteCar = createAsyncThunk(
  'cars/removeFavorite',
  async (newFavorites, thunkAPI) => {
    try {
      return newFavorites;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
