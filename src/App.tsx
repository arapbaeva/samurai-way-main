import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route, Routes, useParams} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import {Store} from "redux";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {Login} from "./components/Login/Login";

type AppType = {
    store: Store
}
const App: React.FC<AppType> = (props) => {
    return (
        <div className="wrapper">
            <HeaderContainer/>
            <Navbar/>
            <Login/>
            <div className="wrapper-content">
                <Routes>
                    <Route path="/profile" element={<ProfileContainer/>}/>
                    <Route path="/profile/:userId" element={<ProfileContainer />}/>
                    <Route path="/dialogs"
                           element={<Dialogs/>}/>
                    <Route path="/users"
                           element={<UsersContainer/>}/>
                    <Route path="/login"
                           element={<Login/>}/>
                </Routes>
            </div>
        </div>

    );
};
export default App;