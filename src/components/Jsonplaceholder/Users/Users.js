import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {userService} from "../../../services";
import {userActions} from "../../../redux";
import {UserForm} from "../UserForm/UserForm";
import {User} from "../User/User";


const Users = () => {
    const dispatch = useDispatch(); // Будемо класти користувачів у сховище
    const {users} = useSelector(state => state.userStore) // Дістаємо і користуємося
    useEffect(() => {
        userService.getAll().then(value => value.data).then(value => dispatch(userActions.setUsers(value)));
    }, [dispatch]);

    return (
        <div>
            <UserForm/>
            <hr/>
            {users.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
};

export {Users};