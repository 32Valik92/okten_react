import {createSlice} from "@reduxjs/toolkit";

let initialState = {
    comments: []
}

const slice = createSlice({
    name: 'commentSlice',
    initialState,
    reducers: {
        setComments: (state, action) => {
            state.comments = [...action.payload];
        },
        addComment: (state, action) => {
            state.comments.push(action.payload)
        }
    }
})

const {reducer: commentReducer, actions} = slice;

const commentActions = {
    ...actions
}

export {
    commentReducer,
    commentActions
}