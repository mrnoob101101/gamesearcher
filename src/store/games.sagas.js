import axios from 'axios';
import { call, put, all, takeEvery } from 'redux-saga/effects';
import {
  getGamePage,
  getGamePageSuccess,
  getGames,
  getGamesError,
  getGamesSuccess,
} from './main/mainSlice';

const BASE_URL = 'https://api.rawg.io/api/';

function* workFetchGames(action) {
  const axiosFormatted = axios.create({
    baseURL: `${BASE_URL}games?key=58e43edf81094db9b034a89c52461039&page=${action.payload}`,
  });
  try {
    const gamesFetch = yield call(() => axiosFormatted.get());
    console.log(gamesFetch.data);
    yield put(getGamesSuccess(gamesFetch.data));
  } catch (error) {
    yield put(getGamesError(error));
  }
}

function* workFetchGamePage(action) {
  const axiosFormatted = axios.create({
    baseURL: `${BASE_URL}games/${action.payload}?key=58e43edf81094db9b034a89c52461039`,
  });
  try {
    const gamePageFetch = yield call(() => axiosFormatted.get());
    console.log(gamePageFetch.data);
    yield put(getGamePageSuccess(gamePageFetch.data));
  } catch (error) {
    yield put(getGamesError(error));
  }
}

function* gamesSaga() {
  yield all([
    yield takeEvery(getGames, workFetchGames),
    yield takeEvery(getGamePage, workFetchGamePage),
  ]);
}

export { gamesSaga };
