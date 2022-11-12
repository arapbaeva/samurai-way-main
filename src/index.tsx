import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {HashRouter} from "react-router-dom";
import state, {addPost, RootStateType, updateAddPost} from './Redux/state';

export const renderTree = (state: RootStateType) => {
    ReactDOM.render(
        <HashRouter>
            <App posts={state.profilePage.posts} dialogsData={state.dialogsPage.dialogsData} messages={state.dialogsPage.messages} addPost={addPost} newPostText={state.profilePage.newPostText} updateAddPost={updateAddPost}/>
        </HashRouter>,
        document.getElementById('root')
    );
}
renderTree(state)


