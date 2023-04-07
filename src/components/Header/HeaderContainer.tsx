import React from "react";
import {Header, HeaderType} from "./Header";
import {connect} from "react-redux";
import {AppRootStateType} from "src/Redux/redux-store";
import {logOut} from "src/Redux/auth-reducer";


class HeaderContainer extends React.Component<HeaderType> {

    render() {
        const {isAuth, login, logOut} = this.props
        return <>
            <Header isAuth={isAuth} login={login} logOut={logOut}/>
        </>
    }
}

type MapStateToPropsType = {
    isAuth: boolean
    login: string
    logOut: string
}
let MapStateToProps = (state: AppRootStateType): MapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.auth.data.login,
    logOut: state.auth.auth.data.logout
})

export default connect(MapStateToProps, {logOut})(HeaderContainer);