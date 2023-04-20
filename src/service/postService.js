import {axiosService} from "./axiosService";
import {endingURL} from "../urls/urls";

const postService = {
    getAll: () => axiosService(endingURL.post)
};

export {postService}