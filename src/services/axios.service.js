import axios from "axios";

import {baseURLCar, baseURLPlaceholder} from "../constants";

const axiosService = axios.create({baseURL: baseURLCar});
const axiosUser = axios.create({baseURL: baseURLPlaceholder});
const axiosComment = axios.create({baseURL: baseURLPlaceholder});

export {
    axiosService,
    axiosUser,
    axiosComment
}