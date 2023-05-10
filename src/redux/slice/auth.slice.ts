import {createAsyncThunk, createSlice, isFulfilled, isRejectedWithValue} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {IAuth, IErrorAuth, IUser} from "../../interfaces";
import {authService} from "../../services";

interface IState {
    error: IErrorAuth;
    me: IUser;
}

const initialState: IState = {
    error: null,
    me: null
}

// AsyncThunk для відправки юзера на реєстрацію, та отримання помилки вразі невдачі
const register = createAsyncThunk<void, IAuth>(
    'authSlice/register',
    async (user, {rejectWithValue}) => {
        try {
            await authService.register(user);
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data);
        }
    }
);

// AsyncThunk для логінації користувача і отримання інформації про залогованого користувача
const login = createAsyncThunk<IUser, IAuth>(
    'authSlice/login',
    async (user, {rejectWithValue}) => {
        try {
            return await authService.login(user); // Просто чекаємо поки все залогіниться
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response.data);
        }
    }
);

// AsyncThunk для взяття та повернення залогіненого користувача
const me = createAsyncThunk<IUser, void>(
    'authSlice/me',
    async () => {
        const {data} = await authService.me();
        return data;
    }
)

const slice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            // Запис до state нашого залогіненого користувача
            .addCase(login.fulfilled, (state, action) => {
                state.me = action.payload;
            })
            // Якщо ми вже залогінені і успішно отримали me, то воно буде показувати нам нашого юзера в правому верхньому куті
            .addCase(me.fulfilled, (state, action) => {
                state.me = action.payload;
            })
            // Якщщо все успішно, то записуємо в помилки null
            .addMatcher(isFulfilled(), state => {
                state.error = null;
            })
            // Слідкуємо за "успішним" отриманням помилок
            .addMatcher(isRejectedWithValue(), (state, action) => {
                state.error = action.payload as IErrorAuth;
            })
});

const {actions, reducer: authReducer} = slice;

const authActions = {
    ...actions,
    register,
    login,
    me
}

export {
    authReducer,
    authActions
}