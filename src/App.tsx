import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";
import {Profile} from "./components/Profile/Profile";
import {ActionsTypes, StoreType} from "./Redux/store";
import {AppRootStateType} from "./Redux/redux-store";




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
                           element={<Dialogs store={props.store} />}/>
                </Routes>
            </div>
        </div>

    );
};

export default App;