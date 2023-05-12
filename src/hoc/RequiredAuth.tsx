import {FC, ReactElement} from 'react';
import {authService} from "../services";
import {Navigate} from "react-router-dom";

interface IProps {
    children: ReactElement
}

const RequiredAuth: FC<IProps> = ({children}) => {
    const accessToken = authService.getAccessToken();

    // children це той компонент, який знаходиться в тезі RequiredAuth в App.tsx файлі
    // Якщо немає access токенів, то ми робимо навігацію на /login
    if (!accessToken) {
        return <Navigate to={'/login'}/>;
    }

    // інакше віддаємо children
    return children;
};

export {RequiredAuth};