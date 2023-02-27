import React from 'react';
import {FormDataType, LoginReduxForm} from "./LoginForm";
import {connect} from "react-redux";
import { login} from "../../Redux/auth-reducer";
import {Navigate} from "react-router-dom";
import {AppRootStateType} from "../../Redux/redux-store";



type MapPropsType = {
    isAuth: boolean

}

const Login = (props: {login:(email: string, password:string, rememberMe: boolean)=>void, isAuth: boolean}) => {
    const onSubmit = (formData: FormDataType) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) return <Navigate replace to={'/profile'}/>

    return (
        <div>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

const mapStateToProps = (state: AppRootStateType): MapPropsType => ({
    isAuth: state.auth.isAuth
})


export default connect(mapStateToProps, {login}) (Login)