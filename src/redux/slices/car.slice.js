import {createSlice} from "@reduxjs/toolkit";

let initialState = {
    cars: []
}

const slice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        setCars: (state, action) => {
            state.cars = [...action.payload];
        }
    }
})

const {reducer: carReducer, actions} = slice;

const carActions = {
    ...actions
}

export {
    carReducer,
    carActions
}