import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {HashRouter} from "react-router-dom";

import {Provider} from "react-redux";
import {store} from "src/Redux/redux-store";

    ReactDOM.render(
        <HashRouter>
            <Provider store={store}>
                <App store={store} />
            </Provider>
        </HashRouter>,
        document.getElementById('root')
    );


