import React from 'react';

import {CarForm, Cars} from "../components";
import {useSelector} from "react-redux";

const CarPage = () => {
    const {error, loading} = useSelector(state => state.carStore);
    return (
        <div>
            <CarForm/>
            {error && <h1>{JSON.stringify(error)}</h1>}
            {loading && <h1>Loading...</h1>}
            <hr/>
            <Cars/>
        </div>
    );
};

export {CarPage};