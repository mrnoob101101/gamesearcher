import { combineReducers } from '@reduxjs/toolkit';
import { gamesSlice } from './main/mainSlice';
import { favoriteSlice } from './favorite/favoriteSlice';

export const rootReducer = combineReducers({
  games: gamesSlice.reducer,
  favorite: favoriteSlice.reducer,
});
