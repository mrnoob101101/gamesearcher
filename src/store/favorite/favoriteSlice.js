import { createSlice, current } from '@reduxjs/toolkit';

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: {
    favoriteGames: [],
  },
  reducers: {
    addToFavorite(state, action) {
      console.log('State', current(state));
      console.log('favoritePayload', action.payload);
      state.favoriteGames = state.favoriteGames.concat(action.payload);
    },
    deleteFromFavorite(state, action) {
      state.favoriteGames = state.favoriteGames.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const { addToFavorite, deleteFromFavorite } = favoriteSlice.actions;
