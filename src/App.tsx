import React from 'react';
import './App.css';
import {Dialogs} from './components/Dialogs/Dialogs';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {addPost, DialogsType, MessageType, PostsType, updateNewPostText,} from "./State";


type AppPropsType = {
    dialogs: Array<DialogsType>
    messages: Array<MessageType>
    posts: Array<PostsType>
    addPostCallBack: (postMessage: string) => void
    newPostText: string
    updateNewPostText:(newText: string) => void

}


export const App = (props: AppPropsType) => {
    return (

        <BrowserRouter>
            <div className='app-wrapper'>

                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path="dialogs/*" element={<Dialogs dialogs={props.dialogs} messages={props.messages}
                        />}/>
                        <Route path="profile/*"
                               element={<Profile posts={props.posts} addPostCallBack={addPost} newPostText={props.newPostText} updateNewPostText={props.updateNewPostText}
                               />}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}
export default App


