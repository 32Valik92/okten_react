import {axiosService} from "./axiosService";
import {endingURL} from "../urls/urls";

const albumsService = {
    getAll: () => axiosService.get(endingURL.albums)
}

export {albumsService}