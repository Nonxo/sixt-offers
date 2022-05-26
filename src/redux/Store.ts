import createSagaMiddleware from "redux-saga";

import rootReducer from "./reducers"
import {rootSaga} from "./saga/"
import {configureStore} from "@reduxjs/toolkit";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
})

sagaMiddleware.run(rootSaga)

export function getStoreWithState(preloadedState?: RootState) {
    return configureStore({ reducer: rootReducer, middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware), preloadedState });
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch