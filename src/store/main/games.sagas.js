import axios from 'axios';
import { call, put, all, takeEvery } from 'redux-saga/effects';
import {
  getGameDetails,
  getGameDetailsError,
  getGameDetailsSuccess,
  getGames,
  getGamesError,
  getGamesSuccess,
  getGamesWitchFiltersError,
  getGamesWithFilter,
  getGamesWithFilterSuccess,
  getLastRequestedPage,
  getLastRequestedPageError,
  getLastRequestedPageSuccess,
  getPaginationPageWithRequestedQueryParams,
  getPaginationPageWithRequestedQueryParamsError,
  getPaginationPageWithRequestedQueryParamsSuccess,
  getSearchedGames,
  getSearchedGamesError,
  getSearchedGamesSuccess
} from './mainSlice';

const BASE_URL = 'https://api.rawg.io/api/';
const API_KEY = process.env.REACT_APP_RAWG_API_KEY;

function* workFetchGames({ payload: page }) {
  const axiosFormatted = axios.create({
    baseURL: `${BASE_URL}games?key=${API_KEY}&page=${page}`
  });
  try {
    const gamesFetch = yield call(() => axiosFormatted.get());
    yield put(getGamesSuccess(gamesFetch.data));
  } catch (error) {
    yield put(getGamesError(error));
  }
}

function* workFetchGameDetails(action) {
  const axiosFormatted = axios.create({
    baseURL: `${BASE_URL}games/${action.payload.gameID}?key=${API_KEY}`
  });
  try {
    const gamePageFetch = yield call(() => axiosFormatted.get());
    yield put(getGameDetailsSuccess(gamePageFetch.data));
  } catch (error) {
    yield put(getGameDetailsError(error));
  }
}

function* workFetchGamesWithFilter(action) {
  const params = {
    key: API_KEY
  };

  if (action.payload.selectedGenre === '') {
    delete params.genres;
    params.platforms = action.payload.selectedPlatform;
  } else {
    params.genres = action.payload.selectedGenre;
    params.platforms = action.payload.selectedPlatform;
  }

  if (action.payload.selectedPlatform === '') {
    delete params.platforms;
    params.genres = action.payload.selectedGenre;
  } else {
    params.platforms = action.payload.selectedPlatform;
  }

  if (
    action.payload.selectedGenre === '' &&
    action.payload.selectedPlatform === ''
  ) {
    delete params.genres;
    delete params.platforms;
  }

  try {
    const gamesWithFilterFetch = yield call(() =>
      axios.get('https://api.rawg.io/api/games', { params })
    );
    yield put(
      getGamesWithFilterSuccess(
        gamesWithFilterFetch.data,
        gamesWithFilterFetch.request.responseURL
      )
    );
  } catch (error) {
    yield put(getGamesWitchFiltersError(error));
  }
}

function* workFetchLastRequestedPage({ payload: lastRequestURL }) {
  const axiosFormatted = axios.create({
    baseURL: `${lastRequestURL}`
  });
  try {
    const lastPageFetch = yield call(() => axiosFormatted.get());
    yield put(getLastRequestedPageSuccess(lastPageFetch.data));
  } catch (error) {
    yield put(getLastRequestedPageError(error));
  }
}

function* workFetchPaginationPage(action) {
  const params = {
    page: action.payload.page
  };
  try {
    const paginationPageFetch = yield call(() =>
      axios.get(`${action.payload.paginationPageRequestURL}`, { params })
    );
    yield put(
      getPaginationPageWithRequestedQueryParamsSuccess(
        paginationPageFetch.data,
        paginationPageFetch.request.responseURL
      )
    );
  } catch (error) {
    yield put(getPaginationPageWithRequestedQueryParamsError(error));
  }
}

function* workFetchSearchedGames({ payload: inputValue }) {
  const params = {
    key: API_KEY,
    search: inputValue,
    search_precise: true,
    search_exact: true,
    ordering: 'rating'
  };
  try {
    const searchedGamesFetch = yield call(() =>
      axios.get('https://api.rawg.io/api/games', { params })
    );
    yield put(
      getSearchedGamesSuccess(
        searchedGamesFetch.data,
        searchedGamesFetch.request.responseURL
      )
    );
  } catch (error) {
    yield put(getSearchedGamesError(error));
  }
}

function* gamesSaga() {
  yield all([
    yield takeEvery(getGames, workFetchGames),
    yield takeEvery(getGameDetails, workFetchGameDetails),
    yield takeEvery(getGamesWithFilter, workFetchGamesWithFilter),
    yield takeEvery(getLastRequestedPage, workFetchLastRequestedPage),
    yield takeEvery(
      getPaginationPageWithRequestedQueryParams,
      workFetchPaginationPage
    ),
    yield takeEvery(getSearchedGames, workFetchSearchedGames)
  ]);
}

export { gamesSaga };
