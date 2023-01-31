import React from 'react';
import {PhotosType} from "../../../Redux/profile-reducer";
import s from './ProfileInfo.module.css';
import {ProfileStatus} from "./ProfileStatus";


export type ProfileInfoType = {
    updateStatusThunkCreator: (status: string)=>void
    photos: PhotosType
    status: string
}

export const ProfileInfo = (props:ProfileInfoType) => {
    return (
        <>
            {/*<div>*/}
            {/*    <img*/}
            {/*        src="https://images.unsplash.com/photo-1518289646039-3e6c87a5aaf6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHBpbmslMjBhYnN0cmFjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"*/}
            {/*        alt=""/>*/}
            {/*</div>*/}
            <div className={s.ava}>
                <img src={props.photos.large} alt="photo"/>
                <ProfileStatus  status={props.status} updateStatusThunkCreator={props.updateStatusThunkCreator} />
            </div>
        </>
    );
};
