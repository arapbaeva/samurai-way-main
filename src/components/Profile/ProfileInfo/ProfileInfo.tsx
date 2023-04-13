import React from 'react';
import s from './ProfileInfo.module.css';
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";
import {PhotosType} from "src/api/api";
import {InputTypeFile} from "src/common/InputTypeFile/InputTypeFile";
import defaultAva from '../../../assets/images/default-avatar-profile-icon-of-social-media-user-vector.webp'
import {useAppSelector} from "src/Redux/redux-store";


export type ProfileInfoType = {
    updateStatusThunkCreator: (status: string) => void
    photos: PhotosType
    status: string
    isOwner: boolean
}

export const ProfileInfo = ({updateStatusThunkCreator, photos, status, isOwner}: ProfileInfoType) => {
    const profile = useAppSelector(state=>state.profileReducer.profile)
    return (
        <>
            <div className={s.ava}>
                {isOwner
                    ? <InputTypeFile photos={photos}/>
                    : <img src={photos.large || defaultAva} alt="photo"/>}
                <div>
                    <div>
                        <b>Full name</b>: {profile.fullName}
                    </div>
                    <div>
                        <b>Looking for a job</b>: {profile.lookingForAJob ? "yes" : "no"}
                    </div>
                        {profile.lookingForAJob &&
                            <div>
                                <b>My professional skills</b>: {profile.lookingForAJobDescription}
                            </div>
                        }
                </div>


                <ProfileStatusWithHooks status={status} updateStatusThunkCreator={updateStatusThunkCreator}/>
            </div>
        </>
    );
};
