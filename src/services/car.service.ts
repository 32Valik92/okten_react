import {IRes} from '../types';
import {ICar, IPagination} from '../interfaces';
import {axiosService} from './axios.service';
import {urls} from '../constants';

// Сервіс ми переробили на клас, щоб було зручно викликати метод в методі
class CarService {

    //Метод для повернення всіх карів
    getAll(): IRes<IPagination<ICar[]>> {
        return axiosService.get(urls.cars.cars);
    }

    // Метод для створення машинки
    create(car: ICar): IRes<ICar> {
        return axiosService.post(urls.cars.cars, car);
    }

    // Метод для оновлення машинки
    updateById(id: number, car: ICar): IRes<ICar> {
        return axiosService.put(urls.cars.byId(id), car);
    }

    // Метод для видалення машинки
    deleteById(id: number): IRes<void> {
        return axiosService.delete(urls.cars.byId(id));
    }
}

export const carService = new CarService()