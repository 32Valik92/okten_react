import {createSlice} from "@reduxjs/toolkit";

let initialState = {
    cars: [],
    carForUpdate: null,
    onChange: null
}

const slice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        setCars: (state, action) => {
            state.cars = [...action.payload];
        },
        setCarForUpdate: (state, action) => {
            state.carForUpdate = action.payload
        },
        setOnChange: state => {
            state.onChange = !state.onChange
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