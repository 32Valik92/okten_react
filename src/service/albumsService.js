import {axiosService} from "./axiosService";
import {endingURL} from "../urls/urls";

const albumsService = {
    getAll: () => axiosService(endingURL.albums)
}

export {albumsService}