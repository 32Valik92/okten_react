import {axiosComment, axiosUser} from "./axios.service";
import {placeholder} from "../constants";

const commentService = {
    getAll: () => axiosComment.get(placeholder.comments),
    createComment: (comment) => axiosUser.post(placeholder.comments, comment)
}

export {
    commentService
}