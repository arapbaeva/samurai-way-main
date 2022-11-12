import React from 'react';
import {Link} from "react-router-dom";

export type DialogItemType = {
    name: string
    id: number
}


export const DialogItem = (props: DialogItemType) => {
    let path = '/dialogs/' + props.id
    return (
        <div>
            <Link to={path}>{props.name}</Link>
        </div>
    )
}


