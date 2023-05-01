import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";

import {baseReducer} from "../reducers/base.reducers";

let store = createStore(baseReducer, applyMiddleware(thunk));

export {
    store
}