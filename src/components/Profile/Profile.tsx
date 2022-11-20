import React from 'react';
import s from './Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, ProfilePageType} from "../../Redux/store";
import {MyPostsContainer} from "./MyPosts/Posts/MyPostsContainer";


type ProfileType = {
    store: any
}

export const Profile = (props: ProfileType) => {
    return <div className={s.content}>
        <ProfileInfo/>
        <MyPostsContainer store={props.store} />
    </div>
};

