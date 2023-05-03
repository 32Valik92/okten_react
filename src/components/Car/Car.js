import React from 'react';
import {useDispatch} from "react-redux";

import {carService} from "../../services";
import {carActions} from "../../redux";

const Car = ({car}) => {
    const {id, brand, price, year} = car;

    const dispatch = useDispatch();

    const deleteCar = async (id) => {
        const {data} = await carService.deleteById(id);
        console.log(data);
        dispatch(carActions.setOnChange());
    };

    return (
        <div>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button onClick={() => dispatch(carActions.setCarForUpdate(car))}>Update</button>
            <button onClick={() => deleteCar(id)}>Delete</button>
        </div>
    );
};

export {Car};