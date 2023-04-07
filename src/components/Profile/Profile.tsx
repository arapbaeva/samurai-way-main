import React from 'react';
import s from './Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/Posts/MyPostsContainer";
import {PhotosType} from "src/Redux/profile-reducer";


type ProfilePropsType = {
    updateStatusThunkCreator: (status: string) => void
    status: string
    photos: PhotosType
    isAuth: boolean

}
export const Profile = ({updateStatusThunkCreator, status, photos, isAuth}: ProfilePropsType) => {
    return <>
        <div className={s.content}>
            <ProfileInfo photos={photos} status={status}
                         updateStatusThunkCreator={updateStatusThunkCreator}/>
            <MyPostsContainer/>
        </div>
    </>
};

