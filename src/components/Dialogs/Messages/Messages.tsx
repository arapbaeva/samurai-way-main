import React, {ChangeEvent} from 'react';
import s from "../Dialogs.module.css";
import {Button, TextField} from "@mui/material";
import {ActionsTypes, MessageType} from "../../../Redux/store";
import {Message} from "./Message/Message";
import {addMessageAC, updateMessageAC} from "../../../Redux/dialogs-reducer";

export type MessagesType = {
    message: string
    messages: MessageType[]
    dispatch: (action: ActionsTypes) => void
    // addMessage: ()=> void
    // updateMessage: (newPostText: string)=>void
}


export const Messages = (props: MessagesType) => {

    const addMessage = () => {
        props.dispatch(addMessageAC())
    }
    const onChangeInputHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch( updateMessageAC(e.currentTarget.value))
    }

    let messageElements = props.messages.map((el, index) => {
        return (
            <Message id={el.id} message={el.message} />
        )
    })

return (
    <div>
        <div className={s.message}>
            {messageElements}

        </div>
        <div className={s.messageBlock}>
            <div className={s.messageInput}>
                <TextField
                    id="outlined-textarea"
                    label="Print message here"
                    placeholder="Placeholder"
                    multiline
                    color="success"
                    size="medium"
                    onChange={onChangeInputHandler}
                />
            </div>
            <div className={s.messageButton}>
                <Button variant="contained" color="success" size="small"  onClick={addMessage}>
                    send message
                </Button>
            </div>
        </div>
    </div>
)
}


