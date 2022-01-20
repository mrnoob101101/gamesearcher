import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './root.reducer';
import createSagaMiddleware from 'redux-saga';
import { gamesSaga } from './games.sagas';

const saga = createSagaMiddleware();
export const store = configureStore({
  reducer: rootReducer,
  middleware: [saga],
});
saga.run(gamesSaga);
