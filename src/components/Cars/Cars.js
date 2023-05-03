import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {carActions} from "../../redux";
import {carService} from "../../services";
import {Car} from "../Car/Car";

const Cars = () => {

    const dispatch = useDispatch(); // Будемо класти машини в сховище
    const {cars, onChange} = useSelector(state => state.carStore) // Дістаємо і користуємося

    useEffect(() => {
        carService.getAll().then(value => value.data).then(value => dispatch(carActions.setCars(value)));
    }, [onChange, dispatch]);


    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};