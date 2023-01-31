import React from 'react';
import s from './Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/Posts/MyPostsContainer";
import {PhotosType} from "../../Redux/profile-reducer";



type ProfilePropsType = {
    updateStatusThunkCreator: (status: string)=>void
    status: string
    photos: PhotosType
    isAuth: boolean

}
export const Profile = (props: ProfilePropsType) => {
    // if (!props.isAuth) return  <Navigate replace to="/login" />
    return <>
        <div className={s.content}>
            <ProfileInfo photos={props.photos} status={props.status} updateStatusThunkCreator={props.updateStatusThunkCreator} />
            <MyPostsContainer/>
        </div>
    </>
};

