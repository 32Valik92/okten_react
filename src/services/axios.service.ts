import axios from 'axios';

import {baseURL} from '../constants';
import {authService} from "./auth.service";

const axiosService = axios.create({baseURL});

// axiosService.interceptors. далі вибираємо яку сторону перехоплюємо request(запит) або response(відповідь)
// в метод .use() передаємо колбек, де res - це наш response який ми перехопили
// .use() має два аргументи. Перший, коли все успішно, другий якщо помилка сталася якась
axiosService.interceptors.request.use(res => {
    const access = authService.getAccessToken(); // Витягли з локалСторіджа наш access кюч

    if (access) {
        // Дописали в .headers.Authorization я ми робили в Postman наш access ключ
        res.headers.Authorization = `Bearer ${access}`;
    }

    return res; // І передали його далі по дорозі
})

axiosService.interceptors.response.use(
    res => {
        // Якщо відповідь від сервера була і вона вдала, то ми повертаємо цей res
        return res;
    },
    // Другим параметром ми робимо якщо були помилки. В нашому випадку, коли згорів access токен і повернулася 401 помилка
    // error це та помилка, яка пішла від сервера, але інтерсептором ми її перехопили
    async error => {

        // По суті це тоді, коли наш access згорів, і ми отримали помилку в response від нашого request
        // originalRequest це повністю весь запит, з урлою, та всіма даними які ми посилали на бекенд (body і тп)
        const originalRequest = error.config;

        // ._isRefreshing - це ми додали будь-яке поле. Щоб ми знали робимо ми запит на refresh чи не робимо
        if (error.response.status === 401 && !originalRequest._isRefreshing){
            originalRequest._isRefreshing = true;

            try {
                await  authService.refresh(); // звертаємося до сервера і просимо нові ключі, якщо старі згоріли
                return axiosService(originalRequest); // Передаючи його в axiosService і повертаючи його в колбеці помилки ми повторно робимо такий самий запит
            } catch (e) {
                // Тут виходить, що крім access помер і refresh токен
                authService.deleteTokens(); // Видаляємо з локалСторіджа старі ключі
                return Promise.reject(error);
            }
        }
        return Promise.reject(error); // Можливо там ще якісь помилки пов'язані з авторизацією
    }
)
export {
    axiosService
}