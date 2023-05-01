import axios from "axios";

import {baseUsersURL} from "../urls/urls";

const axiosService = axios.create({baseURL: baseUsersURL});

export {axiosService}