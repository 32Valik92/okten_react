import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import {unstable_HistoryRouter as BrowserRouter} from 'react-router-dom'; // перейменували, щоб не змынювати теги

import App from './App';
import {setupStore} from './redux';
import {history} from './services'; //

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
const store = setupStore();

root.render(
    <Provider store={store}>
        {/* Тепер BrowserRouter має таку ж history, як і та, яку ви створили в axios.service */}
        {/*//@ts-expect-error*/}
        <BrowserRouter history={history}>
            <App/>
        </BrowserRouter>
    </Provider>
);