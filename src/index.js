import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";

import App from './App';
import {setupStore} from "./redux";

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = setupStore(); // Звертаємося до нашого сховища і передаємо до провайдера

root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>

    </Provider>
);
