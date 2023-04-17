import axios from "axios";
import {baseURL, baseURLPlaceholder} from "../configs/urls";

const axiosService = axios.create({baseURL});
const axiosUser = axios.create({baseURL: baseURLPlaceholder});
export {
    axiosService,
    axiosUser
}