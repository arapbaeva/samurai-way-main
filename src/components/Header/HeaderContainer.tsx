import React from "react";
import axios from "axios";
import {Header} from "./Header";
import {AuthType, DataType, setAuthUsersData} from "../../Redux/auth-reducer";
import {AppRootStateType} from "../../Redux/redux-store";
import {connect} from "react-redux";


type HeaderCType = {
    setAuthUsersData: (data: DataType) => void
    isAuth: boolean
    login: string
}

class HeaderContainer extends React.Component<HeaderCType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true}).then(response => {
            response.data.resultCode === 0 && this.props.setAuthUsersData(response.data.data)
            console.log('data' + response.data.data.login)
        })
    }

    render() {
        return <>
            <Header isAuth={this.props.isAuth} login={this.props.login} />
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

export default connect(MapStateToProps, {setAuthUsersData})(HeaderContainer);