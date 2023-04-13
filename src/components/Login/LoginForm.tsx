import React, {useRef} from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../../common/FormControls";
import {required} from "../../Utils/validators/validators";
import  style from "../../common/FormControls.module.css"
import {LoginFormValuesType} from "src/components/Login/Login";

type LoginFormOwnProps = {
    captchaUrl: string | null
}

export const LoginForm: React.FC<InjectedFormProps<LoginFormValuesType, LoginFormOwnProps> & LoginFormOwnProps> = ({handleSubmit,error,captchaUrl}) => {
    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div><Field validate={[required]} placeholder={'Email'} name={"email"} component={Input}/></div>
                <div><Field validate={[required]} placeholder={'Password'} name={"password"} type={"password"} component={Input}/></div>
                <div><Field type={"checkbox"} name={"rememberMe"} component={Input}/>remember me</div>

                {captchaUrl && <img src={captchaUrl} />}
                {captchaUrl &&  <div><Field validate={[required]} placeholder={'Symbols from image'}  name={'captcha'} component={Input}/></div>}
                <div>
                    {error && <div className={style.formSummaryError}>
                        {error}
                    </div>}
                    <button>Login</button>
                </div>
            </form>
        </div>
    );
};

export const LoginReduxForm = reduxForm<LoginFormValuesType, LoginFormOwnProps>({form: 'login'})(LoginForm)
