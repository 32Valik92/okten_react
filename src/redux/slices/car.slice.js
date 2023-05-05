import {createAsyncThunk, createSlice, isFulfilled, isPending, isRejectedWithValue} from "@reduxjs/toolkit";
import {carService} from "../../services";

let initialState = {
    cars: [],
    carForUpdate: null,
    trigger: null,
    loading: false,
    error: null
}

const getAll = createAsyncThunk(
    'carSlice/getAll',
    async (_, thunkAPI) => {
        try {
            const {data} = await carService.getAll(); // запит на сервер та отримання всіх машин
            return data // Повертається в payload
        } catch (e) { // якщо була якась помилка, то ми маємо повернути її
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const create = createAsyncThunk(
    'carSlice/cerate',
    async ({car}, thunkAPI) => {
        try {
            await carService.create(car)
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const update = createAsyncThunk(
    'carSlice/update',
    async ({car, id}, thunkAPI) => {
        try {
            await carService.updateById(id, car)
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const deleteCar = createAsyncThunk(
    'carSlice/deleteCar',
    async ({id}, thunkAPI) => {
        try {
            await carService.deleteById(id)
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const slice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        setCarForUpdate: (state, action) => {
            state.carForUpdate = action.payload
        }
    },
    // Перший варіант запису
    // extraReducers: {
    //     [getAll.fulfilled]: (state, action) => {
    //         state.cars = action.payload
    //     },
    //     [create.fulfilled]: state => {
    //         state.trigger = !state.trigger
    //     }
    // }

    // Другий
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.cars = action.payload
            })
            .addCase(update.fulfilled, state => {
                state.carForUpdate = null; // Робимо 'create' дізейбленим
            })
            .addMatcher(isPending(), state => {
                state.loading = true;
                state.error = null;

            })
            .addMatcher(isFulfilled(), state => {
                state.loading = false;
                state.error = null;
            })
            .addMatcher(isRejectedWithValue(), (state, action) => {
                state.error = action.paylod
                state.loading = false;
            })
            .addMatcher(isFulfilled(update, create, deleteCar), state => {
                state.trigger = !state.trigger;
            })

})

const {reducer: carReducer, actions} = slice;

const carActions = {
    ...actions,
    getAll,
    create,
    update,
    deleteCar
}

export {
    carReducer,
    carActions,
}