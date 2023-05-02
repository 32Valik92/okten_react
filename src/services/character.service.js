import {axiosService} from "./axios.service";
import {urls} from "../constants";

const characterService = {
    getAll: (page = 1) => axiosService.get(urls.characters, {params: {page: page}}) // тут ми разом з посиланням передали параметр для пагінації (бо нам приходить масив з 20 героїв, і щоб переходити між ними ми передаємо параметр)
}

export {
    characterService
}