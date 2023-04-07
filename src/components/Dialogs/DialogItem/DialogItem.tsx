import React from 'react';
import {Link} from "react-router-dom";

export type DialogItemType = {
    name: string
    id: number
}


export const DialogItem = ({name, id}: DialogItemType) => {
    let path = '/dialogs/' + id
    return (
        <div>
            <Link to={path}>{name}</Link>
        </div>
    )
}


