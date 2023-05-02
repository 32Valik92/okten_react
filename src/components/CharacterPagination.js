import React from 'react';
import {useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";

const CharacterPagination = () => {
    const {prevPage, nextPage} = useSelector(state => state.characters);
    const [, setQuery] = useSearchParams(); // Нам потрібен тільки setQuery, бо тільки змінюємо, а саме значення query ніде не використовуємо

    // Ф-ція для перемикання пагінації назад
    const prev = () => {
        setQuery(prev1 => ({...prev1, page: +prev1.get('page') - 1}));
    }

    // Ф-ція для перемикання пагінації вперед
    const next = () => {
        setQuery(prev1 => ({...prev1, page: +prev1.get('page') + 1}));
    }

    return (
        <div>
            <button disabled={!prevPage} onClick={prev}>prev</button>
            <button disabled={!nextPage} onClick={next}>next</button>
        </div>
    );
};

export {CharacterPagination};