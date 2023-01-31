import React from "react";
import axios from "axios";
import {Header} from "./Header";
import {AuthType, DataType, getAuthUsersThunkCreator, setAuthUsersData} from "../../Redux/auth-reducer";
import {AppRootStateType} from "../../Redux/redux-store";
import {connect} from "react-redux";
import {usersAPI} from "../../api/api";



type HeaderCType = {
    // setAuthUsersData: (data: DataType) => void
    isAuth: boolean
    login: string
    getAuthUsersThunkCreator: ()=>void
}

class HeaderContainer extends React.Component<HeaderCType> {
    componentDidMount() {
       this.props.getAuthUsersThunkCreator()
        }


    render() {
        return <>
            <Header isAuth={this.props.isAuth} login={this.props.login} getAuthUsersThunkCreator={this.props.getAuthUsersThunkCreator}/>
        </>
    }
}

type MapStateToPropsType = {
    isAuth: boolean
    login: string
}
let MapStateToProps = (state: AppRootStateType): MapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(MapStateToProps, {getAuthUsersThunkCreator})(HeaderContainer);