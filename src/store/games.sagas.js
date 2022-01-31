import axios from 'axios';
import { call, put, all, takeEvery } from 'redux-saga/effects';
import {
  getGamePage,
  getGamePageSuccess,
  getGames,
  getGamesError,
  getGamesSuccess, getGamesWitchFiltersError, getGamesWithFilter, getGamesWithFilterSuccess
} from './main/mainSlice';

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

function* workFetchGamePage(action) {
  const axiosFormatted = axios.create({
    baseURL: `${BASE_URL}games/${action.payload.gameID}?key=58e43edf81094db9b034a89c52461039`
  });
  try {
    const gamePageFetch = yield call(() => axiosFormatted.get());
    console.log(gamePageFetch.data);
    yield put(getGamePageSuccess(gamePageFetch.data));
  } catch (error) {
    yield put(getGamesError(error));
  }
}

/*axios.get('https://api.rawg.io/api/games', {
    params: {
      key: '58e43edf81094db9b034a89c52461039',
      genres: 'strategy',
      platforms: '21',
      search: '',
      search_exact: true,
      search_precise: true,
      ordering: '-metacritic'
    }
  })
    .then(function(response) {
      console.log(response.data);
    })
    .catch(function(error) {
      console.log(error);
    });*/

/*function* workFetchGamesWithFilter(action) {
  try {
    const gamesWithFiltersFetch = yield call(() => axios.get('https://api.rawg.io/api/games', {
      params: {
        key: '58e43edf81094db9b034a89c52461039',
        genres: 'strategy', /!*action.payload.actionFetch*!/
        platforms: '21',
        page: 1,
        search: '',
        search_exact: true,
        search_precise: true,
        ordering: '-metacritic'
      }
    }));
    console.log(gamesWithFiltersFetch.data);
    yield put(getGamesWithFilterSuccess(gamesWithFiltersFetch.data));
  } catch (error) {
    yield put(getGamesWitchFiltersError(error));
  }
}*/


function* gamesSaga() {
  yield all([
    yield takeEvery(getGames, workFetchGames),
    yield takeEvery(getGamePage, workFetchGamePage)
    /*yield takeEvery(getGamesWithFilter, workFetchGamesWithFilter)*/
  ]);
}

export { gamesSaga };
