import React from 'react';

export type MessagesType = {
    message: string
}

export const Messages = (props: MessagesType) => {
return (
    <div>
        <div>{props.message}</div>
    </div>
)
}


