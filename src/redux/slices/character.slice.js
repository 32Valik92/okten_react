import {createSlice} from "@reduxjs/toolkit";

let initialState = {
    characters: [],
    nextPage: null,
    prevPage: null
};

const slice = createSlice({ // Створили окрему комірку в нашому сховищі для героїв
    name: 'characterSlice',
    initialState, // Самі дані, якими ми будемо бавитися
    reducers: { // Аналог switch() в useReducer()
        // Та ф-ція для того, щоб закинути дані в сховище, тобто наповняємо наш initialState даними, які прийшли
        setCharacters: (state, action) => { // По суті state = initialState
            const {results, info: {next, prev}} = action.payload; // Витягнули з отриманих дані ті, що нам треба, бо ми не використовуємо все
            state.characters = results;
            state.prevPage = prev;
            state.nextPage = next;
        }
    }
});

const {reducer: characterReducer, actions} = slice; // Деструктуризація для зручності

const characterActions = {
    ...actions // Тут наш payload
}

export {
    characterReducer,
    characterActions
}