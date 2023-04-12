import React from 'react';
import s from './ProfileInfo.module.css';
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";
import {PhotosType} from "src/api/api";
import {InputTypeFile} from "src/common/InputTypeFile/InputTypeFile";
import defaultAva from '../../../assets/images/default-avatar-profile-icon-of-social-media-user-vector.webp'


export type ProfileInfoType = {
    updateStatusThunkCreator: (status: string) => void
    photos: PhotosType
    status: string
    isOwner: boolean
}

export const ProfileInfo = ({updateStatusThunkCreator, photos, status, isOwner}: ProfileInfoType) => {
    return (
        <>
            <div className={s.ava}>
                {isOwner
                    ? <InputTypeFile photos={photos}/>
                    : <img src={photos.large || defaultAva} alt="photo"/>}
                <ProfileStatusWithHooks status={status} updateStatusThunkCreator={updateStatusThunkCreator}/>
            </div>
        </>
    );
};
