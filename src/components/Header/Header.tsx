import React, {useEffect} from 'react';

import css from './Header.module.css';
import {NavLink} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {authService} from "../../services";
import {authActions} from "../../redux";

const Header = () => {
    const {me} = useAppSelector(state => state.authReducer);
    const dispatch = useAppDispatch();

    // Цей useEffect потрібний для того, якщо ми оновимо сторінку в яку вже залогінилися,
    // то воно далі буде показувати в правому верхньому куті ім'я користувача
    useEffect(() => {
        if (!me && authService.getAccessToken()){
            dispatch(authActions.me());
        }
    }, [me, dispatch])
    return (
        <div className={css.Header}>
            <div>Logo</div>
            {
                me ?
                    <div>
                        <span>{me.username}</span>
                        <button>Logout</button>
                    </div>
                    :
                    <div>
                        <NavLink to={'login'}>Login</NavLink>
                        <NavLink to={'register'}>Register</NavLink>
                    </div>

            }
        </div>
    );
};

export {Header};