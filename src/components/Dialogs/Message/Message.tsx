import s from "../Dialogs.module.css";
import React from "react";


type MessagePropsType = {
    message: string
    id: number
}


export const Message = (props: MessagePropsType) => {
    

    return (
        <>
            <div className={s.dialog}>
                {props.message}
            </div>

        </>)
}