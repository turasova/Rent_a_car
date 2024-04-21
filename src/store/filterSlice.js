import { createSlice } from '@reduxjs/toolkit';

const initialState = { favorites: [] };

export const filterFavoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    filterSet(state, action) {
      state.favorites = action.payload;
    },
    addFavorites: (state, action) => {
      state.favorites.push(action.payload);
    },
    deleteFavorites: (state, action) => {
      state.favorites = state.favorites.filter(
        favorite => favorite.id !== action.payload.id
      );
    },
  },
});

export const getFilter = state => state.filter.favorite;

export const { filterSet, addFavorites, deleteFavorites } =
  filterFavoritesSlice.actions;

export default filterFavoritesSlice.reducer;
