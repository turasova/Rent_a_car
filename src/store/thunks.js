import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCars, fetchCarsId, fetchCarsLocation } from 'service/getCarsApi';

export const getCarsThunk = createAsyncThunk(
  'advert/getAllCars',
  async (_, thunkApi) => {
    try {
      const data = await fetchCars();
      console.log(data);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const getLocationThunk = createAsyncThunk(
  'advert/getLocationCars',
  async ({ location }, thunkApi) => {
    try {
      const data = await fetchCarsLocation({ location });
      console.log(data);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

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
