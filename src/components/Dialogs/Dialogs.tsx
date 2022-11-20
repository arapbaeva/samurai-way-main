import React from 'react';
import {DialogItem} from "./DialogItem/DialogItem";
import s from './Dialogs.module.css';
import {DialogsDataType} from "../../Redux/store";
import {MessagesContainer} from "./Messages/Message/MessagesContainer";
import {Store} from "redux";


type DialogsType = {
    store: Store
}
export const Dialogs = (props: DialogsType) => {
    const state = props.store.getState().dialogsReducer
    let dialogsElements = state.dialogsData.map((el: DialogsDataType) => <DialogItem key={el.id} name={el.name} id={el.id}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItem}>
                {dialogsElements}
            </div>
          <MessagesContainer  store={props.store}/>
        </div>
    )
}

