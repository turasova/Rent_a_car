import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCars } from 'service/getCarsApi';

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

// export const addContactThunk = createAsyncThunk(
//     'contacts/getAddContacts',
//     async ({name,phone}, thunkApi) => {
//         try {
//             const contacts = await addContacts({name,phone})
//             return contacts
//         } catch (error) {
//             return thunkApi.rejectWithValue(error.message)

//         }
//     }
// );

// export const deleteContactThunk = createAsyncThunk(
//     'contacts/getDeleteContacts',
//     async (contactId, thunkApi) => {
//         try {
//             const contacts = await deleteContacts(contactId)
//             return contacts
//         } catch (error) {
//             return thunkApi.rejectWithValue(error.message)

//         }
//     }
// );

// export const signUpThunk = createAsyncThunk(
//     'auth/signUp',
//     async ({name,email,password}, thunkApi) => {
//         try {
//         const newUser= await registrationUser({name,email,password})
// 		return newUser
// 	} catch (error) {
// 		return thunkApi.rejectWithValue(error.message)
// 	}
// })

// export const loginThunk = createAsyncThunk(
//     'auth/login',
//     async ({email,password}, thunkApi) => {
//         try {
//         const authLoginUser = await loginUser({email,password})
// 		return authLoginUser
// 	} catch (error) {
// 		return thunkApi.rejectWithValue(error.message)
// 	}
// })

// export const logoutThunk = createAsyncThunk(
//     'auth/logout',
//     async (_, thunkApi) => {
//         try {
//         const exitUser = await logoutUser()
// 		return exitUser
// 	} catch (error) {
// 		return thunkApi.rejectWithValue(error.message)
// 	}
// })

// export const currentUserThunk = createAsyncThunk(
//     'current/user',
//     async (_,thunkApi) => {
//         const state = thunkApi.getState();
//         const persistedToken = state.auth.token;

//         if (persistedToken === null) {
//             console.log('no token')
//             return thunkApi.rejectWithValue('Unable to fetch user');
//         }

//         try {
//             return await currentUser()

//         } catch (error) {
//             return thunkApi.rejectWithValue(error.message)
//         }
//     }
// )
