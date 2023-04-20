import {axiosService} from "./axiosService";
import {endingURL} from "../urls/urls";

const commentsService = {
    getAll: () => axiosService(endingURL.comments)
}

export {commentsService}