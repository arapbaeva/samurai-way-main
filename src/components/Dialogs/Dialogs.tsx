import React from "react"
import s from './Dialogs.module.css'
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import {DialogsType} from "../../State";
import {MessageType} from '../../State';


type DialogsPropsType = {
    dialogs: Array<DialogsType>
    messages: Array<MessageType>

    // addPostCallBack: (postMessage: string) => void
}


export const Dialogs = (props: DialogsPropsType) => {
    let newMessageElement = React.createRef<HTMLTextAreaElement>()

    let onAddMessage = () => {
        let text = newMessageElement.current?.value
    }

    let dialogElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)

    let messageElements = props.messages.map(m => <Message message={m.message} id={m.id}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogElements}
            </div>

            <div className={s.messages}>
                {messageElements}
                <div className={s.dialog}>
                    <textarea ref={newMessageElement} >
            </textarea>
                </div>
                <div>
                    <button onClick={onAddMessage}>Send Message</button>
                </div>
            </div>
        </div>
    )
}
