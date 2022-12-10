import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route, Routes, useParams} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import {Store} from "redux";
import ProfileContainer from "./components/Profile/ProfileContainer";
import {ProfileContainerWithParams} from "./components/Profile/ProfileContainerWithParams";
import HeaderContainer from "./components/Header/HeaderContainer";

type AppType = {
    store: Store
}
const App: React.FC<AppType> = (props) => {
    return (
        <div className="wrapper">
            <HeaderContainer/>
            <Navbar/>
            <div className="wrapper-content">
                <Routes>
                    <Route path="/profile" element={<ProfileContainer/>}/>
                    <Route path="/profile/:userId" element={<ProfileContainerWithParams />}/>
                    <Route path="/dialogs"
                           element={<Dialogs store={props.store}/>}/>
                    <Route path="/users"
                           element={<UsersContainer/>}/>
                </Routes>
            </div>
        </div>

    );
};
export default App;