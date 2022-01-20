import { createSlice } from '@reduxjs/toolkit';

export const gamesSlice = createSlice({
  name: 'games',
  initialState: {
    gamesData: {},
    status: 'idle',
    currentPage: 1
  },
  reducers: {
    getGames(state, action) {
      /*state.gamesData = action.payload;*/
      state.currentPage = action.payload;
      state.status = 'loading';
      console.log(state.status);
    },
    getGamesSuccess(state, action) {
      state.status = 'success';
      state.gamesData = action.payload;
      console.log(state.status);
      console.log(state.gamesData);
    },
    getGamesError(state, action) {
      state.status = 'error';
      console.log(action.payload);
    }
  }
});

export const { getGames, getGamesSuccess, getGamesError } = gamesSlice.actions;
