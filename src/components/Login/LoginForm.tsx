import React, {useRef} from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../../common/FormControls";
import {required} from "../../Utils/validators/validators";
import  style from "../../common/FormControls.module.css"

export type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={props.handleSubmit}>
                <div><Field validate={[required]} placeholder={'Email'} name={"email"} component={Input}/></div>
                <div><Field validate={[required]} placeholder={'Password'} name={"password"} type={"password"} component={Input}/></div>
                <div><Field type={"checkbox"} name={"rememberMe"} component={Input}/></div>
                remember me
                <div>
                    {props.error && <div className={style.formSummaryError}>
                        {props.error}
                    </div>}
                    <button>Login</button>
                </div>
            </form>
        </div>
    );
};

export const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)
