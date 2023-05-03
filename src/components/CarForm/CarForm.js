import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import {carValidator} from "../../validators";
import {carService} from "../../services";

const CarForm = ({setAllCars, carForUpdate, setCarForUpdate}) => {

    const {register, handleSubmit, reset, formState: {errors, isValid}, setValue} = useForm({
        mode: 'all',
        resolver: joiResolver(carValidator)
    });

    useEffect(() => {
        if (carForUpdate) {
            setValue('brand', carForUpdate.brand, {shouldValidate: true})
            setValue('price', carForUpdate.price, {shouldValidate: true})
            setValue('year', carForUpdate.year, {shouldValidate: true})
        }
    }, [carForUpdate, setValue])

    const save = async (car) => {
        const {data} = await carService.create(car);
        setAllCars(prev => !prev)
        // console.log(data);
        reset();
    }

    const update = async (car) => {
        const {data} = await carService.updateById(carForUpdate.id, car);
        setAllCars(prev => !prev);
        setCarForUpdate(null);
        // console.log(data);
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