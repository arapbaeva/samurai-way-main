import {Field, InjectedFormProps, reduxForm} from "redux-form";
import React from "react";
import s from "../Dialogs.module.css";
import {TextArea} from "../../../common/FormControls";
import {maxLengthCreator, required} from "../../../Utils/validators/validators";

export type AddMessageFormType = {
    textarea: string
    newMessageBody:string
}

const maxLength = maxLengthCreator(50)
export const AddMessageForm: React.FC<InjectedFormProps<AddMessageFormType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field
                component={TextArea}
                name="newMessageBody"
                label="Print message here"
                placeholder="Placeholder"
                validate={[required, maxLength]}
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
