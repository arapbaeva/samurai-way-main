import React from 'react';
import {LoginReduxForm} from "./LoginForm";
import {connect} from "react-redux";
import {login} from "src/Redux/auth-reducer";
import {Navigate} from "react-router-dom";
import {AppRootStateType} from "src/Redux/redux-store";


type MapStatePropsType = {
    isAuth: boolean
    captchaUrl: string | null
}
type MapDispatchPropsType = {
    login: (email:string, password:string, rememberMe:boolean, captcha: string)=>void
}

export type LoginFormValuesType = {
    captcha: string
    email: string
    password:string
    rememberMe: boolean
}

const Login: React.FC<MapStatePropsType & MapDispatchPropsType> =(props) => {

    const onSubmit = (formData: LoginFormValuesType) => {
        console.log('captcha:', formData)
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }


    if (props.isAuth) return <Navigate replace to={'/profile'}/>
    return (
        <div>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
        </div>
    );
};

const mapStateToProps = (state: AppRootStateType): MapStatePropsType => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
})


export default connect(mapStateToProps, {login}) (Login)