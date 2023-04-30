import {DEC, INC, RESET} from "./base.action";

const increment = () => {
    return {type: INC, payload: 2}
}

const decrement = () => {
    return {type: DEC, payload: 2}
}

const reset = () => {
    return {type: RESET, payload: 2}
}

export {
    increment,
    decrement,
    reset
}