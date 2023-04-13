import React from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import {Store} from "redux";
import HeaderContainer from "./components/Header/HeaderContainer";
import {connect} from "react-redux";
import {initializedAppTC} from "./Redux/app-reducer";
import {AppRootStateType} from "./Redux/redux-store";
import {LinearProgress} from "@mui/material";
import {Preloader} from "src/common/Preloader";
import {NotFound} from "src/components/NotFound/NotFound";


type AppType = {
    store: Store
    initializedAppTC: () => void
    initialized: boolean
}
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"));
const UsersContainer = React.lazy(() => import( "./components/Users/UsersContainer"));
const Dialogs = React.lazy(() => import( "./components/Dialogs/Dialogs"));
const Login = React.lazy(() => import( "./components/Login/Login"));


class App extends React.Component<AppType> {
    componentDidMount() {
        this.props.initializedAppTC()
    }
    render() {
            if (!this.props.initialized) {
                return <Preloader />
            }
        return (
            <div className="wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className="wrapper-content">
                    <React.Suspense fallback={<div><LinearProgress /></div>}>
                    <Routes>
                        <Route path="/profile" element={<ProfileContainer/>}/>
                        <Route path="/profile/:userId" element={<ProfileContainer/>}/>
                        <Route path="/dialogs"
                               element={<Dialogs/>}/>
                        <Route path="/users"
                               element={<UsersContainer/>}/>
                        <Route path="/login"
                               element={<Login/>}/>
                        <Route path="/*" element={<NotFound/>}/>
                    </Routes>
                    </React.Suspense>
                </div>
            </div>
        );
    }
}

type MapStateToPropsType = {
    initialized: boolean
}

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => ({
    initialized: state.app.initialized
})

export default connect(mapStateToProps, {initializedAppTC})(App);