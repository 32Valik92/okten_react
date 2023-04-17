import axios from "axios";
import {baseURL} from "../configs/urls.placeholder";

const axiosUser = axios.create({baseURL});

export {
    axiosUser
}