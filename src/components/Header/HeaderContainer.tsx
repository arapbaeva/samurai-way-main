import React, {MouseEventHandler} from "react";
import {Header} from "./Header";
import {getAuthUsersThunkCreator, logOut} from "../../Redux/auth-reducer";
import {AppRootStateType} from "../../Redux/redux-store";
import {connect} from "react-redux";


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
    login: state.auth.login,
    logOut: state.auth.logOut
})

export default connect(MapStateToProps, {logOut})(HeaderContainer);