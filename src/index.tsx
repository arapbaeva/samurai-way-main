import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {HashRouter} from "react-router-dom";
import {store} from "./Redux/redux-store";
import {Provider} from "react-redux";


//export const renderTree = () => {
    ReactDOM.render(
        <HashRouter>
            <Provider store={store}>
                <App store={store}/>
            </Provider>
        </HashRouter>,
        document.getElementById('root')
    );
//}

//renderTree()

// store.subscribe(() => {
//     let state = store.getState()
//     renderTree()
// })


