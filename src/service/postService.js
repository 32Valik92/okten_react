import {axiosService} from "./axiosService";
import {endingURL} from "../urls/urls";

const postService = {
    getAll: () => axiosService.get(endingURL.post),
    getById: (id) => axiosService.get(`${endingURL.post}/${id}`)
};

export {postService}