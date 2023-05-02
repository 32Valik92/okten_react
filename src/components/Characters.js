import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";

import {characterService} from "../services";
import {characterActions} from "../redux";
import {Character} from "./Character";

const Characters = () => {
    const dispatch = useDispatch(); // Для того, щоб закидувати корисне навантаження
    const {characters} = useSelector(state => state.characters); // Дістаємо наші дані зі сховища, де state = rootReducer, а ми з нього беремо characters: characterReducer

    const [query, setQuery] = useSearchParams(); // Хук для відловлювання параметрів з посилання

    // Цей useEffect() ми використовуємо, щоб при першому завантаженні додати в урлу параметр ?page=1
    useEffect(() => {
        setQuery(prev => ({...prev, page: '1'}));
    }, [])

    useEffect(() => {
        characterService.getAll(+query.get('page')).then(value => value.data).then(value => dispatch(characterActions.setCharacters(value)))
        // Останнім .then() передали дані, а саме типу такого вигляду {type: setCharacters(), payload: value}, але type
        // він отримує автоматично, бо ми викликаємо setCharacters(), в який кладемо payload
        // +query.get('page') - це наш параметр, який передаємо для взяття потрібної сторінки з даними про героїв
    }, [dispatch, query]) // Якщо query змінилася, ми render нову сторінку(героїв)

    return (
        <div>
            {characters.map(character => <Character key={character.id} character={character}/>)}
        </div>
    );
};

export {Characters};