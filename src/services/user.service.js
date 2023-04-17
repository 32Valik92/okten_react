import {placeholder} from "../configs/urls.placeholder";
import {axiosUser} from "./placeholder.service";

const userService = {
    createUser: (user) => axiosUser.post(placeholder.users, user),
    createComment: (comment) => axiosUser.post(placeholder.comments, comment)
}

export {
    userService
}