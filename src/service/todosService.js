import {axiosService} from "./axiosService";
import {endingURL} from "../urls/urls";

const todosService = {
    getAll: () => axiosService.get(endingURL.todos)
}

export {todosService}