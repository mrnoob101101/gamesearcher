import { createSlice } from '@reduxjs/toolkit';

export const gamesSlice = createSlice({
  name: 'games',
  initialState: {
    gamesData: {},
    gamePageData: {},
    currentGameScreenshots: [],
    status: 'idle',
    currentPage: 1,
    lastRequestURL: '',
    selectedGenre: '',
    selectedPlatform: '',
    isFiltersOpen: false
  },
  reducers: {
    getGames(state, action) {
      state.currentPage = action.payload;
      state.status = 'loading';
      state.selectedPlatform = 'none';
      state.selectedGenre = 'none';
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
    getLastRequestedPage(state) {
      state.status = 'loading';
      console.log(state.status);
    },
    getLastRequestedPageSuccess(state, action) {
      state.status = 'success';
      state.gamesData = action.payload;
      console.log(state.status);
    },
    getLastRequestedPageError(state, action) {
      state.status = 'error';
      console.log(action.payload);
    },
    setGameScreenshots(state, action) {
      state.currentGameScreenshots = action.payload;
    },
    getGamesWithFilter: {
      reducer: (state, action) => {
        state.status = 'loading';
        state.selectedGenre = action.payload.selectedGenre;
        state.selectedPlatform = action.payload.selectedPlatform;
        state.currentPage = 1;
      },
      prepare: (selectedGenre, selectedPlatform) => {
        return { payload: { selectedGenre, selectedPlatform } };
      }
    },
    getGamesWithFilterSuccess: {
      reducer: (state, action) => {
        state.status = 'success';
        console.log(state.status);
        state.gamesData = action.payload.gamesData;
        state.lastRequestURL = action.payload.requestURL;
        console.log(action.payload);
      },
      prepare: (gamesData, requestURL) => {
        return { payload: { gamesData, requestURL } };
      }
    },
    getGamesWitchFiltersError(state, action) {
      state.status = 'error';
      console.log(action.payload);
    },
    getPaginationPageWithRequestedQueryParams: {
      reducer: (state, action) => {
        state.status = 'loading';
        console.log(state.status);
        state.currentPage = action.payload.page;
      },
      prepare: (paginationPageRequestURL, page) => {
        return { payload: { paginationPageRequestURL, page } };
      }
    },
    getPaginationPageWithRequestedQueryParamsSuccess: {
      reducer: (state, action) => {
        state.status = 'success';
        console.log(state.status);
        state.gamesData = action.payload.gamesData;
        state.lastRequestURL = action.payload.lastRequestURL;

        console.log(action.payload);
      },
      prepare: (gamesData, lastRequestURL) => {
        return { payload: { gamesData, lastRequestURL } };
      }
    },
    getPaginationPageWithRequestedQueryParamsError(state, action) {
      state.status = 'error';
      console.log(action.payload);
    },
    setIsFiltersOpen(state, action) {
      state.isFiltersOpen = action.payload;
    }
  }
});

export const {
  getGames,
  getGamesSuccess,
  getGamesError,
  getGamePage,
  getGamePageError,
  getGamePageSuccess,
  getLastRequestedPage,
  getLastRequestedPageSuccess,
  getLastRequestedPageError,
  setGameScreenshots,
  getGamesWithFilter,
  getGamesWithFilterSuccess,
  getGamesWitchFiltersError,
  getPaginationPageWithRequestedQueryParams,
  getPaginationPageWithRequestedQueryParamsSuccess,
  getPaginationPageWithRequestedQueryParamsError,
  setIsFiltersOpen
} = gamesSlice.actions;
