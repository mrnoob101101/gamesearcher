import { createSlice } from '@reduxjs/toolkit';

export const gamesSlice = createSlice({
  name: 'games',
  initialState: {
    gamesData: {},
    gamePageData: {},
    currentGameScreenshots: [],
    status: 'idle',
    currentPage: 1,
    isStrategyGenreChecked: false,
    isNintendoSwitchChecked: false,
  },
  reducers: {
    getGames(state, action) {
      state.currentPage = action.payload;
      state.status = 'loading';
      console.log(state.status);
    },
    getGamesSuccess(state, action) {
      state.status = 'success';
      state.gamesData = action.payload;
      console.log(state.status);
    },
    getGamesError(state, action) {
      state.status = 'error';
      console.log(action.payload);
    },
    getGamePage(state) {
      state.status = 'loading';
      console.log(state.status);
    },
    getGamePageSuccess(state, action) {
      state.status = 'success';
      state.gamePageData = action.payload;
      console.log('лог из саги', action.payload);
    },
    getGamePageError(state, action) {
      state.status = 'error';
      console.log(action.payload);
    },
    setGameScreenshots(state, action) {
      state.currentGameScreenshots = action.payload;
    },
    getGamesWithFilter(state, action) {
      /*reducer: (state, action) => {*/
      state.status = 'loading';
      state.isStrategyGenreChecked = action.payload;
      console.log('reducer', state.isStrategyGenreChecked);
    },
    /*prepare:
        (isStrategyGenreChecked) => {
          isStrategyGenreChecked = !isStrategyGenreChecked;
          console.log(isStrategyGenreChecked);
          return { payload: { isStrategyGenreChecked } };
        }*/
    /*},*/
    getGamesWithFilterSuccess(state, action) {
      state.status = 'success';
      console.log(state.status);
      state.gamesData = action.payload;
      console.log(action.payload);
    },
    getGamesWitchFiltersError(state, action) {
      state.status = 'error';
      console.log(action.payload);
    },
  },
});

export const {
  getGames,
  getGamesSuccess,
  getGamesError,
  getGamePage,
  getGamePageError,
  getGamePageSuccess,
  setGameScreenshots,
  getGamesWithFilter,
  getGamesWithFilterSuccess,
  getGamesWitchFiltersError,
} = gamesSlice.actions;
