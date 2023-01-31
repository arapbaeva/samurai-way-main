import React from 'react';
import s from "../Dialogs.module.css";
import {Message} from "./Message/Message";
import {PostsPropsType} from "./Message/MessagesContainer";
import {AddMessageFormType, AddMessageReduxForm} from "./AddMessageForm";

export const Messages = (props: PostsPropsType) => {

    const onSubmit = (values: AddMessageFormType) => {
        props.addMessage(values.newMessageBody)
    }

    let messageElements = props.messages.map((el, index) => {
        return (
            <div key={index}>
            <Message id={el.id} message={el.message}/>
            </div>
        )
    })
    return (
        <div>
            <div className={s.message}>
                {messageElements}
            </div>
            <div className={s.messageBlock}>
                <div className={s.messageInput}>
                 <AddMessageReduxForm onSubmit={onSubmit} />
                </div>
            </div>
        </div>
    )
}





