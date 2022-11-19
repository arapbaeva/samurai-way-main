import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {HashRouter} from "react-router-dom";
import {AppRootStateType, store} from "./Redux/redux-store";
import {Provider} from "react-redux";


export const renderTree = (state: AppRootStateType) => {
    ReactDOM.render(
        <HashRouter>
            <Provider store={store}>
                <App state={state} dispatch={store.dispatch.bind(store)} store={store}/>
            </Provider>
        </HashRouter>,
        document.getElementById('root')
    );
}

renderTree(store.getState())

store.subscribe(() => {
    let state = store.getState()
    renderTree(state)
})


