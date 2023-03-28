import React, {ChangeEvent, useState} from 'react';


type ProfileStatusType = {
    status: string
    updateStatusThunkCreator: (status: string) => void
}

export const ProfileStatusWithHooks = (props:ProfileStatusType) => {

    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    const activateMode = () => {
        setEditMode(true)
    }

    const deActivateMode = () => {
        setEditMode(false)
        props.updateStatusThunkCreator(status)
    }

    const onStatusChange = (event:ChangeEvent<HTMLInputElement>) => {
          setStatus(event.currentTarget.value)
    }

//10802199300471
    return <>
            {!editMode &&
               <div>
                   <span onDoubleClick={activateMode}>{status || '---------------'}</span>
               </div>
             }
            {
                editMode &&
                <div>
                    <input autoFocus={true} onChange={onStatusChange}  onBlur={deActivateMode} value={status}/>
                </div>
            }
        </>
    }


