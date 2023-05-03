import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {userService} from "../../../services";
import {userActions} from "../../../redux";
import {User} from "../User/User";


const Users = () => {
    const dispatch = useDispatch(); // Будемо класти користувачів у сховище
    const {users} = useSelector(state => state.userStore); // Дістаємо і користуємося

    useEffect(() => {
        userService.getAll().then(value => value.data).then(value => dispatch(userActions.setUsers(value)));
    }, [dispatch]);

    return (
        <div>
            {users.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
};

export {Users};