const baseURL = 'http://owu.linkpc.net/carsAPI/v2';

const cars = '/cars';
const auth = '/auth';

const urls = {
    cars: {
        cars,
        byId: (id: number): string => `${cars}/${id}`
    },
    auth: {
        register: '/users',
        login: auth, // для логінації
        refresh: `${auth}/refresh`, // Будемо відправляти refresh token, і отримувати нову пару ключів, щоб сесія продовжувалася
        me: `${auth}/me` // Для отримання інфи про користувача під яким зайшли
    }
}

export {
    baseURL,
    urls
}