const initState = {
    isLoading: false,
    users: []
};

const baseReducer = (state = initState, action) => {

    switch (action.type) {
        case 'START_WORK':
            return {...state, isLoading: true};
        case 'GET_USERS':
            return {...state, isLoading: false, users: [...action.payload]};
        default:
            return state;
    }
}

export {
    baseReducer
}