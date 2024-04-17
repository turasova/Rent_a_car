import { configureStore } from "@reduxjs/toolkit";
import { filterSlice } from "./filterSlice";
import { contactsSlice } from "./contactsSlice";
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistStore,persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { authReducer } from "./authSlice";


const persistConfigAuth = {
    key: 'auth',
    storage,
    whitelist: ['token'],

}



export const store = configureStore({
    reducer: {
        contacts: contactsSlice.reducer,
        filter: filterSlice.reducer,
        auth: persistReducer(persistConfigAuth, authReducer )
       
    },
      middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoreActions:[FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER],
            }
        })
});

export const persistor = persistStore(store)

