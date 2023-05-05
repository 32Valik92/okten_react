import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {useDispatch, useSelector} from "react-redux";

import {carValidator} from "../../validators";
import {carActions} from "../../redux";

const CarForm = () => {

    const {register, handleSubmit, reset, formState: {errors, isValid}, setValue} = useForm({
        mode: 'all',
        resolver: joiResolver(carValidator)
    });
    const dispatch = useDispatch(); // Будемо класти в сховище наш новий car
    const {carForUpdate} = useSelector(state => state.carStore);

    useEffect(() => {
        if (carForUpdate) {
            setValue('brand', carForUpdate.brand, {shouldValidate: true})
            setValue('price', carForUpdate.price, {shouldValidate: true})
            setValue('year', carForUpdate.year, {shouldValidate: true})
        }
    }, [carForUpdate, setValue])

    const save = async (car) => {
        await dispatch(carActions.create({car: car}));
        reset();
    }

    const update = async (car) => {
        await dispatch(carActions.update({id: carForUpdate.id, car: car}));
        reset();
    };

    return (
        <form onSubmit={handleSubmit(carForUpdate ? update : save)}>
            <input type='text' placeholder={'brand'} {...register('brand')}/>
            {errors.brand && <span>{errors.brand.message}</span>}

            <input type='text' placeholder={'price'} {...register('price')}/>
            {errors.price && <span>{errors.price.message}</span>}

            <input type='text' placeholder={'year'} {...register('year')}/>
            {errors.year && <span>{errors.year.message}</span>}

            <button disabled={!isValid}>{carForUpdate ? 'Update' : 'Create'}</button>
        </form>
    );
};

export {CarForm};