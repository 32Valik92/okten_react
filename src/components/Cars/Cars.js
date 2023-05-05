import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {carActions} from "../../redux";
import {Car} from "../Car/Car";

const Cars = () => {

    const dispatch = useDispatch(); // Будемо класти машини в сховище
    const {cars, trigger} = useSelector(state => state.carStore) // Дістаємо і користуємося

    useEffect(() => {
        dispatch(carActions.getAll());
    }, [trigger, dispatch]);


    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};