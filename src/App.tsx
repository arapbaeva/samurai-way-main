import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";
import {Profile} from "./components/Profile/Profile";
import {DialogItemType} from "./components/Dialogs/DialogItem/DialogItem";
import {MessagesType} from "./components/Dialogs/Messages/Messages";
import {PostType} from "./components/Profile/MyPosts/Posts/Post";
import MediaControlCard from "./MaterialUI/mediaControlCard/mediaControlCard";
import AlignItemsList from "./components/SideBar/AlignItemsList";
import CenteredElementGrid from "./components/SideBar/AlignItemsList";


type AppType = {
    posts: PostType[]
    dialogsData: DialogItemType[]
    messages: MessagesType[]
    addPost: (postText: string) => void
    newPostText: string
    updateAddPost: (newPostText: string)=>void
}

const App = (props: AppType) => {
    return (
        <div className="wrapper">
            <Header/>
            <Navbar/>
            <div className="wrapper-content">
                <Routes>
                    <Route path="/profile" element={<Profile posts={props.posts} addPost={props.addPost} updateAddPost={props.updateAddPost} newPostText={props.newPostText}/>}/>
                    <Route path="/dialogs"
                           element={<Dialogs dialogsData={props.dialogsData} messages={props.messages}/>}/>
                </Routes>
            </div>
        </div>

    );
};

export default App;