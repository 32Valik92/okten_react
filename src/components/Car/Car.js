import React from 'react';

import {carService} from "../../services";

const Car = ({car, setCarForUpdate, setOnChange}) => {
    const {id, brand, price, year} = car;

    const deleteCar = async (id) => {
        const {data} = await carService.deleteById(id);
        setOnChange(prev => !prev)
        console.log(data);
    };

    return (
        <div>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button onClick={() => setCarForUpdate(car)}>Update</button>
            <button onClick={() => deleteCar(id)}>Delete</button>
        </div>
    );
};

export {Car};