import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {carReducer, commentReducer, userReducer} from "./slices";

const rootReducer = combineReducers({
    carStore: carReducer,
    userStore: userReducer,
    commentStore: commentReducer
});

const setupStore = () => configureStore({
    reducer: rootReducer
});

export {setupStore}