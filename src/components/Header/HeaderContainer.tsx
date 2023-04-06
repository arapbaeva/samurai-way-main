import React, {MouseEventHandler} from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {AppRootStateType} from "src/Redux/redux-store";
import {logOut} from "src/Redux/auth-reducer";



type HeaderCType = {
    isAuth: boolean
    login: string
    logOut: MouseEventHandler<HTMLButtonElement> | undefined
}

class HeaderContainer extends React.Component<HeaderCType> {

    render() {
        return <>
            <Header isAuth={this.props.isAuth} login={this.props.login} logOut={this.props.logOut} />
        </>
    }
}

type MapStateToPropsType = {
    isAuth: boolean
    login: string
    logOut:string
}
let MapStateToProps = (state: AppRootStateType): MapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.auth.data.login,
    logOut: state.auth.auth.data.logout
})

export default connect(MapStateToProps, {logOut})(HeaderContainer);