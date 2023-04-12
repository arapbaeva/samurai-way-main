import React from 'react';
import s from './Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/Posts/MyPostsContainer";
import {PhotosType} from "src/api/api";



type ProfilePropsType = {
    updateStatusThunkCreator: (status: string) => void
    status: string
    photos: PhotosType
    isAuth: boolean
    isOwner: boolean
}
export const Profile = ({updateStatusThunkCreator, status, photos, isAuth, isOwner}: ProfilePropsType) => {
    return <>
        <div className={s.content}>
            <ProfileInfo photos={photos} status={status}
                         updateStatusThunkCreator={updateStatusThunkCreator} isOwner={isOwner}/>
            <MyPostsContainer/>
        </div>
    </>
};

