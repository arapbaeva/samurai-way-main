import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";
import {Profile} from "./components/Profile/Profile";
import UsersContainer from "./components/Users/UsersContainer";

type AppType = {
    store: any
}
const App: React.FC<AppType> = (props) => {
    return (
        <div className="wrapper">
            <Header/>
            <Navbar/>
            <div className="wrapper-content">
                <Routes>
                    <Route path="/profile" element={<Profile store={props.store}/>}/>
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