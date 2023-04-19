import {AxiosResponse} from "axios";

export type IRes<T> = Promise<AxiosResponse<T>> // Щоб описати тип для Promise
