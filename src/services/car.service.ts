import {IRes} from "../types/res.type";
import {ICar} from "../interfaces/car.interface";
import {carsAxiosService} from "./axios.service";
import {urls} from "../constants/urls";

const carService = {
    getAll: (): IRes<ICar[]> => carsAxiosService.get(urls.carsAPI.cars),
    create: (car: ICar): IRes<ICar> => carsAxiosService.post(urls.carsAPI.cars, car),
    updateById: (id: number, car: ICar): IRes<ICar> => carsAxiosService.put(urls.carsAPI.byId(id), car),
    deleteById: (id: number): IRes<void> => carsAxiosService.delete(urls.carsAPI.byId(id))
}

export {
    carService
}