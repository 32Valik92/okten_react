import axios from 'axios';
import {createBrowserHistory} from 'history';

import {baseURL, urls} from '../constants';
import {authService} from "./auth.service";
import {IWaitListCB} from "../types";

const axiosService = axios.create({baseURL});

let isRefreshing = false; // Трігер для перевірки чи ми в стані реврешу чи ні

//Масив для зберігання колбеків, які будуть іти в цю "колекцію", щоб потім коли виконався перший, ми з новими ключами перевиконали всі запити
const waitList: IWaitListCB[] = [];

// Історія навігації по браузеру, бо ми не можемо викликати тут хук useNavigate, бо це не компонента
const history = createBrowserHistory({window});


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
    async (error) => {

        // По суті це тоді, коли наш access згорів, і ми отримали помилку в response від нашого request
        // originalRequest це повністю весь запит, з урлою, та всіма даними які ми посилали на бекенд (body і тп)
        const originalRequest = error.config;

        if (error.response.status === 401) {
            if (!isRefreshing) {
                isRefreshing = true; // Говоримо що ми почали процес отримання нових ключів
                try {
                    await authService.refresh(); // Отримуємо нову пару ключів
                    isRefreshing = false; // Сказали, що все ми отримали нову пару ключів
                    afterRefresh(); // Запускаємо всі колбеки в нашій колекції
                    return axiosService(originalRequest); // Якщо з рефрешом все ок, то ми повертаємо те куди хотіли попасти
                } catch (e) { // Якщо була помилка
                    authService.deleteTokens(); // Якщо була помилка, то ми видаляємо наші токени
                    isRefreshing = false; // Ми не отримали нову пару ключів, але все одно наш процес закінчився
                    history.replace('/login?expSession=true'); // Навігація на сторінку логінації, коли рефреш помер
                    return Promise.reject(error); // Реджектне наш запит
                }
            }

            // Якщо в originRequest урла збігається з /refresh, то ми зробимо реджект
            if (originalRequest.url === urls.auth.refresh) {
                return Promise.reject(error); // Ми тормозимо наш запит і просто віддаємо користувачу помилку
            }

            // Для тих запитів які виконуються поки перший в черзі ще не закінчив процедуру отримання нових ключів
            // Тобто обіцяємо, що це ↓ запуститься, але помістивши в колекцію, воно чекає, коли запуститься
            return new Promise(resolve => {
                subscribeToWaitList(() => {
                    resolve(axiosService(originalRequest));
                })
            })
        }
        return Promise.reject(error);
    }
)

// Ф-ція для запису колбеків в колекцію
const subscribeToWaitList = (cb: IWaitListCB): void => {
    waitList.push(cb); //Запушили до колекції
}

// Ф-ція запуску колбеків
const afterRefresh = () => {
    while (waitList.length) {
        const cb = waitList.pop(); // Витягаємо з масиву наш колбек
        cb(); // Запускаємо рефреш
    }
}

export {
    axiosService,
    history
}