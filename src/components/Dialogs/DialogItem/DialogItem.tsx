import s from "../Dialogs.module.css";
import {Link} from "react-router-dom";
import React from "react";

type DialogsPropsType = {
    name: string
    id: number
}

export const DialogItem = (props: DialogsPropsType) => {
    let path = "/dialog/" + props.id;

    return (
        <div className={s.dialog + ' ' + s.active}>
            <Link to={path}>{props.name}</Link>
        </div>
    )
}
