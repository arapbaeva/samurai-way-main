import {Field, InjectedFormProps, reduxForm} from "redux-form";
import React from "react";
import s from "../Dialogs.module.css";

export type AddMessageFormType = {
    textarea: string
    newMessageBody:string
}

export const AddMessageForm: React.FC<InjectedFormProps<AddMessageFormType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field
                component="textarea"
                name="newMessageBody"
                label="Print message here"
                placeholder="Placeholder"
            />
            <div className={s.messageButton}>
                <button>
                    send message
                </button>
            </div>
        </form>
    )
}

export const AddMessageReduxForm = reduxForm<AddMessageFormType>({form: 'addMessage'})(AddMessageForm)
