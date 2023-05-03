import React from 'react';
import {useForm} from "react-hook-form";

import {userService} from "../../../services";
import {useDispatch} from "react-redux";
import {userActions} from "../../../redux";

const UserForm = () => {
    const {register, handleSubmit, reset} = useForm();
    const dispatch = useDispatch(); // Будемо класти користувачів до сховища

    const addUser = async (user) => {
        const {data} = await userService.createUser(user);
        dispatch(userActions.addUser(data))
        console.log('addUser:\n', data);
        reset();
    }

    return (
        <form onSubmit={handleSubmit(addUser)}>
            <input placeholder={'name'} {...register('name')}/>
            <input placeholder={'username'} {...register('username')}/>
            <input placeholder={'email'} {...register('email')}/>
            <input placeholder={'street'} {...register('street')}/>
            <input placeholder={'suite'} {...register('suite')}/>
            <input placeholder={'city'} {...register('city')}/>
            <input placeholder={'zipcode'} {...register('zipcode')}/>
            <input placeholder={'lat'} {...register('lat')}/>
            <input placeholder={'lng'} {...register('lng')}/>
            <input placeholder={'phone'} {...register('phone')}/>
            <input placeholder={'website'} {...register('website')}/>
            <input placeholder={'companyName'} {...register('companyName')}/>
            <input placeholder={'catchPhrase'} {...register('catchPhrase')}/>
            <input placeholder={'bs'} {...register('bs')}/>

            <button>Create user</button>
        </form>
    );
};

export {UserForm};