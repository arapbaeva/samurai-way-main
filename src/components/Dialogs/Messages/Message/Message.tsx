import React from 'react';


export type MessageType = {
    id:number
    message: string
}
export const Message = ({id, message}: MessageType) => {
    return (
        <div>
            {message}
        </div>
    );
};

