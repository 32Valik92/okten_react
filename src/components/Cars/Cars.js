import React, {useEffect, useState} from 'react';
import {carService} from "../../services/car.service";
import Car from "../Car/Car";
import CarForm from "../CarForm/CarForm";

const Cars = () => {
    const [cars, setCars] = useState([]);
    const [allCars, setAllCars] = useState(null);
    const [carForUpdate, setCarForUpdate] = useState(null);
    const [onChange, setOnChange] = useState(false)

    useEffect(() => {
        carService.getAll().then(value => value.data).then(value => setCars(value))
    }, [allCars, onChange]);

    return (
        <div>
            <CarForm setAllCars={setAllCars} carForUpdate={carForUpdate} setCarForUpdate={setCarForUpdate}/>
            <hr/>
            {cars.map(car => <Car key={car.id} car={car} setCarForUpdate={setCarForUpdate} setOnChange={setOnChange}/>)}
        </div>
    );
};

export default Cars;