import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../../common/FormControls";
import {required} from "../../Utils/validators/validators";

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
                <div><Field validate={[required]} placeholder={'Login'} name={"login"} component={Input}/></div>
                <div><Field validate={[required]} placeholder={'Password'} name={"password"} component={Input}/></div>
                <div><Field type={"checkbox"} name={"rememberMe"} component={Input}/></div>
                remember me
                <div>
                    <button>Login</button>
                </div>
            </form>
        </div>
    );
};

export const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)
