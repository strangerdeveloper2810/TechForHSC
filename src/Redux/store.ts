import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleWare from "redux-saga";
import { rootSaga } from "./saga/rootSaga";
const sagaMiddleWare = createSagaMiddleWare();
export const store = configureStore({
  reducer: {},
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleWare),
});

sagaMiddleWare.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
