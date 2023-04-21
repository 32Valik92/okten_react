import {axiosService} from "./axiosService";
import {endingURL} from "../urls/urls";

const commentsService = {
    getAll: () => axiosService.get(endingURL.comments)
}

export {commentsService}