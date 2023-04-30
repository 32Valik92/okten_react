import {createStore} from "redux";
import {baseReducer} from "../reducers/base.reducers";

let store = createStore(baseReducer);

export {
    store
}