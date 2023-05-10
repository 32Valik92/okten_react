import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {useNavigate} from "react-router-dom";

import {IAuth} from "../interfaces";
import {authValidator} from "../validators";
import {useAppDispatch, useAppSelector} from "../hooks";
import {authActions} from "../redux";

const RegisterForm = () => {
    const dispatch = useAppDispatch();
    const {error} = useAppSelector(state => state.authReducer);
    const navigate = useNavigate();

    const {register, handleSubmit, formState: {errors, isValid}} = useForm<IAuth>({
        mode: 'all',
        resolver: joiResolver(authValidator)
    });

    // Ф-ція для реєстрації юзера
    const registerUser: SubmitHandler<IAuth> = async (user) => {
        // {meta:{requestStatus}} - це ми отримуємо статус нашого запиту. Він або fulfilled або reject
        const {meta: {requestStatus}} = await dispatch(authActions.register(user));
        // Якщо статус fulfilled, то ми робимо навігацію на сторінку Пагінації
        if (requestStatus === 'fulfilled') {
            navigate('/login');
        }
    }
    return (
        <form onSubmit={handleSubmit(registerUser)}>
            <input type="text" placeholder={'username'} {...register('username')}/>
            <input type="text" placeholder={'password'} {...register('password')}/>
            {/* disabled={!isValid} означає коли форма не валідна, кнопка не працює */}
            <button disabled={!isValid}>Register</button>
            {/* Якщо в об'єкті помилок у нас > 0 елементів, то ми витягаємо перше значення з масиву помилок */}
            {Object.keys(errors).length > 0 && <div>{Object.values(errors)[0].message}</div>}
            {/* Якщо є помилка, то ми її виведемо */}
            {error && <div>{error.username[0]}</div>}
        </form>
    );
};

export {RegisterForm};