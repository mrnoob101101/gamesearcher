import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import { getGames, getGamesError, getGamesSuccess } from './main/mainSlice';

const BASE_URL = 'https://api.rawg.io/api/';

function* workFetchGames(action) {
  const axiosFormatted = axios.create({
    baseURL: `${BASE_URL}games?key=58e43edf81094db9b034a89c52461039&page=${action.payload}`
  });
  try {
    const gamesFetch = yield call(() => axiosFormatted.get());
    console.log(gamesFetch.data);
    yield put(getGamesSuccess(gamesFetch.data));
  } catch (error) {
    yield put(getGamesError(error));
  }
}

function* gamesSaga() {
  yield takeEvery(getGames, workFetchGames);
}

export { gamesSaga };
