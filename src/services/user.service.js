import {placeholder} from "../configs/urls";
import {axiosUser} from "./axios.service";

const userService = {
    createUser: (user) => axiosUser.post(placeholder.users, user),
    createComment: (comment) => axiosUser.post(placeholder.comments, comment)
}

export {
    userService
}