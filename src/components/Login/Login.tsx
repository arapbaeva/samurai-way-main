import React from 'react';
import {FormDataType, LoginReduxForm} from "./LoginForm";

export const Login = () => {
    const onSubmit = (formData: FormDataType) => {
        console.log(formData)
    }
    return (
        <div>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};
