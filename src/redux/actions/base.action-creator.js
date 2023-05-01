import {GET_USERS, START_WORK} from "./base.action";
import {userService} from "../../services/user.service";

const showUsers = () => async (dispatch) => {
    dispatch({type: START_WORK});

    let response = await userService.getAll().then(value => value.data);

    dispatch({type: GET_USERS, payload: response});
}

export {showUsers}