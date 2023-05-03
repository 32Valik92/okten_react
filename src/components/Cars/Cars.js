import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {carActions} from "../../redux";
import {carService} from "../../services";
import {CarForm} from "../CarForm/CarForm";
import {Car} from "../Car/Car";

const Cars = () => {
    const [allCars, setAllCars] = useState(null); // Тригер, спрацьовує, коли додають машину та змінюють
    const [carForUpdate, setCarForUpdate] = useState(null); // Тригер, спрацьовує для відхопленя машини, яку змінюємо та для занесення даних до форми
    const [onChange, setOnChange] = useState(false); // Тригер, спрацьовує на видалені машини

    const dispatch = useDispatch(); // Будемо класти машини в сховище
    const {cars} = useSelector(state => state.carStore) // Дістаємо і користуємося

    useEffect(() => {
        carService.getAll().then(value => value.data).then(value => dispatch(carActions.setCars(value)));
    }, [allCars, onChange, dispatch]);


    return (
        <div>
            <CarForm setAllCars={setAllCars} carForUpdate={carForUpdate} setCarForUpdate={setCarForUpdate}/>
            <hr/>
            {cars.map(car => <Car key={car.id} car={car} setCarForUpdate={setCarForUpdate} setOnChange={setOnChange}/>)}
        </div>
    );
};

export {Cars};