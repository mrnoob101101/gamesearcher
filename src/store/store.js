import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './root.reducer';
import createSagaMiddleware from 'redux-saga';
import { gamesSaga } from './main/games.sagas';
/*import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import autoMergeLevel3 from 'redux-persist/es/stateReconciler/autoMergeLevel2';*/

const saga = createSagaMiddleware();

/*const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel3
};

const persistedreducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedreducer,
  middleware: [saga],
});
saga.run(gamesSaga);*/

export const store = configureStore({
  reducer: rootReducer,
  middleware: [saga],
});
saga.run(gamesSaga);
