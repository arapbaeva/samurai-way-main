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

class HeaderContainer extends React.Component<HeaderProps> {

    render() {
        return <>
            {/*<Header isAuth={this.props.isAuth} login={this.props.login} logOut={this.props.logOut} />*/}
        </>
    }
}

type MapStateToPropsType = {
    isAuth: boolean
    login: string
    logOut:string
}
let MapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    debugger
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.auth.data.login,
        logOut: state.auth.auth.data.logout
    }
}
// const MapStateToProps = (state: AppRootStateType) => ({
//     isAuth: state.auth
// })

export type HeaderProps = ReturnType<typeof MapStateToProps> & { logOut: () => void}

export default connect(MapStateToProps, {logOut})(HeaderContainer);