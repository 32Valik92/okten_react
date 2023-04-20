import {axiosService} from "./axiosService";
import {endingURL} from "../urls/urls";

const todosService = {
    getAll: () => axiosService(endingURL.todos)
}

export {todosService}