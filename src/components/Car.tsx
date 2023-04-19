import {FC} from "react";
import {ICar} from "../interfaces/car.interface";
import {IUseState} from "../types/useState.type";
import {carService} from "../services/car.service";

interface IProps {
    car: ICar;
    setCarForUpdate: IUseState<ICar | null>;
    setOnChange: IUseState<boolean>;
}


const Car: FC<IProps> = ({car, setCarForUpdate, setOnChange}) => {
    const {id, brand, price, year} = car;

    const deleteCar = async () => {
        await carService.deleteById(id);
        setOnChange(prevState => !prevState);
    }

    return (
        <div>
            <div>
                <div>id: {id}</div>
                <div>brand: {brand}</div>
                <div>price: {price}</div>
                <div>year: {year}</div>
            </div>
            <div>
                <button onClick={() => setCarForUpdate(car)}>Update</button>
                <button onClick={() => deleteCar()}>Delete</button>
            </div>
        </div>
    );
};

export default Car;