import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostType} from "./MyPosts/Posts/Post";


type ProfileType = {
    posts: PostType[]
    addPost: (postText: string)=>void
    newPostText: string
    updateAddPost: (newPostText: string)=>void
}

export const Profile = (props:ProfileType ) => {
    return <div className={s.content}>
           <ProfileInfo/>
            <MyPosts posts={props.posts} addPost={props.addPost} newPostText={props.newPostText} updateAddPost={props.updateAddPost}/>
    </div>
};

