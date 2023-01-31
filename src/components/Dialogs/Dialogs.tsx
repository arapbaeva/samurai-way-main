import React from 'react';
import {DialogItem} from "./DialogItem/DialogItem";
import s from './Dialogs.module.css';
import MessagesContainer from "./Messages/Message/MessagesContainer";
import {store} from "../../Redux/redux-store";

type DialogsDataType = {
    id: number
    name: string

}
export const Dialogs = () => {
    const state = store.getState().dialogsReducer
    let dialogsElements = state.dialogsData.map((el:DialogsDataType) => <DialogItem key={el.id} name={el.name} id={el.id}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItem}>
                {dialogsElements}
            </div>
          <MessagesContainer />
        </div>
    )
}

