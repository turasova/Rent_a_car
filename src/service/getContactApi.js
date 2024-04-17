 import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Notiflix from 'notiflix';



axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
 
export const getContactsThunk = createAsyncThunk(
    'contacts/getAllContacts',
    async (_, thunkAPI) => {
        try {
            const {data} = await axios('/contacts');
            return data;
        }
        catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const addContactThunk = createAsyncThunk(
    'contacts/getAddContacts',
   async (newContact, thunkAPI) => {
    try {
        const {data} = await axios.post('/contacts', newContact);
        Notiflix.Notify.success(`Contact added successfully`,
        {width: '400px',
        position: 'center-center',
        timeout: 1000,
        fontSize: '20px',});
        return data;
    }
    catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
}
);
    
export const deleteContactThunk = createAsyncThunk(
    'contacts/getDeleteContacts',
    async (contactId, thunkAPI) => {
    try {
        const {data} = await axios.delete(`/contacts/${contactId}`);
        Notiflix.Notify.warning(`Contact delete successfully`,
        {width: '400px',
        position: 'center-center',
        timeout: 1000,
        fontSize: '20px',});
return data;
    }
    catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
}
);
