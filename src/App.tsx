import React from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import {Store} from "redux";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {initializedAppTC} from "./Redux/app-reducer";
import {AppRootStateType} from "./Redux/redux-store";
import {Preloader} from "./common/Preloader";

type AppType = {
    store: Store
    initializedAppTC: () => void
    initialized: boolean
}

class App extends React.Component<AppType> {
    componentDidMount() {
        this.props.initializedAppTC()
    }
    render() {
            if (!this.props.initialized) {
                return <Preloader/>
            }
        return (
            <div className="wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className="wrapper-content">
                    <Routes>
                        <Route path="/profile" element={<ProfileContainer/>}/>
                        <Route path="/profile/:userId" element={<ProfileContainer/>}/>
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
    }
}

type MapStateToPropsType = {
    initialized: boolean
}

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => ({
    initialized: state.app.initialized
})

export default connect(mapStateToProps, {initializedAppTC})(App);