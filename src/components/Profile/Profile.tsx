import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostType} from "./MyPosts/Posts/Post";
import {ActionsTypes, ProfilePageType} from "../../Redux/store";


type ProfileType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionsTypes) => void

}

export const Profile = (props:ProfileType ) => {
    return <div className={s.content}>
           <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts}
                     dispatch={props.dispatch}
                     postText={props.profilePage.postText}
                     newPostText={props.profilePage.newPostText}/>
    </div>
};

