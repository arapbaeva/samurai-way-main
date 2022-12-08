import React from 'react';
import s from "../Dialogs.module.css";
import {Button, TextField} from "@mui/material";
import {Message} from "./Message/Message";
import {PostsPropsType} from "./Message/MessagesContainer";

export const Messages = (props: PostsPropsType) => {
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
                    <TextField
                        value={props.message}
                        id="outlined-textarea"
                        label="Print message here"
                        placeholder="Placeholder"
                        multiline
                        color="success"
                        size="medium"
                        onChange={props.updateMessage}
                    />
                </div>
                <div className={s.messageButton}>
                    <Button variant="contained" color="success" size="small" onClick={props.addMessage}>
                        send message
                    </Button>
                </div>
            </div>
        </div>
    )
}


