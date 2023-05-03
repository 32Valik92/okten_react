import {axiosUser} from "./axios.service";
import {placeholder} from "../constants";

const userService = {
    getAll: () => axiosUser.get(placeholder.users),
    createUser: (user) => axiosUser.post(placeholder.users, user)
}

export {
    userService
}