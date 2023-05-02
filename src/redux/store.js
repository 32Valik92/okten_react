import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {characterReducer} from "./slices";

const rootReducer = combineReducers({
    characters: characterReducer
}); // Це точка спамна всіх редюсерів

const setupStore = () => configureStore({ // Повертаємо наше сховище у ф-ції, бо для TS так краще
    reducer: rootReducer
});

export {
    setupStore
}