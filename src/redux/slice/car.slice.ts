import {createAsyncThunk, createSlice, isFulfilled, isRejectedWithValue} from '@reduxjs/toolkit';
import {AxiosError} from "axios";

import {ICar, IError, IPagination} from '../../interfaces';
import {carService} from "../../services";

interface IState {
    cars: ICar[];
    prev: string;
    next: string;
    errors: IError | null;
    trigger: boolean;
    carForUpdate: ICar | null;
}

const initialState: IState = {
    cars: [],
    prev: null,
    next: null,
    errors: null,
    carForUpdate: null,
    trigger: false
};

// AsyncThunk для отримання всіх машинок
const getAll = createAsyncThunk<IPagination<ICar[]>, void>(
    'carSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await carService.getAll();
            return data
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data);
        }
    }
)

// AsyncThunk для створення машинки
const create = createAsyncThunk<void, { car: ICar }>(
    'carSlice/create',
    async ({car}, {rejectWithValue}) => {
        try {
            await carService.create(car);
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data);
        }
    }
);

// AsyncThunk для оновлення машинки
const update = createAsyncThunk<void, { id: number, car: ICar }>(
    'carSlice/update',
    async ({id, car}, {rejectWithValue}) => {
        try {
            await carService.updateById(id, car);
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data);
        }
    }
);

// AsyncThunk для видалення машинки
const deleteCar = createAsyncThunk<void, { id: number }>(
    'carSlice/deleteCar',
    async ({id}, {rejectWithValue}) => {
        try {
            await carService.deleteById(id);
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data);
        }
    }
);

const slice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        // Відхоплення машинки яку оновлюємо
        setCarForUpdate: (state, action) => {
            state.carForUpdate = action.payload;
        }
    },
    extraReducers: builder =>
        builder
            // Запис всіх машинок при успішному отриманні
            .addCase(getAll.fulfilled, (state, action) => {
                const {next, prev, items} = action.payload;
                state.cars = items;
                state.prev = prev;
                state.next = next;
            })
            .addCase(update.fulfilled, state => {
                state.carForUpdate = null;
            })
            .addMatcher(isFulfilled(), state => {
                state.errors = null;
            })
            .addMatcher(isFulfilled(create, update, deleteCar), state => {
                state.trigger = !state.trigger;
            })
            .addMatcher(isRejectedWithValue(), (state, action) => {
                state.errors = action.payload;
            })

});

const {actions, reducer: carReducer} = slice;

const carActions = {
    ...actions,
    getAll,
    create,
    update,
    deleteCar
}

export {
    carActions,
    carReducer
}