import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';

import {AppDispatch, RootState} from '../redux';

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector; // Типізований useSelector
const useAppDispatch = () => useDispatch<AppDispatch>() // Типізований useSelector Dispatch>()

export {
    useAppDispatch,
    useAppSelector
}