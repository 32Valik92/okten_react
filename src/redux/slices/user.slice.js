import {createSlice} from "@reduxjs/toolkit";

let initialState = {
    users: []
}

const slice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        setUsers: (state, action) => {
            state.users = [...action.payload];
        }
    }
})

const {reducer: userReducer, actions} = slice;

const userActions = {
    ...actions
}

export {
    userReducer,
    userActions
}