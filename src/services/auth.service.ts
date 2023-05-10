import {AxiosResponse} from "axios";

import {IAuth, ITokens, IUser} from "../interfaces";
import {IRes} from "../types";
import {axiosService} from "./axios.service";
import {urls} from "../constants";

class AuthService {
    // Логіка по логінація та запису наших токенів. Записувати ми будемо до локалСторіджу
    private readonly accessKey = 'access'; // private - тільки  в межах класу, readonly - щоб не можна було змінити
    private readonly refreshKey = 'refresh'; // private - тільки  в межах класу, readonly - щоб не можна було змінити

    // Метод для реєстрації юзера, відправки його на API
    register(user: IAuth): IRes<IUser> {
        return axiosService.post(urls.auth.register, user)
    }

    // Метод для логінації
    async login(user: IAuth): Promise<IUser> { // Promise<void> бо використовували axiosService, який звертаэться до axios і завжди повертає Promise<Т>
        const {data}: AxiosResponse<ITokens> = await axiosService.post(urls.auth.login, user); // Робить запит на логінацію. Результатом будуть пара ключів
        this.setTokens(data); // Викликали метод, який запушив в локалСторідж наші щойно отримані пару ключів
        const {data: me}: AxiosResponse<IUser> = await this.me(); // Робимо запит на самого себе
        return me; // Повертаємо інформацію про користувачач, який залогінився
    }

    // Метод для рефрешу, тобто отримання через refresh нової пари ключів
    async refresh(): Promise<void> {
        const refreshToken = this.getRefreshToken(); // Дістали з локалСторіджа

        //Якщо в нас локалСторідж пустий, то кинути помилку, що Refresh token isn't exists
        if (!refreshToken) {
            throw new Error("Refresh token isn't exists")
        }

        // Передали на посилання наш ПОКИ НЕЗГОРІВШИЙ refresh токен
        const {data}: AxiosResponse<ITokens> = await axiosService.post(urls.auth.refresh, {refresh: refreshToken});
        this.setTokens(data); // Перезаписали в локалСторідж нашу нову пару ключів
    }

    // Метод для отримання залогіненого користувача
    me(): IRes<IUser> {
        return axiosService.get(urls.auth.me);
    }

    // Метод для запису наших ключів до локалСторіджу
    private setTokens({access, refresh}: ITokens): void {
        localStorage.setItem(this.accessKey, access);
        localStorage.setItem(this.refreshKey, refresh);
    }

    // Метод для витягання access token з локал сторіджа
    getAccessToken(): string {
        return localStorage.getItem(this.accessKey);
    }

    // Метод для витягання refresh token з локал сторіджа
    private getRefreshToken(): string {
        return localStorage.getItem(this.refreshKey);
    }

    // Метод для видалення токенів
    deleteTokens(): void {
        localStorage.removeItem(this.accessKey);
        localStorage.removeItem(this.refreshKey);
    }

}

export const authService = new AuthService();