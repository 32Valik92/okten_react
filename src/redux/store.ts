import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {authReducer, carReducer} from "./slice";

const rootReducer = combineReducers({
    authReducer,
    carReducer
});

const setupStore = () => configureStore({
    reducer: rootReducer
});

// Наші типу, які повертають ф-ції
type RootState = ReturnType<typeof rootReducer>
type AppStore = ReturnType<typeof setupStore>
type AppDispatch = AppStore['dispatch']

export type {
    RootState,
    AppDispatch,
    AppStore
}

export {
    setupStore
}