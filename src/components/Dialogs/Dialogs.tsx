import React from 'react';
import {DialogItem, DialogItemType} from "./DialogItem/DialogItem";
import {Messages, MessagesType} from "./Messages/Messages";
import s from './Dialogs.module.css';
import {Button, TextField} from "@mui/material";



type DialogsType = {
    dialogsData: DialogItemType[]
    messages: MessagesType[]
}
export const Dialogs = (props: DialogsType) => {

    let dialogsElements = props.dialogsData.map(el => <DialogItem name={el.name} id={el.id}/>)
    let messageElements = props.messages.map(el => <Messages message={el.message}/>)
    return (
        <div className={s.dialogs}>
        <div className={s.dialogItem}>
            {dialogsElements}
        </div>
            <div className={s.message}>
                {messageElements}
            </div>
            <div className={s.messageBlock}>
                <div className={s.messageInput}>
                    <TextField
                        id="outlined-textarea"
                        label="Print post here"
                        placeholder="Placeholder"
                        multiline
                        color="success"
                        size="medium"
                    />
                </div>
                <div className={s.messageButton}>
                    <Button variant="contained" color="success" size="small" >
                       send message
                    </Button>
                </div>
            </div>
        </div>
    )
}

