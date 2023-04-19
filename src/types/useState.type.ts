import {Dispatch, SetStateAction} from "react";

export type IUseState<T> = Dispatch<SetStateAction<T>> // Щоб описати тип нашого Сеттера для useState()