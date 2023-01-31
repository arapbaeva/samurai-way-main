import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";

export type FormDataType = {
    login: string
    password: string
    checkbox: boolean
}

export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={props.handleSubmit}>
                <div><Field placeholder={'Login'} name={"login"} component={"input"}/></div>
                <div><Field placeholder={'Password'} name={"password"} component={"input"}/></div>
                <div><Field type={"checkbox"} name={"rememberMe"} component={"input"}/></div>
                remember me
                <div>
                    <button>Login</button>
                </div>
            </form>
        </div>
    );
};

export const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)
