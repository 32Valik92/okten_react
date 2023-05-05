import axios from "axios";

import {baseURLCar} from "../constants";

const axiosService = axios.create({baseURL: baseURLCar});

export {
    axiosService
}