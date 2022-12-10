import React from 'react';
import s from './Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/Posts/MyPostsContainer";
import {Store} from "redux";
import {PhotosType} from "../../Redux/profile-reducer";

type ProfilePropsType = {
    photos: PhotosType
}
export const Profile = (props: ProfilePropsType) => {
    return <div className={s.content}>
        <ProfileInfo  photos={props.photos}/>
        <MyPostsContainer />
    </div>
};

