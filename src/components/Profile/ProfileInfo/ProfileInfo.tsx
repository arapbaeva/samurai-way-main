import React from 'react';
import {PhotosType} from "../../../Redux/profile-reducer";
import s from './ProfileInfo.module.css';
import {ProfileStatus} from "./ProfileStatus";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";


export type ProfileInfoType = {
    updateStatusThunkCreator: (status: string)=>void
    photos: PhotosType
    status: string
}

export const ProfileInfo = (props:ProfileInfoType) => {
    return (
        <>
            <div className={s.ava}>
                <img src={props.photos.large} alt="photo"/>
                <ProfileStatusWithHooks status={props.status} updateStatusThunkCreator={props.updateStatusThunkCreator}/>
            </div>
        </>
    );
};
