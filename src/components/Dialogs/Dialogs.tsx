import React from 'react';
import {DialogItem} from "./DialogItem/DialogItem";
import {Messages} from "./Messages/Messages";
import s from './Dialogs.module.css';
import {DialogsDataType} from "../../Redux/store";


type DialogsType = {
    store: any
    // dialogsData: DialogItemType[]
    // message: string
    // messages: MessageType[]
    // dispatch: (action: ActionsTypes) => void
    // addMessage: ()=> void
    // updateMessage: (newPostText: string)=>void
}
export const Dialogs = (props: DialogsType) => {
    const state = props.store.getState().dialogsReducer
    let dialogsElements = state.dialogsData.map((el: DialogsDataType) => <DialogItem name={el.name} id={el.id}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItem}>
                {dialogsElements}
            </div>
            <Messages messages={state.messages} message={state.newMessageText} dispatch={props.store.dispatch}
                      // addMessage={props.addMessage}
                      // updateMessage={props.updateMessage}
            />
        </div>
    )
}

