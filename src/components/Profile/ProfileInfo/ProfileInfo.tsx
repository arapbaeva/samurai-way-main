import React from 'react';
import {PhotosType} from "../../../Redux/profile-reducer";
import s from './ProfileInfo.module.css';
import {ProfileStatus} from "./ProfileStatus";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";
import defaultUserPhoto from "../../../assets/images/default-avatar-profile-icon-of-social-media-user-vector.webp"


export type ProfileInfoType = {
    updateStatusThunkCreator: (status: string)=>void
    photos: PhotosType
    status: string
}

export const ProfileInfo = (props:ProfileInfoType) => {
    return (
        <>
            <div className={s.ava}>
                <img src={props.photos.large || defaultUserPhoto} alt="photo"/>
                <ProfileStatusWithHooks status={props.status} updateStatusThunkCreator={props.updateStatusThunkCreator}/>
            </div>
        </>
    );
};
