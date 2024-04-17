import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Notiflix from 'notiflix';


axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};


export const signUpThunk = createAsyncThunk(
    'auth/signUp',
   async (newUser, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/signup', newUser);
        token.set(data.token);
        return data;
    } catch (error) {
      Notiflix.Notify.failure(`We're sorry, something went wrong`,
      {width: '400px',
        position: 'center-center',
        timeout: 1000,
        fontSize: '20px',});
        return thunkAPI.rejectWithValue(error.message);
    }
}
);

export const loginThunk = createAsyncThunk(
    'auth/login',
   async (logInUser, thunkAPI) => {
    try {
        const {data} = await axios.post('/users/login', logInUser);
        token.set(data.token);
        return data;
    } catch (error) {
      Notiflix.Notify.failure(`You entered an incorrect login or password`,
        {
          width: '400px',
        
        position: 'center-center',
        timeout: 1000,
        fontSize: '20px',});
        return thunkAPI.rejectWithValue(error.message);
    }
}
);

export const logoutThunk = createAsyncThunk(
    'auth/logout',
   async (_, thunkAPI) => {
    try {
      const {data}= await axios.post('/users/logout');
      token.unset();
      return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
}
);
export const currentUserThunk = createAsyncThunk(
    'auth/getCurrentUser',
    async (_,thunkApi) => {
        const state = thunkApi.getState();
        const persistedToken = state.auth.token;

        if (persistedToken === null) {
           
            return thunkApi.rejectWithValue('Unable to fetch user');
        }
          token.set(persistedToken);  
        try {
           const {data} = await axios.get('/users/current');
             return data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message)
        }
    }
)
