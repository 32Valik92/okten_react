import axios from "axios";

import {lessonFourBaseURL} from "../urls/urls";

const axiosService = axios.create({baseURL: lessonFourBaseURL})

export {
    axiosService
}