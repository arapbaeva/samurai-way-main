import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state, {addPost, RootStateType, updateNewPostText} from './State'

export const renderTree = (state: RootStateType) => {
    ReactDOM.render(
        <App dialogs={state.dialogsPage.dialogs} posts={state.profilePage.posts} messages={state.dialogsPage.messages}
    addPostCallBack={addPost} newPostText={state.profilePage.newPostText}
             updateNewPostText={updateNewPostText}

    />,
    document.getElementById('root')

    );
}
