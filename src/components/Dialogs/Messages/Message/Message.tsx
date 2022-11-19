import React from 'react';


export type MessageType = {
    id: number
    message: string
}
export const Message = (props:MessageType) => {
    return (
        <div>
            {props.message}
        </div>
    );
};

